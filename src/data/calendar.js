/* The generated calendar, loaded once and shared.
 *
 * `score` is deliberately never rendered anywhere in this app. The crowd band
 * is the only thing a visitor sees. Keeping the raw number in the payload but
 * out of the components makes that rule enforceable by review: grep for `score`
 * in the components and there should be nothing but the sort order. */

let cache = null;
let inflight = null;

export function loadCalendar() {
  if (cache) return Promise.resolve(cache);
  if (inflight) return inflight;
  inflight = fetch(`${import.meta.env.BASE_URL}data/calendar.json`)
    .then((r) => {
      if (!r.ok) throw new Error(`calendar.json: ${r.status}`);
      return r.json();
    })
    .then((json) => {
      if (!json || !Array.isArray(json.days) || json.days.length === 0) {
        throw new Error('calendar.json has no days');
      }
      cache = normalise(json);
      inflight = null;
      return cache;
    })
    .catch((e) => {
      inflight = null;
      throw e;
    });
  return inflight;
}

function normalise(json) {
  const days = json.days.map((d) => ({
    iso: d.gregorian_date,
    date: new Date(`${d.gregorian_date}T12:00:00+05:30`),
    classification: d.classification,
    score: typeof d.score === 'number' ? d.score : 0,
    bandKey: d.band?.key || 'lower',
    band: {
      en: d.band?.label_en || '',
      hi: d.band?.label_hi || '',
      mr: d.band?.label_mr || '',
    },
    reason: d.headline_reason || '',
    breakdown: Array.isArray(d.breakdown) ? d.breakdown : [],
    panchang: d.panchang || {},
    disclaimer: d.estimate_disclaimer || '',
  }));
  days.sort((a, b) => a.date - b.date);
  return { ...json, days };
}

export const isRoyal = (d) => d.classification === 'amrit_snan';

export function bandClass(key) {
  if (key === 'very_high' || key === 'high') return 'level-high';
  if (key === 'moderate') return 'level-medium';
  return 'level-low';
}

const BAND_ORDER = { very_high: 0, high: 1, moderate: 2, lower: 3 };

/** Least crowded first, royal baths excluded. */
export function quietest(days, n) {
  return days
    .filter((d) => !isRoyal(d))
    .slice()
    .sort((a, b) => a.score - b.score || a.date - b.date)
    .slice(0, n);
}

export function sortedByBand(days) {
  return days.slice().sort((a, b) => (BAND_ORDER[a.bandKey] - BAND_ORDER[b.bandKey]) || (a.date - b.date));
}
