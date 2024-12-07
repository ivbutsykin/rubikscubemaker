import { useState } from "react";
import { Box, Flex, IconButton, Tabs, Text } from "@radix-ui/themes";
import { ResetIcon } from "@radix-ui/react-icons";

import useMakerStore from "~/stores/maker";
import { useFaces } from "~/hooks/maker";

import ColorSwatch from "../atoms/ColorSwatch";
import FaceVisualizer from "../molecules/FaceVisualizer";
import { replaceAt } from "~/utils/string";
import { Pzl } from "~/types/maker";
import { generateFd } from "~/helpers/maker";

const TABS = [
  {
    value: "up",
    label: "Up",
  },
  {
    value: "right",
    label: "Right",
  },
  {
    value: "front",
    label: "Front",
  },
  {
    value: "down",
    label: "Down",
  },
  {
    value: "left",
    label: "Left",
  },
  {
    value: "back",
    label: "Back",
  },
] as const;

function FaceletDefinitionParameter() {
  const { pzl, fd } = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  const { u, r, f, d, l, b, n, t } = useFaces();

  const [selectedFace, setSelectedColor] = useState("u");

  const defaultFd = generateFd(pzl);
  const hasResetButton = fd !== defaultFd;

  return (
    <Flex direction="column" gap="1">
      <Flex justify="between" align="center">
        <Text as="label" size="2">
          Facelet Definition
        </Text>

        {hasResetButton && (
          <IconButton size="1" variant="ghost" onClick={handleFdReset}>
            <ResetIcon />
          </IconButton>
        )}
      </Flex>

      <Flex direction="column" gap="3">
        <Tabs.Root defaultValue="up">
          <Tabs.List size="1">
            {TABS.map((tab) => (
              <Tabs.Trigger key={tab.value} value={tab.value}>
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Box mt="3">
            {TABS.map((tab) => (
              <Tabs.Content key={tab.value} value={tab.value}>
                <Flex justify="center">
                  <FaceVisualizer
                    visualizableCase={{
                      type: pzl,
                      view: "face",
                      direction: tab.value,
                      facelets: fd,
                    }}
                    size={120}
                    onFaceletClick={handleFaceletClick}
                  />
                </Flex>
              </Tabs.Content>
            ))}
          </Box>
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
    </Flex>
  );

  function handleFaceletClick(facelet: number) {
    const newFd = replaceAt(fd, facelet - 1, selectedFace) as Pzl;

    updateParameters({ fd: newFd });
  }

  function handleFdReset() {
    updateParameters({ fd: defaultFd });
  }

  function handleFaceChange(face: string) {
    setSelectedColor(face);
  }
}

export default FaceletDefinitionParameter;
