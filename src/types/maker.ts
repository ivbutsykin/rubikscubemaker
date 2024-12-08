/*
 * Maker parameters are mostly identical to the VisualCube parameters:
 * https://cube.rider.biz/visualcube.php.
 *
 * Inconsistencies are handled in the `generateQueryParams` function (.../helpers/maker.ts).
 */

/* General */
export type Fmt = "png" | "gif" | "jpg" | "svg" | "tiff" | "ico"; // Image Format
export type Pzl = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10"; // Puzzle Type
export type Size = string; // Size of generated image
export type View = "plan" | "trans" | "none"; // Special View

/* State Definition */
export type Case = string; // Algorithm to solve case
export type Fd = string; // Facelet Definition

/* Cube Style */
export type Sch = string[]; // Colour Scheme (U R F D L B)
export type Cc = string; // Cube colour

/* Added Features */
export type Arw = string; // Arrow Definition
export type Ac = string; // Default Arrow Colour

export interface MakerParameters {
  fmt: Fmt;
  pzl: Pzl;
  size: string;
  view: View;
  case: Case;
  fd: Fd;
  sch: Sch;
  cc: Cc;
  arw: Arw;
  ac: Ac;
}

export type Face = "u" | "r" | "f" | "d" | "l" | "b" | "n" | "t";
