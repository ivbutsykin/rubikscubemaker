import { Flex, Heading, Text } from "@radix-ui/themes";

function RubiksCubeMakerTemplate() {
  return (
    <Flex
      justify="center"
      align="center"
      height="calc(100dvh - var(--header-height))"
    >
      <Flex
        direction="column"
        gap="5"
        maxWidth={{
          initial: "100%",
          xs: "75%",
          sm: "50%",
        }}
      >
        <Heading size="8" align="center">
          Rubik's Cube Maker
        </Heading>
        <Text align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Flex>
    </Flex>
  );
}

export default RubiksCubeMakerTemplate;
