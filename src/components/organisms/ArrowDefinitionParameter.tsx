import useMakerStore from "~/stores/maker";
import TextFieldParameter from "../molecules/TextFieldParameter";

function ArrowDefinitionParameter() {
  const { arw } = useMakerStore((state) => state.parameters);
  const updateParameters = useMakerStore((state) => state.updateParameters);

  return (
    <TextFieldParameter
      id="arw"
      label="Arrow Definition"
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
