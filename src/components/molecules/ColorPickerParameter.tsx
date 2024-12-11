import { Flex, Text, Popover, Inset } from "@radix-ui/themes";
import { ChromePicker, ColorResult } from "react-color";

import ColorSwatch from "../atoms/ColorSwatch";

interface ColorPickerParameterProps {
  label: string;
  color: string;
  onChange: (color: ColorResult) => void;
  size?: "1" | "2";
}

function ColorPickerParameter(props: ColorPickerParameterProps) {
  const { label, color, onChange, size = "2" } = props;

  return (
    <Flex justify="between" align="center">
      <Text as="label" size={size}>
        {label}
      </Text>

      <Popover.Root>
        <Popover.Trigger>
          <ColorSwatch color={color} size={size} />
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
