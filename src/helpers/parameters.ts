import { VCParameters } from "~/types/parameters";

export function generateVCQueryParams(parameters: VCParameters) {
  const EXCLUDED_VALUES = ["", "none"];

  const queryParams = new URLSearchParams(
    Object.fromEntries(
      Object.entries(parameters).filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, value]) => !EXCLUDED_VALUES.includes(value)
      )
    )
  ).toString();

  return queryParams;
}
