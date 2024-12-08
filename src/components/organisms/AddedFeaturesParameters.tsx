import { Flex, Separator } from "@radix-ui/themes";
import { ColorResult } from "react-color";

import useMakerStore from "~/stores/maker";

import ArrowDefinitionParameter from "./ArrowDefinitionParameter";
import ColorPickerParameter from "../molecules/ColorPickerParameter";

function AddedFeaturesParameters() {
  const { ac } = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  return (
    <Flex direction="column">
      <Flex direction="column" p="3" gap="3">
        <ArrowDefinitionParameter />
        <ColorPickerParameter
          label="Default Arrow Colour"
          color={ac}
          onChange={handleAcChange}
        />
      </Flex>

      <Separator size="4" />
    </Flex>
  );

  function handleAcChange(color: ColorResult) {
    updateParameters({ ac: color.hex });
  }
}

export default AddedFeaturesParameters;
