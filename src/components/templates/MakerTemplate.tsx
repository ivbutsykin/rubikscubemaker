import { Flex } from "@radix-ui/themes";

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

          <Flex
            justify="center"
            align="center"
            height="calc(100dvh - var(--menubar-height))"
          >
            <Preview />
          </Flex>
        </Flex>
      </main>
    </Flex>
  );
}

export default MakerTemplate;
