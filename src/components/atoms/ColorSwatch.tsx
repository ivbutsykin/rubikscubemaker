import { Reset } from "@radix-ui/themes";
import { forwardRef } from "react";
import clsx from "clsx";

interface ColorSwatchProps {
  color: string;
  onClick?: () => void;
  isActive?: boolean;
  size?: "1" | "2";
}

const ColorSwatch = forwardRef(function ColorSwatch(
  props: ColorSwatchProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const { color, onClick, isActive, size = "2", ...rest } = props;

  return (
    <Reset>
      <button
        ref={ref}
        className={clsx(
          "ColorSwatch",
          isActive && "ColorSwatch-active",
          `ColorSwatch-size-${size}`
        )}
        style={{ background: color }}
        onClick={onClick}
        {...rest}
      />
    </Reset>
  );
});

export default ColorSwatch;
