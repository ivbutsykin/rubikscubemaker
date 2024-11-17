import { Flex, Text, Popover, Inset, IconButton } from "@radix-ui/themes";
import { ChromePicker, ColorResult } from "react-color";

interface ColorPickerParameterProps {
  label: string;
  color: string;
  onChange: (color: ColorResult) => void;
}

function ColorPickerParameter(props: ColorPickerParameterProps) {
  const { label, color, onChange } = props;

  return (
    <Flex justify="between" align="center">
      <Text as="label" size="2">
        {label}
      </Text>

      <Popover.Root>
        <Popover.Trigger>
          <IconButton
            variant="outline"
            size="1"
            style={{ backgroundColor: color }}
          />
        </Popover.Trigger>
        <Popover.Content>
          <Inset>
            <ChromePicker color={color} onChange={onChange} disableAlpha />
          </Inset>
        </Popover.Content>
      </Popover.Root>
    </Flex>
  );
}

export default ColorPickerParameter;
