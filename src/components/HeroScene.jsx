/* Dawn over the Godavari, drawn entirely in SVG so the page ships no images. */
export default function HeroScene() {
  return (
    <svg
      className="hero-scene"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label="Dawn mist rising over the Godavari at first light, a soft sun low on the horizon, distant temple spires and silhouettes of pilgrims along the ghats, and small oil lamps glowing on dark water."
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d1326" />
          <stop offset="0.34" stopColor="#243150" />
          <stop offset="0.58" stopColor="#5d4a4c" />
          <stop offset="0.74" stopColor="#a96b3c" />
          <stop offset="0.86" stopColor="#dba159" />
          <stop offset="1" stopColor="#f1cb8c" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff6df" />
          <stop offset="0.35" stopColor="#f8cf86" />
          <stop offset="1" stopColor="#f8cf86" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cf9a63" />
          <stop offset="0.18" stopColor="#7a6750" />
          <stop offset="0.55" stopColor="#1d242b" />
          <stop offset="1" stopColor="#0a0d10" />
        </linearGradient>
        <radialGradient id="diyaGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffd98a" />
          <stop offset="1" stopColor="#ffd98a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1200" height="800" fill="url(#sky)" />
      <circle cx="600" cy="540" r="240" fill="url(#sun)" />
      <circle cx="600" cy="540" r="58" fill="#fff3d4" />

      <g opacity="0.5">
        <ellipse cx="600" cy="500" rx="620" ry="34" fill="#e9d6b6" opacity="0.3" />
        <ellipse cx="500" cy="560" rx="540" ry="26" fill="#f3e6c9" opacity="0.26" />
      </g>

      <path d="M0,612 L120,604 L300,610 L520,600 L760,608 L980,602 L1200,610 L1200,640 L0,640 Z" fill="#1a1b28" opacity="0.85" />
      <g fill="#13111c" opacity="0.9">
        <path d="M250,610 q14,-78 28,0 Z" />
        <rect x="244" y="600" width="40" height="14" />
        <path d="M905,610 q18,-104 36,0 Z" />
        <rect x="898" y="598" width="50" height="16" />
        <circle cx="923" cy="500" r="5" />
      </g>

      <path d="M0,634 L1200,628 L1200,660 L0,668 Z" fill="#0b0a0f" />

      <g fill="#0a0809">
        <g transform="translate(150,612)"><ellipse cx="0" cy="14" rx="6" ry="13" /><circle cx="0" cy="-2" r="4.4" /></g>
        <g transform="translate(420,610)"><ellipse cx="0" cy="15" rx="6.4" ry="14" /><circle cx="0" cy="-3" r="4.6" /><rect x="8" y="-14" width="2" height="30" /></g>
        <g transform="translate(690,613)"><ellipse cx="0" cy="13" rx="5.4" ry="12" /><circle cx="0" cy="-2" r="4" /></g>
        <g transform="translate(960,611)"><ellipse cx="0" cy="15" rx="6.2" ry="13.5" /><circle cx="0" cy="-3" r="4.6" /><rect x="-10" y="-12" width="2" height="28" /></g>
        <g transform="translate(1040,613)"><ellipse cx="0" cy="13" rx="5.2" ry="12" /><circle cx="0" cy="-2" r="3.8" /></g>
      </g>

      <rect y="650" width="1200" height="150" fill="url(#water)" />
      <ellipse cx="600" cy="700" rx="46" ry="70" fill="#f6cf8a" opacity="0.22" />

      <g stroke="#f3d49a" strokeOpacity="0.22" fill="none" strokeWidth="1.4">
        <path d="M120,690 q40,-7 80,0 t80,0 t80,0" />
        <path d="M520,716 q44,-8 88,0 t88,0 t88,0" />
        <path d="M780,700 q40,-7 80,0 t80,0 t80,0" />
      </g>

      <g>
        <g transform="translate(360,706)">
          <circle r="16" fill="url(#diyaGlow)" />
          <path d="M0,-3 C-4,-8 -2,-14 0,-18 C2,-14 4,-8 0,-3 Z" fill="#ffcf6e" />
          <ellipse cy="3" rx="9" ry="3.4" fill="#7a3b1e" />
        </g>
        <g transform="translate(640,732)">
          <circle r="14" fill="url(#diyaGlow)" />
          <path d="M0,-3 C-3,-7 -1.6,-12 0,-15 C1.6,-12 3,-7 0,-3 Z" fill="#ffd97f" />
          <ellipse cy="3" rx="8" ry="3" fill="#7a3b1e" />
        </g>
        <g transform="translate(840,712)">
          <circle r="15" fill="url(#diyaGlow)" />
          <path d="M0,-3 C-3.4,-7.5 -1.8,-13 0,-16.5 C1.8,-13 3.4,-7.5 0,-3 Z" fill="#ffcf6e" />
          <ellipse cy="3" rx="8.5" ry="3.2" fill="#7a3b1e" />
        </g>
      </g>
    </svg>
  );
}
