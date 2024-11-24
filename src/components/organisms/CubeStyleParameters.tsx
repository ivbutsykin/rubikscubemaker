import { Flex, Separator } from "@radix-ui/themes";
import { ColorResult } from "react-color";

import useMakerStore from "~/stores/maker";

import ColorPickerParameter from "../molecules/ColorPickerParameter";
import ColorSchemeParameter from "./ColorSchemeParameter";

function CubeStyleParameters() {
  const parameters = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  const { cc } = parameters;

  return (
    <Flex direction="column">
      <Flex direction="column" p="3" gap="3">
        <ColorSchemeParameter />

        <ColorPickerParameter
          label="Cube Colour"
          color={cc}
          onChange={handleCcChange}
        />
      </Flex>

      <Separator size="4" />
    </Flex>
  );

  function handleCcChange(color: ColorResult) {
    updateParameters({ cc: color.hex });
  }
}

export default CubeStyleParameters;
