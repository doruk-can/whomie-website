import type { APIRoute } from 'astro';
import { PATHS, LOCALES, absolute } from '../lib/site.mjs';

/** Every page in both languages, each listing its alternates. */
export const GET: APIRoute = () => {
  const urls = LOCALES.flatMap((lang: string) =>
    Object.values(PATHS).map((path) => {
      const alts = [...LOCALES, 'x-default'].map(
        (l: string) =>
          `    <xhtml:link rel="alternate" hreflang="${l}" href="${absolute(l === 'x-default' ? 'en' : l, path)}"/>`
      );
      return `  <url>\n    <loc>${absolute(lang, path)}</loc>\n${alts.join('\n')}\n  </url>`;
    })
  );
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
