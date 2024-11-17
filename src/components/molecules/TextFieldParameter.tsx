import { Flex, Text, TextField } from "@radix-ui/themes";

interface TextFieldParameterProps {
  label: string;
  value: TextField.RootProps["value"];
  onChange: TextField.RootProps["onChange"];
  placeholder?: string;
}

function TextFieldParameter(props: TextFieldParameterProps) {
  const { label, value, onChange, placeholder } = props;

  return (
    <Flex direction="column" gap="1">
      <Text as="label" size="2">
        {label}
      </Text>

      <TextField.Root
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size="1"
      />
    </Flex>
  );
}

export default TextFieldParameter;
