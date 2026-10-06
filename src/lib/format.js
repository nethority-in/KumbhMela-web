const MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'],
  hi: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई',
    'अगस्त', 'सितंबर', 'अक्तूबर', 'नवंबर', 'दिसंबर'],
  mr: ['जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 'जुलै',
    'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'],
};

const NUM = {
  hi: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
  mr: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
};

/** Devanagari digits, because a countdown reading 09 84 is useless in Hindi. */
export function localiseNumber(n, lang) {
  if (lang === 'en' || !NUM[lang]) return String(n);
  return String(n).replace(/\d/g, (x) => NUM[lang][Number(x)]);
}

export function formatDate(date, lang, opts = {}) {
  const months = MONTHS[lang] || MONTHS.en;
  const day = localiseNumber(date.getDate(), lang);
  const month = months[date.getMonth()];
  const year = opts.noYear ? '' : ` ${localiseNumber(date.getFullYear(), lang)}`;
  if (opts.monthFirst) return `${month} ${day}${year}`.trim();
  return `${day} ${month}${year}`.trim();
}

export function formatRange(date, lang) {
  return formatDate(date, lang);
}

export { MONTHS };
