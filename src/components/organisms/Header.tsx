import { Flex } from "@radix-ui/themes";

function Header() {
  return (
    <header className="Header">
      <Flex align="center" height="var(--header-height)" px="4"></Flex>
    </header>
  );
}

export default Header;
