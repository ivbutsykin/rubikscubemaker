/*
 * Documentation: https://cube.rider.biz/visualcube.php
 */

/* General */
export type Fmt = "png" | "gif" | "jpg" | "svg" | "tiff" | "ico"; // Image Format
export type Pzl = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10"; // Puzzle Type
export type View = "plan" | "trans" | "none"; // Special View

/* State Definition */
export type Case = string; // Algorithm to solve case

/* Cube Style */
export type CC = string; // Cube colour

export interface MakerParameters {
  fmt: Fmt;
  pzl: Pzl;
  view: View;
  case: Case;
  cc: CC;
}
