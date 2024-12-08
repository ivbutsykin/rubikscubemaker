import { useState } from "react";
import { Button, Flex, Text } from "@radix-ui/themes";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ColorResult } from "react-color";

import useMakerStore from "~/stores/maker";

import ColorPickerParameter from "../molecules/ColorPickerParameter";

function ColorSchemeParameter() {
  const [isOpen, setIsOpen] = useState(false);

  const { sch } = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  return (
    <Flex direction="column" gap="3" asChild>
      <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
        <Flex justify="between" align="center">
          <Text as="label" size="2">
            Colour Scheme
          </Text>

          <Collapsible.Trigger asChild>
            <Button size="1">{isOpen ? "COLLAPSE" : "EDIT"}</Button>
          </Collapsible.Trigger>
        </Flex>

        <Collapsible.Content>
          <Flex direction="column" gap="2">
            <ColorPickerParameter
              label="Up"
              color={sch[0]}
              onChange={(color) => handleSchChange(color, 0)}
              size="1"
            />
            <ColorPickerParameter
              label="Right"
              color={sch[1]}
              onChange={(color) => handleSchChange(color, 1)}
              size="1"
            />
            <ColorPickerParameter
              label="Front"
              color={sch[2]}
              onChange={(color) => handleSchChange(color, 2)}
              size="1"
            />
            <ColorPickerParameter
              label="Down"
              color={sch[3]}
              onChange={(color) => handleSchChange(color, 3)}
              size="1"
            />
            <ColorPickerParameter
              label="Left"
              color={sch[4]}
              onChange={(color) => handleSchChange(color, 4)}
              size="1"
            />
            <ColorPickerParameter
              label="Back"
              color={sch[5]}
              onChange={(color) => handleSchChange(color, 5)}
              size="1"
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

export default ColorSchemeParameter;
