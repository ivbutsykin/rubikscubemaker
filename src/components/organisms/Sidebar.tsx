import { Flex } from "@radix-ui/themes";

import GeneralParameters from "./GeneralParameters";
// import StateDefinitionParameters from "./StateDefinitionParameters";

function Sidebar() {
  return (
    <aside className="Sidebar" data-accent-color="gray">
      <Flex direction="column">
        <div className="SidebarSpacer" />

        <GeneralParameters />
        {/* <StateDefinitionParameters /> */}
      </Flex>
    </aside>
  );
}

export default Sidebar;
