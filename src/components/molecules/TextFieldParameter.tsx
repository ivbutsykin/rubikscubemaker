import { Flex, Text, TextField } from "@radix-ui/themes";

interface TextFieldParameterProps {
  id?: string;
  label: string;
  value: TextField.RootProps["value"];
  onChange: TextField.RootProps["onChange"];
  placeholder?: string;
  isDisabled?: boolean;
}

function TextFieldParameter(props: TextFieldParameterProps) {
  const { id, label, value, onChange, placeholder, isDisabled } = props;

  return (
    <Flex direction="column" gap="1">
      <Text as="label" size="2" htmlFor={id}>
        {label}
      </Text>

      <TextField.Root
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        size="1"
      />
    </Flex>
  );
}

export default TextFieldParameter;
