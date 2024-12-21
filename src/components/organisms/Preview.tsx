import { Card } from "@radix-ui/themes";

import useMakerStore from "~/stores/maker";
import { BASE_URL } from "~/constants/maker";
import { generateQueryParams } from "~/helpers/maker";

function Preview() {
  const parameters = useMakerStore((state) => state.parameters);

  const queryParameters = generateQueryParams(parameters, {
    exclude: ["size"],
    override: {
      fmt: "svg",
      bg: "t",
    },
  });

  return (
    <Card>
      <img src={`${BASE_URL}?${queryParameters}`} width={256} height={256} />
    </Card>
  );
}

export default Preview;
