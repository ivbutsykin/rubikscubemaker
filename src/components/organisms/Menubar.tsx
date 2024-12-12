import { useState } from "react";
import {
  Button,
  Flex,
  IconButton,
  Link,
  Popover,
  TextField,
} from "@radix-ui/themes";
import {
  CheckIcon,
  CopyIcon,
  GitHubLogoIcon,
  OpenInNewWindowIcon,
  SunIcon,
} from "@radix-ui/react-icons";

import { useCopyToClipboard, useMediaQuery } from "~/hooks/shared";
import useMakerStore from "~/stores/maker";
import { BASE_URL, FMT_OPTIONS, SIZE_OPTIONS } from "~/constants/maker";
import { generateQueryParams } from "~/helpers/maker";
import { Fmt } from "~/types/maker";
import useSettingsStore from "~/stores/settings";

import SelectParameter from "../molecules/SelectParameter";

function Menubar() {
  const colorMode = useSettingsStore((state) => state.colorMode);
  const setColorMode = useSettingsStore((state) => state.setColorMode);

  return (
    <nav className="Menubar">
      <Flex
        justify="between"
        align="center"
        height="var(--menubar-height)"
        px="4"
      >
        <Flex align="center">
          <OpenButton />
        </Flex>

        <Flex align="center" gap="5">
          <Link
            href="https://cube.rider.biz/visualcube.php"
            target="_blank"
            color="gray"
            size="2"
          >
            VisualCube
          </Link>
          <IconButton variant="ghost" color="gray" size="3" asChild>
            <a
              href="https://github.com/ivbutsykin/rubikscubemaker-web"
              target="_blank"
            >
              <GitHubLogoIcon />
            </a>
          </IconButton>
          <IconButton
            variant="ghost"
            color="gray"
            size="3"
            onClick={handleColorModeChange}
          >
            <SunIcon />
          </IconButton>
        </Flex>
      </Flex>
    </nav>
  );

  function handleColorModeChange() {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }
}

function OpenButton() {
  const isSm = useMediaQuery("(min-width: 768px)");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, copy] = useCopyToClipboard();

  const parameters = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  const [isCopied, setIsCopied] = useState(false);

  const queryParameters = generateQueryParams(parameters);
  const url = `${BASE_URL}?${queryParameters}`;

  const { fmt, size } = parameters;

  if (!isSm) {
    return null;
  }

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button>
          <OpenInNewWindowIcon /> Open in VisualCube
        </Button>
      </Popover.Trigger>
      <Popover.Content width="300px">
        <Flex direction="column" gap="3">
          <SelectParameter
            label="Image Format"
            value={fmt}
            onValueChange={handleFmtChange}
            options={FMT_OPTIONS}
          />
          <SelectParameter
            label="Size of generated image"
            value={size}
            onValueChange={handleSizeChange}
            options={SIZE_OPTIONS}
          />

          <TextField.Root value={url} disabled>
            <TextField.Slot side="right">
              <IconButton variant="ghost" size="1" onClick={handleCopy}>
                {isCopied ? (
                  <CheckIcon height="14" width="14" />
                ) : (
                  <CopyIcon height="14" width="14" />
                )}
              </IconButton>
            </TextField.Slot>
          </TextField.Root>

          <Button asChild>
            <a href={url} target="_blank">
              <OpenInNewWindowIcon /> Open in VisualCube
            </a>
          </Button>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );

  function handleFmtChange(value: string) {
    updateParameters({ fmt: value as Fmt });
  }

  function handleSizeChange(value: string) {
    updateParameters({ size: value });
  }

  async function handleCopy() {
    if (isCopied) {
      return;
    }

    copy(url);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }
}

export default Menubar;
