import { Flex, Text } from "@radix-ui/themes";

interface FallbackTemplateProps {
  icon?: React.ReactNode;
  text?: string;
}

function FallbackTemplate(props: FallbackTemplateProps) {
  const { icon, text } = props;

  return (
    <Flex justify="center" align="center" height="100dvh" asChild>
      <main>
        <Flex align="center" gap="2">
          {icon}
          {!!text && <Text size="2">{text}</Text>}
        </Flex>
      </main>
    </Flex>
  );
}

export default FallbackTemplate;
