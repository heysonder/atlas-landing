export function AppleIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={(size * 512) / 448}
      viewBox="0 0 384 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

export function PineTree({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={(size * 26) / 24}
      viewBox="0 0 24 26"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 1.5 5 12h3.2L3 20.5h7.4V25h3.2v-4.5H21L15.8 12H19L12 1.5z" />
    </svg>
  );
}

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconNoAds() {
  return (
    <svg {...strokeProps}>
      <rect x="2.5" y="6.5" width="19" height="11" rx="2.5" />
      <text
        x="11.7"
        y="14.4"
        fontSize="6.4"
        fontWeight="700"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontFamily="-apple-system, system-ui, Helvetica, Arial, sans-serif"
      >
        AD
      </text>
      <path d="M4.5 18.5 19.5 5.5" />
    </svg>
  );
}

export function IconShield() {
  return (
    <svg {...strokeProps}>
      <path d="M12 3.2 5.2 5.9v4.8c0 4 2.8 7.1 6.8 8.1 4-1 6.8-4.1 6.8-8.1V5.9L12 3.2z" />
    </svg>
  );
}

export function IconPiP() {
  return (
    <svg {...strokeProps}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <rect x="12" y="11.5" width="6.5" height="5" rx="1" />
    </svg>
  );
}

export function IconSkip() {
  return (
    <svg {...strokeProps}>
      <path d="M6.5 5.5 15 12l-8.5 6.5z" />
      <path d="M17.5 5.5v13" />
    </svg>
  );
}

export function IconNoAccount() {
  return (
    <svg {...strokeProps}>
      <circle cx="12" cy="8.5" r="3.3" />
      <path d="M6 19c0-3.3 2.7-5.6 6-5.6 1.1 0 2.2.3 3.1.8" />
      <path d="M5 5 19 19" />
    </svg>
  );
}
