import { Button, Flex, IconButton } from "@radix-ui/themes";
import { DownloadIcon, GitHubLogoIcon, SunIcon } from "@radix-ui/react-icons";

function Menubar() {
  return (
    <nav className="Menubar">
      <Flex
        justify="between"
        align="center"
        height="var(--menubar-height)"
        px="4"
      >
        <Button>
          <DownloadIcon /> Export
        </Button>

        <Flex align="center" gap="5">
          <IconButton variant="ghost" color="gray" size="3">
            <GitHubLogoIcon />
          </IconButton>
          <IconButton variant="ghost" color="gray" size="3">
            <SunIcon />
          </IconButton>
        </Flex>
      </Flex>
    </nav>
  );
}

export default Menubar;
