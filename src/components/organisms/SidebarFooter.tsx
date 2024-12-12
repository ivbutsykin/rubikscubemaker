import { AlertDialog, Button, Flex } from "@radix-ui/themes";

import useMakerStore from "~/stores/maker";

function SidebarFooter() {
  const resetParameters = useMakerStore((state) => state.resetParameters);

  return (
    <Flex direction="column" p="3" gap="3">
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant="outline" color="red">
            Reset Parameters
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Reset Parameters</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This will reset all parameters to their default
            values.
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={resetParameters}>
                Reset Parameters
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Flex>
  );
}

export default SidebarFooter;
