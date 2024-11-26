import { VisualizableCase } from "~/types/visualizer";

import { FACE_FACELET_MAP } from "~/constants/visualizer";
import {
  calculateFaceVisualizerProperties,
  getFaceletPosition,
} from "~/helpers/visualizer";
import { useFaces } from "~/hooks/maker";

import Facelet from "../atoms/Facelet";

interface FaceVisualizerProps {
  visualizableCase: VisualizableCase;
  size: number;
  onFaceletClick?: (facelet: number) => void;
}

function FaceVisualizer(props: FaceVisualizerProps) {
  const { visualizableCase, size, onFaceletClick } = props;

  const faces = useFaces();

  const { type: cubeType, direction: cubeDirection } = visualizableCase;

  const faceletMap = FACE_FACELET_MAP[cubeType][cubeDirection];
  const { faceletSize, faceletBorderRadius, gap } =
    calculateFaceVisualizerProperties(cubeType, size);

  function renderContent() {
    return (
      <div className="FaceVisualizerContent" style={{ gap }}>
        {faceletMap.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="FaceVisualizerRow" style={{ gap }}>
              {row.map((facelet, faceletIndex) => {
                const faceletPosition = getFaceletPosition(
                  visualizableCase.facelets,
                  facelet
                );
                const color = faceletPosition
                  ? faces[faceletPosition].color
                  : "transparent";

                return (
                  <Facelet
                    key={`${rowIndex}-${faceletIndex}`}
                    color={color}
                    width={faceletSize}
                    height={faceletSize}
                    borderRadius={faceletBorderRadius}
                    {...(onFaceletClick && {
                      onClick: () => onFaceletClick(facelet),
                    })}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className="FaceVisualizer"
      style={{
        width: size,
      }}
    >
      {renderContent()}
    </div>
  );
}

export default FaceVisualizer;
