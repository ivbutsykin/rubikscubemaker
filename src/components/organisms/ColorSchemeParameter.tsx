import { useState } from "react";
import { Flex, IconButton, Text } from "@radix-ui/themes";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { ColorResult } from "react-color";

import useMakerStore from "~/stores/maker";
import { useColorSchemeParameter } from "~/hooks/maker";

import ColorPickerParameter from "../molecules/ColorPickerParameter";

function ColorSchemeParameter() {
  const [isOpen, setIsOpen] = useState(false);

  const { sch, faces } = useColorSchemeParameter();
  const updateParameters = useMakerStore((state) => state.updateParameters);

  const { up, right, front, down, left, back } = faces;

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
              label="Up"
              color={up.color}
              onChange={(color) => handleSchChange(color, up.index)}
              size="1"
            />
            <ColorPickerParameter
              label="Right"
              color={right.color}
              onChange={(color) => handleSchChange(color, right.index)}
              size="1"
            />
            <ColorPickerParameter
              label="Front"
              color={front.color}
              onChange={(color) => handleSchChange(color, front.index)}
              size="1"
            />
            <ColorPickerParameter
              label="Down"
              color={down.color}
              onChange={(color) => handleSchChange(color, down.index)}
              size="1"
            />
            <ColorPickerParameter
              label="Left"
              color={left.color}
              onChange={(color) => handleSchChange(color, left.index)}
              size="1"
            />
            <ColorPickerParameter
              label="Back"
              color={back.color}
              onChange={(color) => handleSchChange(color, back.index)}
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
