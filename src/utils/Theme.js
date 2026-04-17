const shared = {
  fontHeading: '"Outfit", system-ui, sans-serif',
  fontBody: '"Plus Jakarta Sans", system-ui, sans-serif',

  radiusSm: "8px",
  radiusMd: "16px",
  radiusLg: "24px",
  radiusXl: "32px",
  radiusFull: "9999px",
  borderWidth: "2px",
  bouncyEase: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

export const lightTheme = {
  ...shared,
  background: "#FFFDF5",
  foreground: "#1E293B",
  card: "#FFFFFF",
  muted: "#F1F5F9",
  mutedForeground: "#64748B",

  accent: "#8B5CF6",
  accentForeground: "#FFFFFF",
  secondary: "#F472B6",
  tertiary: "#FBBF24",
  quaternary: "#34D399",

  border: "#E2E8F0",
  borderDark: "#1E293B",
  input: "#FFFFFF",
  inputBorder: "#CBD5E1",
  ring: "#8B5CF6",
  danger: "#EF4444",

  accentSoft: "rgba(139, 92, 246, 0.12)",
  secondarySoft: "rgba(244, 114, 182, 0.12)",
  tertiarySoft: "rgba(251, 191, 36, 0.15)",
  quaternarySoft: "rgba(52, 211, 153, 0.12)",

  popShadow: "4px 4px 0px 0px #1E293B",
  popShadowHover: "6px 6px 0px 0px #1E293B",
  popShadowActive: "2px 2px 0px 0px #1E293B",
  cardShadow: "8px 8px 0px 0px #E2E8F0",
  cardShadowPink: "8px 8px 0px 0px #F472B6",
  cardShadowViolet: "8px 8px 0px 0px #8B5CF6",
  cardShadowYellow: "8px 8px 0px 0px #FBBF24",
  cardShadowGreen: "8px 8px 0px 0px #34D399",

  popShadowSm: "2px 2px 0px 0px #1E293B",
  cardShadowSm: "4px 4px 0px 0px #E2E8F0",

  confetti: ["#8B5CF6", "#F472B6", "#FBBF24", "#34D399"],
};

export const darkTheme = {
  ...shared,
  background: "#0F172A",
  foreground: "#F1F5F9",
  card: "#1E293B",
  muted: "#1E293B",
  mutedForeground: "#94A3B8",

  accent: "#A78BFA",
  accentForeground: "#FFFFFF",
  secondary: "#F472B6",
  tertiary: "#FBBF24",
  quaternary: "#34D399",

  border: "#334155",
  borderDark: "#64748B",
  input: "#1E293B",
  inputBorder: "#475569",
  ring: "#A78BFA",
  danger: "#F87171",

  accentSoft: "rgba(167, 139, 250, 0.18)",
  secondarySoft: "rgba(244, 114, 182, 0.18)",
  tertiarySoft: "rgba(251, 191, 36, 0.18)",
  quaternarySoft: "rgba(52, 211, 153, 0.18)",

  popShadow: "4px 4px 0px 0px #475569",
  popShadowHover: "6px 6px 0px 0px #475569",
  popShadowActive: "2px 2px 0px 0px #475569",
  cardShadow: "8px 8px 0px 0px rgba(0,0,0,0.3)",
  cardShadowPink: "8px 8px 0px 0px rgba(244, 114, 182, 0.35)",
  cardShadowViolet: "8px 8px 0px 0px rgba(167, 139, 250, 0.35)",
  cardShadowYellow: "8px 8px 0px 0px rgba(251, 191, 36, 0.35)",
  cardShadowGreen: "8px 8px 0px 0px rgba(52, 211, 153, 0.35)",

  popShadowSm: "2px 2px 0px 0px #475569",
  cardShadowSm: "4px 4px 0px 0px rgba(0,0,0,0.3)",

  confetti: ["#A78BFA", "#F472B6", "#FBBF24", "#34D399"],
};
