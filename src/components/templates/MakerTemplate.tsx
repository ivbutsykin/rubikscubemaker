import { Flex, Heading, Text, Link, Container } from "@radix-ui/themes";

import Maker from "~/features/maker/components/Maker";

function MaketTemplate() {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        height="calc(100dvh - var(--header-height))"
      >
        <Flex direction="column" align="center" gap="8">
          <Container size="1">
            <Flex direction="column" gap="5">
              <Heading size="8" align="center">
                Rubik's Cube Maker
              </Heading>
              <Text align="center">
                Create a custom Rubik's Cube visualization with an intuitive
                interface and{" "}
                <Link
                  href="https://cube.rider.biz/visualcube.php"
                  target="_blank"
                >
                  VisualCube
                </Link>{" "}
                under the hood.
              </Text>
            </Flex>
          </Container>

          <Maker />
        </Flex>
      </Flex>
    </>
  );
}

export default MaketTemplate;
