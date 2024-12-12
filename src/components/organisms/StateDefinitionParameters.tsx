import { Flex, Separator, Text } from "@radix-ui/themes";
import { z } from "zod";

import useMakerStore from "~/stores/maker";
import { isCaseSupported } from "~/helpers/maker";

import TextFieldParameter from "../molecules/TextFieldParameter";
import FaceletDefinitionParameter from "./FaceletDefinitionParameter";

const CaseSchema = z.string().regex(/^[UDLRFBudlrfbMESxyz'2 ]*$/, {
  message:
    "The algorithm accepts the following characters: U, D, L, R, F, B, M, E, S, x, y, z, ', 2, and spaces.",
});

function StateDefinitionParameters() {
  const { pzl, case: makerCase } = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  return (
    <Flex direction="column">
      <Flex direction="column" p="3" gap="3">
        <TextFieldParameter
          id="case"
          label="Algorithm to solve case"
          warning={
            !isCaseSupported(pzl) && (
              <Text size="2">Case not supported for 4x4x4 cubes or above.</Text>
            )
          }
          value={makerCase}
          onChange={handleCaseChange}
          placeholder="R U R' U'"
          isDisabled={!isCaseSupported(pzl)}
          validationSchema={CaseSchema}
        />
        <FaceletDefinitionParameter />
      </Flex>

      <Separator size="4" />
    </Flex>
  );

  function handleCaseChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateParameters({ case: e.target.value });
  }
}

export default StateDefinitionParameters;
