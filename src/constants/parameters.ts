import { MakerParameters } from "~/types/parameters";

export const DEFAULT_PARAMETERS: MakerParameters = {
  fmt: "svg",
  pzl: "3",
  view: "none",
  case: "",
  cc: "black",
};

export const PZL_OPTIONS = [
  { label: "1x1x1", value: "1" },
  { label: "2x2x2", value: "2" },
  { label: "3x3x3", value: "3" },
  { label: "4x4x4", value: "4" },
  { label: "5x5x5", value: "5" },
  { label: "6x6x6", value: "6" },
  { label: "7x7x7", value: "7" },
  { label: "8x8x8", value: "8" },
  { label: "9x9x9", value: "9" },
  { label: "10x10x10", value: "10" },
];

export const VIEW_OPTIONS = [
  { label: "None", value: "none" },
  { label: "Plan", value: "plan" },
  { label: "Transparent", value: "trans" },
];
