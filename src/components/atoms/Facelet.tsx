import { Reset } from "@radix-ui/themes";
import { forwardRef } from "react";

interface FaceletProps {
  width: number;
  height: number;
  borderRadius: number;
  color: string;
  onClick?: () => void;
}

const Facelet = forwardRef(function Facelet(
  props: FaceletProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const { width, height, borderRadius, color, onClick } = props;

  return (
    <Reset>
      <button
        ref={ref}
        className="Facelet"
        onClick={onClick}
        style={{
          width,
          height,
          borderRadius,
          background: color,
        }}
      />
    </Reset>
  );
});

export default Facelet;
