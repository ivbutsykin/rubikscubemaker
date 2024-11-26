import { Face, Pzl } from "./maker";

export type CubeType = Pzl;
export type CubeView = "face";
export type CubeDirection = "up" | "down" | "left" | "right" | "front" | "back";

export interface VisualizableCase {
  type: CubeType;
  view: CubeView;
  direction: CubeDirection;
  facelets: string;
}

export type FaceletPosition = Face;
