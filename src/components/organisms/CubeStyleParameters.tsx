import { Flex, Separator } from "@radix-ui/themes";
import { ColorResult } from "react-color";

import useMakerStore from "~/stores/maker";

import ColorPickerParameter from "../molecules/ColorPickerParameter";
import ColourSchemeParameter from "./ColourSchemeParameter";

function CubeStyleParameters() {
  const parameters = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  const { cc } = parameters;

  return (
    <Flex direction="column">
      <Flex direction="column" p="3" gap="3">
        <ColourSchemeParameter />

        <ColorPickerParameter
          label="Cube colour"
          color={cc}
          onChange={handleCCChange}
        />
      </Flex>

      <Separator size="4" />
    </Flex>
  );

  function handleCCChange(color: ColorResult) {
    updateParameters({ cc: color.hex });
  }
}

export default CubeStyleParameters;
