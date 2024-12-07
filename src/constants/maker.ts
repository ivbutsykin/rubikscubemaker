import { generateFd } from "~/helpers/maker";
import { MakerParameters } from "~/types/maker";

export const BASE_URL = "https://cube.rider.biz/visualcube.php";

export const DEFAULT_PARAMETERS: MakerParameters = {
  fmt: "svg",
  pzl: "3",
  view: "none",
  case: "",
  fd: generateFd("3"),
  sch: ["#FEFE00", "#EE0000", "#0000F2", "#FFFFFF", "#FFA100", "#00D800"], // https://github.com/Cride5/visualcube/blob/5e3d38a534375adf2a326b99941f01999199163d/visualcube.php#L115
  cc: "#000000",
  arw: "",
  ac: "#808080",
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
