/**
 * Checks the built site in dist/ before it is deployed. CI runs it after the
 * build; if anything fails, nothing is published.
 *
 *   npm run build && npm run verify
 *
 * It fails on:
 *   - any "[[" in dist (an unfilled [[DECIDE: ...]] in a legal text)
 *   - a missing page: every EN and TR page, the 404, and the fixed URLs the
 *     app opens, which must exist as <path>/index.html
 *   - an EN page without its TR pair, or the other way round
 *   - a title over 60 or a description over 155 characters
 *   - a missing or wrong canonical or hreflang (en, tr, x-default)
 *   - a broken internal link, a link to a missing #anchor, or an internal page
 *     link without its trailing slash (GitHub Pages would redirect it)
 *   - a request to Google Fonts (the font is self-hosted)
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { SITE, PATHS, FIXED_PATHS, LOCALES, localePath, absolute } from '../src/lib/site.mjs';

const DIST = 'dist';
const MAX_TITLE = 60;
const MAX_DESCRIPTION = 155;

let fails = 0;
const failed = new Set();
let current = '';
const section = (name) => { current = name; console.log(`\n── ${name}`); };
const ok = (m) => console.log(`  ok    ${m}`);
const bad = (m) => { fails++; failed.add(current); console.log(`  FAIL  ${m}`); };

if (!existsSync(DIST)) {
  console.log('No dist/. Run `npm run build` first.');
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]
  );
const files = walk(DIST);
const read = (f) => readFileSync(f, 'utf8');
/** '/privacy-policy/' → 'dist/privacy-policy/index.html'; '/logo.png' → 'dist/logo.png' */
const fileFor = (path) => join(DIST, path.endsWith('/') ? path + 'index.html' : path);
/** 'dist/tr/support/index.html' → '/tr/support/' */
const routeOf = (file) => '/' + relative(DIST, file).split(sep).join('/').replace(/index\.html$/, '');
const decode = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
const len = (s) => [...s].length;

/* ── pages ────────────────────────────────────────────────────────────── */
section('pages exist');
const pages = LOCALES.flatMap((lang) =>
  Object.values(PATHS).map((path) => ({ lang, path, url: localePath(lang, path), file: fileFor(localePath(lang, path)) }))
);
for (const p of pages) {
  if (existsSync(p.file)) ok(`${p.url.padEnd(22)} ${relative(DIST, p.file)}`);
  else bad(`${p.url} is missing (${relative(DIST, p.file)})`);
}
if (existsSync(join(DIST, '404.html'))) ok(`${'404'.padEnd(22)} 404.html`);
else bad('404.html is missing');

/* the URLs installed copies of the app open, in both languages */
for (const path of FIXED_PATHS) {
  for (const lang of LOCALES) {
    const url = localePath(lang, path);
    const file = join(DIST, url, 'index.html');
    if (!existsSync(file)) bad(`${SITE.url}${url} has no ${relative(DIST, file)}: the app would get a 404`);
    else if (/http-equiv="refresh"/i.test(read(file))) bad(`${SITE.url}${url} is a redirect page, not the document`);
    else ok(`${(SITE.url + url).padEnd(46)} answered directly by ${relative(DIST, file)}`);
  }
}

/* ── language pairs ───────────────────────────────────────────────────── */
section('every page has its pair in the other language');
{
  const routes = files.filter((f) => f.endsWith(`${sep}index.html`)).map(routeOf);
  const have = new Set(routes);
  let unpaired = 0;
  for (const route of routes) {
    const twin = route.startsWith('/tr/') ? route.slice(3) : `/tr${route}`;
    if (!have.has(twin)) { unpaired++; bad(`${route} has no ${twin}`); }
  }
  if (!unpaired) ok(`${routes.length} pages, ${routes.length / 2} in each language, all paired`);
}

/* ── head: title, description, canonical, hreflang ────────────────────── */
section(`titles ≤ ${MAX_TITLE}, descriptions ≤ ${MAX_DESCRIPTION}, canonical and hreflang`);
const attr = (html, re) => decode((re.exec(html) || [])[1] ?? '');
for (const p of [...pages, { lang: 'en', url: '/404', file: join(DIST, '404.html'), notFound: true }]) {
  if (!existsSync(p.file)) continue;
  const html = read(p.file);
  const problems = [];
  const title = attr(html, /<title>([^<]*)<\/title>/);
  const desc = attr(html, /<meta name="description" content="([^"]*)"/);
  if (!title) problems.push('no title');
  else if (len(title) > MAX_TITLE) problems.push(`title is ${len(title)} chars: "${title}"`);
  if (!desc) problems.push('no description');
  else if (len(desc) > MAX_DESCRIPTION) problems.push(`description is ${len(desc)} chars`);
  if (attr(html, /<html lang="([^"]*)"/) !== p.lang) problems.push(`<html lang> is not "${p.lang}"`);

  if (p.notFound) {
    /* served at any URL that does not exist, so it must not claim one */
    if (/<link rel="(canonical|alternate)"/.test(html)) problems.push('a 404 must not carry canonical or hreflang');
    if (!/<meta name="robots" content="noindex"/.test(html)) problems.push('no noindex');
  } else {
    const want = {
      canonical: absolute(p.lang, p.path),
      en: absolute('en', p.path),
      tr: absolute('tr', p.path),
      'x-default': absolute('en', p.path),
    };
    const got = {
      canonical: attr(html, /<link rel="canonical" href="([^"]*)"/),
      en: attr(html, /<link rel="alternate" hreflang="en" href="([^"]*)"/),
      tr: attr(html, /<link rel="alternate" hreflang="tr" href="([^"]*)"/),
      'x-default': attr(html, /<link rel="alternate" hreflang="x-default" href="([^"]*)"/),
    };
    for (const [k, v] of Object.entries(want)) {
      if (!got[k]) problems.push(`no ${k === 'canonical' ? 'canonical' : `hreflang ${k}`}`);
      else if (got[k] !== v) problems.push(`${k} is ${got[k]}, want ${v}`);
      else if (!existsSync(fileFor(new URL(v).pathname))) problems.push(`${k} points at a page that was not built`);
    }
  }
  if (problems.length) bad(`${p.url}: ${problems.join(' · ')}`);
  else ok(`${p.url.padEnd(22)} title ${String(len(title)).padStart(2)} · desc ${String(len(desc)).padStart(3)}${p.notFound ? ' · noindex, no canonical' : ' · canonical + hreflang en, tr, x-default'}`);
}

