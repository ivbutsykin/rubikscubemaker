import { useState } from "react";
import { Flex, Tabs, Text } from "@radix-ui/themes";

import { useFaces } from "~/hooks/maker";

import ColorSwatch from "../atoms/ColorSwatch";

function FaceletDefinitionParameter() {
  const { up, right, front, down, left, back, blank, transparent } = useFaces();

  const [selectedFace, setSelectedColor] = useState("up");

  return (
    <Flex direction="column" gap="1">
      <Text as="label" size="2">
        Facelet Colours
      </Text>

      <Tabs.Root defaultValue="up">
        <Tabs.List size="1">
          <Tabs.Trigger value="up">Up</Tabs.Trigger>
          <Tabs.Trigger value="right">Right</Tabs.Trigger>
          <Tabs.Trigger value="front">Front</Tabs.Trigger>
          <Tabs.Trigger value="down">Down</Tabs.Trigger>
          <Tabs.Trigger value="left">Left</Tabs.Trigger>
          <Tabs.Trigger value="back">Back</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      <Flex direction="row" justify="between">
        <ColorSwatch
          color={up.color}
          onClick={() => handleFaceChange(up.key)}
          isActive={selectedFace === up.key}
        />
        <ColorSwatch
          color={right.color}
          onClick={() => handleFaceChange(right.key)}
          isActive={selectedFace === right.key}
        />
        <ColorSwatch
          color={front.color}
          onClick={() => handleFaceChange(front.key)}
          isActive={selectedFace === front.key}
        />
        <ColorSwatch
          color={down.color}
          onClick={() => handleFaceChange(down.key)}
          isActive={selectedFace === down.key}
        />
        <ColorSwatch
          color={left.color}
          onClick={() => handleFaceChange(left.key)}
          isActive={selectedFace === left.key}
        />
        <ColorSwatch
          color={back.color}
          onClick={() => handleFaceChange(back.key)}
          isActive={selectedFace === back.key}
        />
        <ColorSwatch
          color={blank.color}
          onClick={() => handleFaceChange(blank.key)}
          isActive={selectedFace === blank.key}
        />
        <ColorSwatch
          color={transparent.color}
          onClick={() => handleFaceChange(transparent.key)}
          isActive={selectedFace === transparent.key}
        />
      </Flex>
    </Flex>
  );

  function handleFaceChange(face: string) {
    setSelectedColor(face);
  }
}

export default FaceletDefinitionParameter;
