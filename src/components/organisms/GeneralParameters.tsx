import { Flex, Separator } from "@radix-ui/themes";

import useMakerStore from "~/stores/maker";
import { PZL_OPTIONS, VIEW_OPTIONS } from "~/constants/maker";
import { Pzl, View } from "~/types/maker";

import SelectParameter from "../molecules/SelectParameter";

function GeneralParameters() {
  const parameters = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);
  const updatePuzzleType = useMakerStore((state) => state.updatePuzzleType);

  const { pzl, view } = parameters;

  return (
    <Flex direction="column">
      <Flex direction="column" p="3" gap="3">
        <SelectParameter
          label="Puzzle Type"
          value={pzl}
          options={PZL_OPTIONS}
          onValueChange={handlePzlChange}
        />
        <SelectParameter
          label="Special View"
          value={view}
          options={VIEW_OPTIONS}
          onValueChange={handleViewChange}
        />
      </Flex>

      <Separator size="4" />
    </Flex>
  );

  function handlePzlChange(value: string) {
    updatePuzzleType(value as Pzl);
  }

  function handleViewChange(value: string) {
    updateParameters({ view: value as View });
  }
}

export default GeneralParameters;
