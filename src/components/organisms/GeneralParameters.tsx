import { Flex, Separator } from "@radix-ui/themes";

import SelectParameter from "../molecules/SelectParameter";

function GeneralParameters() {
  return (
    <Flex direction="column">
      <Flex direction="column" p="3" gap="3">
        <SelectParameter
          label="Puzzle type"
          value="3"
          items={[{ label: "3x3x3", value: "3" }]}
          onValueChange={() => {}}
        />
        <SelectParameter
          label="Special view"
          value="plan"
          items={[
            { label: "Plan", value: "plan" },
            { label: "Transparent", value: "transparent" },
          ]}
          onValueChange={() => {}}
        />
      </Flex>

      <Separator size="4" />
    </Flex>
  );
}

export default GeneralParameters;
