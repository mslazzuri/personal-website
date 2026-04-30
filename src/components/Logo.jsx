const C = {
  white:   '#FEFEFE',
  bg:      '#EFECE3',
  light:   '#8FABD4',
  blue:    '#4A70A9',
  black:   '#000000',
};

export default function Logo({ bg='transparent', fg=C.blue, size=120 }) {
  const font = "'IBM Plex Mono', monospace;";
  const fw = 900;
  const fs = 26;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <style>{`
        @keyframes terminal-blink {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0; }
        }
        .logo-cursor { animation: terminal-blink 1.1s step-start infinite; }
      `}</style>
      {bg !== 'transparent' && <rect width="120" height="120" rx="16" fill={bg}/>}
      <text x="10" y="68" fontFamily={font} fontWeight={fw} fontSize={fs} fill={fg} opacity="0.75">{'>'}</text>
      <text x="32" y="68" fontFamily={font} fontWeight={fw} fontSize={fs} fill={fg} letterSpacing="1">MSL</text>
      <rect className="logo-cursor" x="100" y="48" width="10" height="22" rx="1.5" fill={fg}/>
    </svg>
  );
}