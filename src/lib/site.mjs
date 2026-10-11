/**
 * Every link and address on the site. Nothing else hard-codes a URL, an email
 * or a path: change a value here and the pages, the footer, the sitemap and
 * scripts/verify.mjs all follow.
 */
export const SITE = {
  name: 'Whomie',

  /** Canonical origin. www is canonical; public/CNAME says www.whomie.com. No trailing slash. */
  url: 'https://www.whomie.com',

  email: 'admin@whomie.com',

  /** The one place the logo is named. Swap the file and these numbers when it changes. */
  logo: { src: '/logo.png', width: 1035, height: 194 },

  /** Store listings. An empty string hides that button. */
  appStore: 'https://apps.apple.com/app/whomie/id6466305118',
  playStore: '',
};

/**
 * Every page, language-neutral. English is served at the path itself and
 * Turkish under /tr/. Every path ends in a slash: the site is built with
 * trailingSlash 'always' and build.format 'directory', so GitHub Pages answers
 * /privacy-policy/ from privacy-policy/index.html with a 200 and no redirect.
 */
export const PATHS = {
  home: '/',
  privacy: '/privacy-policy/',
  terms: '/terms-conditions/',
  support: '/support/',
};

/**
 * Installed copies of the app open these URLs. They must keep answering 200
 * directly, exactly as written. verify.mjs fails if either goes missing.
 */
export const FIXED_PATHS = [PATHS.privacy, PATHS.terms];

/**
 * Pages that were removed, and where links to them go instead. Privacy §7 and
 * Terms §9 still link to the old account-deletion page; until those sentences
 * are edited, the build points them at the deletion steps on Support.
 */
export const MOVED = { '/delete-account/': PATHS.support + '#delete-account' };

export const LOCALES = ['en', 'tr'];

/** '/support/' → '/support/' in English, '/tr/support/' in Turkish. */
export function localePath(lang, path) {
  return lang === 'en' ? path : `/tr${path}`;
}

/** Absolute URL for a page, as used by canonical, hreflang and the sitemap. */
export function absolute(lang, path) {
  return SITE.url + localePath(lang, path);
}