/* ── internal links ───────────────────────────────────────────────────── */
section('internal links');
{
  const ids = new Map();
  const idsOf = (file) => {
    if (!ids.has(file)) ids.set(file, new Set([...read(file).matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
    return ids.get(file);
  };
  const broken = [];
  let checked = 0;
  const check = (from, raw) => {
    const ref = decode(raw);
    if (/^(mailto:|tel:|data:)/.test(ref)) return;
    let target = ref;
    if (/^https?:\/\//.test(ref)) {
      if (!ref.startsWith(SITE.url + '/')) return; /* external */
      target = ref.slice(SITE.url.length);
    }
    checked++;
    const [pathPart, frag] = target.split('#');
    const path = pathPart === '' ? routeOf(from) : pathPart;
    if (!path.startsWith('/')) return broken.push(`${routeOf(from)} → ${ref} (relative link)`);
    const last = path.split('/').pop();
    if (last && !last.includes('.')) return broken.push(`${routeOf(from)} → ${ref} (no trailing slash: GitHub Pages would redirect)`);
    const file = pathPart === '' ? from : fileFor(path);
    if (!existsSync(file)) return broken.push(`${routeOf(from)} → ${ref} (nothing at ${relative(DIST, file)})`);
    if (frag && file.endsWith('.html') && !idsOf(file).has(frag)) broken.push(`${routeOf(from)} → ${ref} (no id="${frag}")`);
  };
  for (const f of files.filter((f) => f.endsWith('.html'))) {
    const html = read(f);
    for (const m of html.matchAll(/\s(?:href|src)="([^"]*)"/g)) check(f, m[1]);
    for (const m of html.matchAll(/url\(\s*["']?(\/[^"')]+)/g)) check(f, m[1]);
  }
  const sitemap = join(DIST, 'sitemap.xml');
  if (existsSync(sitemap)) for (const m of read(sitemap).matchAll(/(?:<loc>|href=")([^<"]+)/g)) check(sitemap, m[1]);

  if (broken.length) for (const b of broken) bad(b);
  else ok(`${checked} links, anchors and assets resolve; every page link ends in a slash`);
}

/* ── fonts ────────────────────────────────────────────────────────────── */
section('font is self-hosted');
{
  const hits = files
    .filter((f) => /\.(html|css|js)$/.test(f))
    .filter((f) => /fonts\.(googleapis|gstatic)\.com/.test(read(f)));
  if (hits.length) bad(`Google Fonts requested from ${hits.map((f) => relative(DIST, f)).join(', ')}`);
  else ok('no request to fonts.googleapis.com or fonts.gstatic.com');
}

/* ── unfinished legal text ────────────────────────────────────────────── */
section('no "[[" anywhere in dist (unfilled [[DECIDE: ...]] markers)');
{
  const markers = new Map(); /* marker text → Set of routes */
  let total = 0;
  for (const f of files.filter((f) => /\.(html|xml|txt|css|js|json|svg)$/.test(f))) {
    const text = read(f);
    for (let i = text.indexOf('[['); i !== -1; i = text.indexOf('[[', i + 2)) {
      total++;
      const end = text.indexOf(']]', i);
      const marker = end === -1 ? text.slice(i, i + 80) : text.slice(i, end + 2);
      if (!markers.has(marker)) markers.set(marker, new Set());
      markers.get(marker).add(f.endsWith('.html') ? routeOf(f) : relative(DIST, f));
    }
  }
  if (!total) ok('none: every legal text is complete');
  else {
    const pagesHit = new Set([...markers.values()].flatMap((s) => [...s]));
    bad(`${total} "[[" in ${pagesHit.size} files, ${markers.size} distinct markers. Fill them in src/legal/*.md (and in the app repo's docs/legal/):`);
    [...markers.entries()]
      .sort((a, b) => b[1].size - a[1].size)
      .forEach(([marker, where], i) =>
        console.log(`        ${String(i + 1).padStart(2)}. ${marker}\n            on ${[...where].sort().join(', ')}`)
      );
  }
}

console.log(fails ? `\n${fails} FAILING in: ${[...failed].join(' | ')}\n` : '\nall checks pass\n');
process.exit(fails ? 1 : 0);
