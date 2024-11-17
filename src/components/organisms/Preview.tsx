import { Card } from "@radix-ui/themes";

import useParametersStore from "~/stores/parameters";
import { generateVCQueryParams } from "~/helpers/parameters";
import { BASE_URL } from "~/constants/api";

function Preview() {
  const parameters = useParametersStore((state) => state.parameters);

  const queryParameters = generateVCQueryParams(parameters);

  return (
    <Card>
      <img src={`${BASE_URL}?${queryParameters}`} width={256} height={256} />
    </Card>
  );
}

export default Preview;
