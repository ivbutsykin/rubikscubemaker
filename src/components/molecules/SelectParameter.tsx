import { Flex, Text, Select as RadixSelect } from "@radix-ui/themes";

interface SelectParameterProps {
  label: string;
  value: RadixSelect.RootProps["value"];
  onValueChange: RadixSelect.RootProps["onValueChange"];
  options: { label: string; value: string }[];
}

function SelectParameter(props: SelectParameterProps) {
  const { label, value, onValueChange, options } = props;

  return (
    <Flex justify="between" align="center">
      <Text as="label" size="2">
        {label}
      </Text>

      <RadixSelect.Root value={value} onValueChange={onValueChange} size="1">
        <RadixSelect.Trigger />
        <RadixSelect.Content>
          {options.map((option) => (
            <RadixSelect.Item key={option.value} value={option.value}>
              {option.label}
            </RadixSelect.Item>
          ))}
        </RadixSelect.Content>
      </RadixSelect.Root>
    </Flex>
  );
}

export default SelectParameter;
