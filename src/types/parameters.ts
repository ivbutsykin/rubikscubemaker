export type Fmt = "png" | "gif" | "jpg" | "svg" | "tiff" | "ico";
export type Pzl = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
export type View = "plan" | "trans" | "none";
export type Case = string;

export interface VCParameters {
  fmt: Fmt;
  pzl: Pzl;
  view: View;
  case: Case;
}
