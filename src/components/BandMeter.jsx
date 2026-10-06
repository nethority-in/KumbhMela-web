import { useI18n } from '../i18n/I18nProvider.jsx';
import { bandClass } from '../data/calendar.js';

/**
 * The crowd band, and nothing else.
 *
 * There is deliberately no way to render the raw 0-100 score here: this
 * component takes a day and derives everything from `band`. See D3-SPEC.md
 * section 1 for why.
 */
export default function BandMeter({ day, showEstimate = true, dark = false }) {
  const { lang, pick } = useI18n();
  const label = day.band[lang] || day.band.en;
  if (!label) return null;

  return (
    <span className={`meter ${bandClass(day.bandKey)} ${dark ? 'on-dark' : ''}`}>
      <span className="dots" aria-hidden="true">
        <i /><i /><i />
      </span>
      <span>{label}</span>
      {showEstimate && (
        <span className="est" title={day.disclaimer}>
          {pick({ en: 'estimate', hi: 'अनुमान', mr: 'अंदाज' })}
        </span>
      )}
    </span>
  );
}
