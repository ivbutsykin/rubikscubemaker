import {
  FACE_VISUALIZER_MULTIPLIERS,
  FACELET_POSITIONS,
} from "~/constants/visualizer";
import { CubeDirection, CubeType, FaceletPosition } from "~/types/visualizer";
import { square } from "~/utils/number";

import { getCubeSize } from "./maker";

export function generateFaceFaceletMap(
  cubeType: CubeType,
  cubeDirection: CubeDirection
) {
  const GAP = {
    up: 0,
    right: 1,
    front: 2,
    down: 3,
    left: 4,
    back: 5,
  };

  const cubeSize = getCubeSize(cubeType);

  const start = square(cubeSize) * GAP[cubeDirection];

  return Array.from({ length: cubeSize }, (_, i) => {
    return Array.from({ length: cubeSize }, (_, j) => {
      return start + i * cubeSize + j + 1;
    });
  });
}

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
  const cubeSize = getCubeSize(cubeType);

  const hasGap = cubeSize > 1;

  const faceletSize =
    (size * FACE_VISUALIZER_MULTIPLIERS.FACELET_SIZE) / cubeSize;
  const faceletBorderRadius =
    faceletSize * FACE_VISUALIZER_MULTIPLIERS.FACELET_BORDER_RADIUS;
  const gap = hasGap
    ? (size * FACE_VISUALIZER_MULTIPLIERS.GAP) / (cubeSize - 1)
    : 0;

  return { faceletSize, faceletBorderRadius, gap };
}
