import { Flex, Separator } from "@radix-ui/themes";

import useParametersStore from "~/stores/parameters";
import { PZL_OPTIONS, VIEW_OPTIONS } from "~/constants/parameters";
import { Pzl, View } from "~/types/parameters";

import SelectParameter from "../molecules/SelectParameter";

function GeneralParameters() {
  const parameters = useParametersStore((state) => state.parameters);
  const updateParameters = useParametersStore(
    (state) => state.updateParameters
  );

  const { pzl, view } = parameters;

  return (
    <Flex direction="column">
      <Flex direction="column" p="3" gap="3">
        <SelectParameter
          label="Puzzle type"
          value={pzl}
          options={PZL_OPTIONS}
          onValueChange={handlePzlChange}
        />
        <SelectParameter
          label="Special view"
          value={view}
          options={VIEW_OPTIONS}
          onValueChange={handleViewChange}
        />
      </Flex>

      <Separator size="4" />
    </Flex>
  );

  function handlePzlChange(value: string) {
    updateParameters({ pzl: value as Pzl });
  }

  function handleViewChange(value: string) {
    updateParameters({ view: value as View });
  }
}

export default GeneralParameters;
