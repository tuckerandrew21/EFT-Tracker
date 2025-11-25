export interface TraderColor {
  primary: string;
  bg: string;
}

export const TRADER_COLORS: Record<string, TraderColor> = {
  prapor: { primary: "#F97316", bg: "#FED7AA" },
  therapist: { primary: "#22C55E", bg: "#BBF7D0" },
  skier: { primary: "#3B82F6", bg: "#BFDBFE" },
  peacekeeper: { primary: "#6366F1", bg: "#C7D2FE" },
  mechanic: { primary: "#EAB308", bg: "#FEF08A" },
  ragman: { primary: "#EC4899", bg: "#FBCFE8" },
  jaeger: { primary: "#84CC16", bg: "#D9F99D" },
  fence: { primary: "#6B7280", bg: "#E5E7EB" },
  lightkeeper: { primary: "#FBBF24", bg: "#FDE68A" },
};

export function getTraderColor(traderId: string): TraderColor {
  return TRADER_COLORS[traderId.toLowerCase()] || { primary: "#6B7280", bg: "#E5E7EB" };
}

// Status colors for quest progress
export const STATUS_COLORS = {
  locked: { primary: "#9CA3AF", bg: "#F3F4F6", border: "#D1D5DB" },
  available: { primary: "#3B82F6", bg: "#DBEAFE", border: "#93C5FD" },
  in_progress: { primary: "#F59E0B", bg: "#FEF3C7", border: "#FCD34D" },
  completed: { primary: "#10B981", bg: "#D1FAE5", border: "#6EE7B7" },
} as const;

export type StatusColorKey = keyof typeof STATUS_COLORS;
