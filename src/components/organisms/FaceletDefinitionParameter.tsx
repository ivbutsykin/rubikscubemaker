import { useState } from "react";
import { Flex, Tabs, Text } from "@radix-ui/themes";

import useMakerStore from "~/stores/maker";
import { useFaces } from "~/hooks/maker";

import ColorSwatch from "../atoms/ColorSwatch";
import FaceVisualizer from "../molecules/FaceVisualizer";

function FaceletDefinitionParameter() {
  const { pzl } = useMakerStore((state) => state.parameters);
  const { u, r, f, d, l, b, n, t } = useFaces();

  const [selectedFace, setSelectedColor] = useState("u");

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

        <Tabs.Content value="up">
          <Flex justify="center">
            <FaceVisualizer
              visualizableCase={{
                type: pzl,
                view: "face",
                direction: "up",
                facelets:
                  "uuuuuuuuurrrrrrrrrfffffffffdddddddddlllllllllbbbbbbbbb",
              }}
              size={120}
            />
          </Flex>
        </Tabs.Content>
      </Tabs.Root>

      <Flex direction="row" justify="between">
        <ColorSwatch
          color={u.color}
          onClick={() => handleFaceChange(u.key)}
          isActive={selectedFace === u.key}
        />
        <ColorSwatch
          color={r.color}
          onClick={() => handleFaceChange(r.key)}
          isActive={selectedFace === r.key}
        />
        <ColorSwatch
          color={f.color}
          onClick={() => handleFaceChange(f.key)}
          isActive={selectedFace === f.key}
        />
        <ColorSwatch
          color={d.color}
          onClick={() => handleFaceChange(d.key)}
          isActive={selectedFace === d.key}
        />
        <ColorSwatch
          color={l.color}
          onClick={() => handleFaceChange(l.key)}
          isActive={selectedFace === l.key}
        />
        <ColorSwatch
          color={b.color}
          onClick={() => handleFaceChange(b.key)}
          isActive={selectedFace === b.key}
        />
        <ColorSwatch
          color={n.color}
          onClick={() => handleFaceChange(n.key)}
          isActive={selectedFace === n.key}
        />
        <ColorSwatch
          color={t.color}
          onClick={() => handleFaceChange(t.key)}
          isActive={selectedFace === t.key}
        />
      </Flex>
    </Flex>
  );

  function handleFaceChange(face: string) {
    setSelectedColor(face);
  }
}

export default FaceletDefinitionParameter;
