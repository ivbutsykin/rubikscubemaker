import { Flex } from "@radix-ui/themes";

import GeneralParameters from "./GeneralParameters";
import StateDefinitionParameters from "./StateDefinitionParameters";
import CubeStyleParameters from "./CubeStyleParameters";

function Sidebar() {
  return (
    <aside className="Sidebar">
      <Flex direction="column">
        <div className="SidebarSpacer" />

        <GeneralParameters />
        <StateDefinitionParameters />
        <CubeStyleParameters />
      </Flex>
    </aside>
  );
}

export default Sidebar;
