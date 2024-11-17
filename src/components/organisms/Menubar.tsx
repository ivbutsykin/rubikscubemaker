import { Flex } from "@radix-ui/themes";

function Menubar() {
  return (
    <nav className="Menubar" data-accent-color="gray">
      <Flex align="center" height="var(--menubar-height)" px="4"></Flex>
    </nav>
  );
}

export default Menubar;
