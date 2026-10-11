# Whomie — website

www.whomie.com: a one-screen landing page, Support, the Privacy Policy and
the Terms and Conditions. English at the root, Turkish
under `/tr/`, plus a bilingual 404. Astro 5 static output, plain CSS, no
client-side JavaScript.

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run verify     # checks dist/; CI runs it before every deploy
npm run preview    # serves dist/
```

## Where things are

| | |
|---|---|
| Every link, address and path | `src/lib/site.mjs`. Store URLs, the email, the logo file, the page paths. An empty `playStore` hides the Google Play button. |
| Every word, EN and TR | `src/lib/copy.ts`, one object per language with the same shape. |
| Legal texts | `src/legal/*.md` and `*.tr.md`, copied unchanged from the app repo's `docs/legal/`. |
| The logo | `public/logo.png`, drawn only by `src/components/Logo.astro`. To change it, replace the file and update `logo` in `site.mjs`. |
| Styles | `src/styles/global.css`; brand tokens at the top. Nunito Sans is bundled from `@fontsource-variable/nunito-sans`. |
| Pages | `src/pages/[...lang]/` builds each page once per language. |

## The legal texts

Edit them in the app repo, then copy them over unchanged. The site has no
account-deletion page, so `delete-account*.md` is not copied:

```sh
cp ../../mobile/whomie-expo-app/docs/legal/{privacy-policy,terms-conditions}{,.tr}.md src/legal/
```

They link to each other as `https://www.whomie.com/...`. The build turns those
links into root-relative ones (`localLinks` in `astro.config.mjs`), sends links
to removed pages where `MOVED` in `site.mjs` says (the old `/delete-account/`
goes to the deletion steps on Support), and wraps
every table in its own scroll box (`wrapTables`). The `<a id="...">` anchors
must stay: the contents lists and the other texts link to them, and `verify`
fails on a link to a missing anchor.

**`verify` fails while any `[[` is in the built site**, so a text with an
unfilled `[[DECIDE: ...]]` never deploys. It lists the markers that remain.

## URLs the app depends on

Installed copies of the app open `https://www.whomie.com/privacy-policy/` and
`https://www.whomie.com/terms-conditions/`. They must answer 200 directly, with
the trailing slash. That is why `astro.config.mjs` sets `trailingSlash:
'always'` and `build.format: 'directory'`: GitHub Pages serves
`privacy-policy/index.html` at `/privacy-policy/` with no redirect. Canonicals,
hreflang and every internal link end in a slash, and `verify` checks all of it.

The iOS universal-link domain is `whomie-next-js.vercel.app` (it serves
`/.well-known/apple-app-site-association` and `/deep-link`). This site does not
replace it; leave that Vercel project alone.

## What `npm run verify` checks

Any `[[` in `dist/`; a missing page (every EN and TR page, the 404, and the
fixed URLs as `<path>/index.html`); an EN page without its TR pair; a title over
60 or a description over 155 characters; a missing or wrong canonical or
hreflang (en, tr, x-default); a broken internal link, a missing `#anchor`, or a
page link without its trailing slash; a request to Google Fonts.

## Deploying

`.github/workflows/deploy.yml` builds, verifies and publishes to GitHub Pages on
every push to `main`. In the repo: **Settings → Pages → Source: GitHub
Actions**, then **Custom domain: `www.whomie.com`** and, once the certificate
is issued, **Enforce HTTPS**. With an Actions deploy, the custom domain is set
there; `public/CNAME` does not configure it.

DNS:

```
CNAME  www   <github-user>.github.io
A      @     185.199.108.153
A      @     185.199.109.153
A      @     185.199.110.153
A      @     185.199.111.153
AAAA   @     2606:50c0:8000::153
AAAA   @     2606:50c0:8001::153
AAAA   @     2606:50c0:8002::153
AAAA   @     2606:50c0:8003::153
```

GitHub then redirects `whomie.com` to `www.whomie.com`. Do not touch the other
records on the domain: the `app` and `dev-app` CNAMEs (the app's API on
Heroku), the MX records (Google Workspace mail) and the SPF TXT record.

After the first deploy:

```sh
curl -sI https://www.whomie.com/privacy-policy/ | head -1     # want 200
curl -sI https://www.whomie.com/terms-conditions/ | head -1   # want 200
```
