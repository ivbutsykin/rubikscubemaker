import { Flex, Separator } from "@radix-ui/themes";
import { ColorResult } from "react-color";

import useParametersStore from "~/stores/parameters";

import ColorPickerParameter from "../molecules/ColorPickerParameter";
import ColourSchemeParameter from "./ColourSchemeParameter";

function CubeStyleParameters() {
  const parameters = useParametersStore((state) => state.parameters);
  const updateParameters = useParametersStore(
    (state) => state.updateParameters
  );

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
