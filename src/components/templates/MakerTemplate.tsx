import { Box, Callout, Flex } from "@radix-ui/themes";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import Menubar from "../organisms/Menubar";
import Sidebar from "../organisms/Sidebar";
import Preview from "../organisms/Preview";

function MakerTemplate() {
  return (
    <Flex asChild>
      <main>
        <Sidebar />

        <Flex direction="column" width="100%">
          <Menubar />

          <Box height="calc(100dvh - var(--menubar-height))" p="1">
            <Flex
              justify="center"
              height="100%"
              width="100%"
              style={{
                alignItems: "safe center",
              }}
              overflow="auto"
            >
              <Preview />
            </Flex>
          </Box>

          <SmallScreenAlert />
        </Flex>
      </main>
    </Flex>
  );
}

function SmallScreenAlert() {
  return (
    <Box
      display={{
        sm: "none",
      }}
      position="absolute"
      bottom="0"
      right="0"
      m="4"
    >
      <Callout.Root color="amber" role="alert">
        <Callout.Icon>
          <ExclamationTriangleIcon />
        </Callout.Icon>
        <Callout.Text>
          Rubik's Cube Maker is not supported on devices with small screens.
        </Callout.Text>
      </Callout.Root>
    </Box>
  );
}

export default MakerTemplate;
