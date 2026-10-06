# kumbh-web

The visitor guide, built with React. Multi-page, three languages, fully static.

## Why static

The project has no live feeds by design. The site is a read-only consumer of one
generated JSON file, so there is no server, no database, and nothing to keep
alive between now and Sept 2027. A static build is not a compromise here; it is
the correct shape for the data.

## Stack

- **Vite + React 19** - build tooling
- **React Router 7** - one route per topic, so URLs are shareable
- **No UI library.** The palette and type come from the original guide, so this
  reads as the same product
- **No state library.** The only shared state is the loaded calendar and the
  chosen language

## Commands

```bash
npm install
npm run dev            # local dev server
npm run build          # -> dist/
npm run preview        # serve the built output
npm run lint           # oxlint
```

## The one rule the components enforce

**The raw 0–100 crowd score is never rendered.** Only the four bands are:
Very High / High / Moderate / Lower, plus an "estimate" marker.

`BandMeter` takes a day and derives the label from `day.band`. There is no prop
for the number, so the rule is structural rather than a matter of discipline.
Grep the components for `score` and you should find it only in
`data/calendar.js`, where it is used for sorting and never for display.

The reason is in `../kumbh-2027/D3-SPEC.md` section 1. In short: showing 72
implies a precision we do not have, and we never describe a day as safe or
unsafe, because we model crowd size only.

## Where the data comes from

`public/data/calendar.json` is **generated**, not hand-written. It is produced by
the pipeline in the sibling `kumbh-2027` repository:

```bash
python engine/panchang_engine.py    # tithis via Swiss Ephemeris
python crowd-model/score.py         # crowd bands
```

To update the site after a data change, re-run the pipeline and copy the result:

```bash
cp ../kumbh-2027/data/dist/calendar.json public/data/calendar.json
npm run build
```

If the JSON is missing or malformed, `loadCalendar` rejects and the app renders a
notice instead of a blank page. It never falls back to invented dates.

## Languages

English, Hindi and Marathi, switched from the header and remembered in
`localStorage`. Band labels come from the JSON itself (each day carries
`label_en`, `label_hi`, `label_mr`), so a band can never show a Hindi label while
the page is in Marathi.

Dates and countdown digits are localised too - the countdown reads `०९ ८४` rather
than `09 84` in Hindi, since a countdown nobody can read is useless.

## Deploy

Any static host works. The included `Dockerfile` is a two-stage build: Vite builds,
`nginxinc/nginx-unprivileged` serves the output on `$PORT`.

The nginx config uses `try_files $uri $uri/ /index.html` because the routes are
client-side. Without it, `/days` would 404 on a hard refresh.

For the DigitalOcean Droplet, see `../kumbh-2027/deploy/droplet/SETUP.md`.
