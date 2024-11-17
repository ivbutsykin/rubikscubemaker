import { useState } from "react";
import { Flex, IconButton, Text } from "@radix-ui/themes";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";

import ColorPickerParameter from "../molecules/ColorPickerParameter";

function ColourSchemeParameter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex direction="column" gap="1" asChild>
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
          <ColorPickerParameter
            label="Yellow"
            color="yellow"
            onChange={() => {}}
          />
        </Collapsible.Content>
      </Collapsible.Root>
    </Flex>
  );
}

export default ColourSchemeParameter;
