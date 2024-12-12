import useMakerStore from "~/stores/maker";
import TextFieldParameter from "../molecules/TextFieldParameter";
import { Link, Text } from "@radix-ui/themes";

function ArrowDefinitionParameter() {
  const { arw } = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  return (
    <TextFieldParameter
      id="arw"
      label="Arrow Definition"
      info={
        <Text size="2">
          Defines a list of arrows to be drawn on the cube.
          <br />
          <br />
          Read the{" "}
          <Link href="https://cube.rider.biz/visualcube.php" target="_blank">
            documentation
          </Link>{" "}
          for more details.
        </Text>
      }
      value={arw}
      onChange={handleArwChange}
      placeholder="U0U2,U2U8,U8U0,R6R2R0-s8-i5-yellow"
    />
  );

  function handleArwChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateParameters({ arw: e.target.value });
  }
}

export default ArrowDefinitionParameter;
