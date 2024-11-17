import { Flex, Separator } from "@radix-ui/themes";
import TextFieldParameter from "../molecules/TextFieldParameter";

function StateDefinitionParameters() {
  return (
    <Flex direction="column">
      <Flex direction="column" p="3" gap="3">
        <TextFieldParameter
          label="Algorithm to solve case"
          value=""
          onChange={() => {}}
        />
      </Flex>

      <Separator size="4" />
    </Flex>
  );
}

export default StateDefinitionParameters;
