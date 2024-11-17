import { useState } from "react";
import { Flex, IconButton, Text } from "@radix-ui/themes";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { ColorResult } from "react-color";

import useMakerStore from "~/stores/maker";

import ColorPickerParameter from "../molecules/ColorPickerParameter";

function ColourSchemeParameter() {
  const [isOpen, setIsOpen] = useState(false);

  const parameters = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  const { sch } = parameters;

  return (
    <Flex direction="column" gap="2" asChild>
      <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
        <Flex justify="between" align="center">
          <Text as="label" size="2">
            Colour Scheme
          </Text>

          <Collapsible.Trigger asChild>
            <IconButton size="1">
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </IconButton>
          </Collapsible.Trigger>
        </Flex>

        <Collapsible.Content>
          <Flex direction="column" gap="1">
            <ColorPickerParameter
              label="Up face"
              color={sch[0]}
              onChange={(color) => handleSchChange(color, 0)}
            />
            <ColorPickerParameter
              label="Right face"
              color={sch[1]}
              onChange={(color) => handleSchChange(color, 1)}
            />
            <ColorPickerParameter
              label="Front face"
              color={sch[2]}
              onChange={(color) => handleSchChange(color, 2)}
            />
            <ColorPickerParameter
              label="Down face"
              color={sch[3]}
              onChange={(color) => handleSchChange(color, 3)}
            />
            <ColorPickerParameter
              label="Left face"
              color={sch[4]}
              onChange={(color) => handleSchChange(color, 4)}
            />
            <ColorPickerParameter
              label="Back face"
              color={sch[5]}
              onChange={(color) => handleSchChange(color, 5)}
            />
          </Flex>
        </Collapsible.Content>
      </Collapsible.Root>
    </Flex>
  );

  function handleSchChange(color: ColorResult, index: number) {
    const newSch = [...sch];
    newSch[index] = color.hex;

    updateParameters({ sch: newSch });
  }
}

export default ColourSchemeParameter;
