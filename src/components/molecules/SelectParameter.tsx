import { Flex, Text, Select as RadixSelect } from "@radix-ui/themes";

interface SelectParameterProps {
  label: string;
  value: RadixSelect.RootProps["value"];
  onValueChange: RadixSelect.RootProps["onValueChange"];
  items: { label: string; value: string }[];
}

function SelectParameter(props: SelectParameterProps) {
  const { label, value, onValueChange, items } = props;

  return (
    <Flex justify="between" align="center">
      <Text as="label" size="2">
        {label}
      </Text>

      <RadixSelect.Root value={value} onValueChange={onValueChange} size="1">
        <RadixSelect.Trigger />
        <RadixSelect.Content>
          {items.map((item) => (
            <RadixSelect.Item key={item.value} value={item.value}>
              {item.label}
            </RadixSelect.Item>
          ))}
        </RadixSelect.Content>
      </RadixSelect.Root>
    </Flex>
  );
}

export default SelectParameter;
