import { Box, Flex } from "@radix-ui/themes";

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
        </Flex>
      </main>
    </Flex>
  );
}

export default MakerTemplate;
