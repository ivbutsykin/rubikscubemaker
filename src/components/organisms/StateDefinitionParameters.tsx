import { Flex, Separator } from "@radix-ui/themes";

import useMakerStore from "~/stores/maker";

import TextFieldParameter from "../molecules/TextFieldParameter";
import FaceletColorsParameter from "./FaceletColorsParameter";

function StateDefinitionParameters() {
  const parameters = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  const { case: makerCase } = parameters;

  return (
    <Flex direction="column">
      <Flex direction="column" p="3" gap="3">
        <TextFieldParameter
          id="case"
          label="Algorithm to solve case"
          value={makerCase}
          onChange={handleCaseChange}
          placeholder="R U R' U'"
        />
        {/* <FaceletColorsParameter /> */}
      </Flex>

      <Separator size="4" />
    </Flex>
  );

  function handleCaseChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateParameters({ case: e.target.value });
  }
}

export default StateDefinitionParameters;
