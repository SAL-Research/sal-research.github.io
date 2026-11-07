# SAL-Research website

Website of the Secure and Sustainable System Scaling Lab, published via
GitHub Pages at <https://sal-research.github.io/>.

## How it works

Pages are Handlebars templates populated from metadata — never hand-written
HTML.

- `src/templates/` — page templates (`_`-prefixed files are partials)
- `src/metadata/` — all content as data (`metadata-*.js`)
- `src/assets/` — files copied verbatim into the site root
- `src/build.js` — renders everything into `dist/` (not tracked in git)

Standalone course websites (e.g. `teaching/comparch-fall-2026`) live in their
own repositories, referenced here as submodules, and are linked from the
teaching page.

## Developing

```sh
npm install
npm start        # build + live-reload server on http://127.0.0.1:8080
```

Edit templates or metadata under `src/` — the watcher rebuilds automatically.

## Publishing

Every push to `main` builds and deploys the site via
`.github/workflows/deploy.yml` (GitHub Pages, Actions source). Generated
files are never committed.

The home-page video is picked at build time from the YouTube channel's
public uploads by newness and interaction rate (`youtube` in
`src/metadata/metadata-s4l.js`). This needs a YouTube Data API v3 key in the
`YOUTUBE_API_KEY` repository secret (or environment variable locally); without
it the build embeds the fallback playlist. The workflow also runs daily so
the pick stays current.

## Talks archive

`talks/` stores presentation files via Git LFS. It is repository storage,
not part of the published website.
