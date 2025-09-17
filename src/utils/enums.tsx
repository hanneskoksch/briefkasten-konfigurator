export const BaseColor = {
  Blue: "bg-glazeblue",
  White: "bg-glazewhite",
  Grey: "bg-glazegrey",
  Green: "bg-glazegreen",
} as const;

export type BaseColor = typeof BaseColor[keyof typeof BaseColor];
