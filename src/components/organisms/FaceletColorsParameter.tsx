import { Flex, Tabs, Text } from "@radix-ui/themes";

import { useColorSchemeParameter } from "~/hooks/maker";

import ColorSwatch from "../atoms/ColorSwatch";

function FaceletColorsParameter() {
  const { faces } = useColorSchemeParameter();

  const { up, right, front, down, left, back } = faces;

  return (
    <Flex direction="column" gap="1">
      <Text as="label" size="2">
        Facelet Colours
      </Text>

      <Tabs.Root value="up">
        <Tabs.List size="1">
          <Tabs.Trigger value="up">Up</Tabs.Trigger>
          <Tabs.Trigger value="right">Right</Tabs.Trigger>
          <Tabs.Trigger value="front">Front</Tabs.Trigger>
          <Tabs.Trigger value="down">Down</Tabs.Trigger>
          <Tabs.Trigger value="left">Left</Tabs.Trigger>
          <Tabs.Trigger value="back">Back</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      <Flex direction="row" justify="center" gap="3">
        <ColorSwatch color={up.color} isActive />
        <ColorSwatch color={right.color} />
        <ColorSwatch color={front.color} />
        <ColorSwatch color={down.color} />
        <ColorSwatch color={left.color} />
        <ColorSwatch color={back.color} />
      </Flex>
    </Flex>
  );
}

export default FaceletColorsParameter;
