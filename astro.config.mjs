// @ts-check
import { defineConfig } from 'astro/config';
import { SITE, MOVED } from './src/lib/site.mjs';

/**
 * Wrap every table in the legal texts in its own scroll container, so a wide
 * table scrolls sideways on a phone and the page body never does.
 */
function wrapTables() {
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        walk(child);
        if (child.type !== 'element' || child.tagName !== 'table') return child;
        return {
          type: 'element',
          tagName: 'div',
          /* focusable, so a keyboard can scroll it too */
          properties: { className: ['table-scroll'], tabIndex: 0 },
          children: [child],
        };
      });
    };
    walk(tree);
  };
}

/**
 * The legal texts are copied from the app repo unchanged, and they link to
 * each other by absolute URL (https://www.whomie.com/privacy-policy/). Make
 * those root-relative, so they work in a local preview and verify.mjs can
 * check them like any other internal link. The Markdown itself is not touched.
 */
function localLinks() {
  const origin = SITE.url + '/';
  /* '/tr/delete-account/' → '/tr/support/#delete-account', per MOVED in site.mjs */
  const moved = (path) => {
    const tr = path.startsWith('/tr/');
    const to = MOVED[tr ? path.slice(3) : path];
    return to ? (tr ? '/tr' : '') + to : path;
  };
  return (tree) => {
    const walk = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        const href = node.properties?.href;
        if (typeof href === 'string' && href.startsWith(origin)) node.properties.href = moved(href.slice(SITE.url.length));
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: SITE.url,
  output: 'static',
  /* The app opens https://www.whomie.com/privacy-policy/ and /terms-conditions/
     with the slash. 'directory' emits privacy-policy/index.html, which GitHub
     Pages answers at exactly that URL with a 200 and no redirect. */
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  markdown: {
    rehypePlugins: [wrapTables, localLinks],
    /* keep the legal texts' quotes and apostrophes exactly as written */
    smartypants: false,
  },
  compressHTML: true,
  devToolbar: { enabled: false },
});
