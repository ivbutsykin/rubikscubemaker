import {
  FACE_VISUALIZER_MULTIPLIERS,
  FACELET_POSITIONS,
} from "~/constants/visualizer";
import { CubeType, FaceletPosition } from "~/types/visualizer";

export function isFaceletPosition(
  position: string
): position is FaceletPosition {
  return FACELET_POSITIONS.includes(position as FaceletPosition);
}

export function getFaceletPosition(facelets: string, facelet: number) {
  const faceletPosition = facelets[facelet - 1];

  if (!isFaceletPosition(faceletPosition)) {
    return null;
  }

  return faceletPosition;
}

export function calculateFaceVisualizerProperties(
  cubeType: CubeType,
  size: number
) {
  const cubeSize = +cubeType;

  const faceletSize =
    (size * FACE_VISUALIZER_MULTIPLIERS.FACELET_SIZE) / cubeSize;
  const faceletBorderRadius =
    faceletSize * FACE_VISUALIZER_MULTIPLIERS.FACELET_BORDER_RADIUS;
  const gap = (size * FACE_VISUALIZER_MULTIPLIERS.GAP) / (cubeSize - 1);

  return { faceletSize, faceletBorderRadius, gap };
}
