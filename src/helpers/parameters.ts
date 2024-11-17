import { MakerParameters } from "~/types/parameters";

export function generateVCQueryParams(parameters: MakerParameters) {
  const EXCLUDED_VALUES = ["", "none"];

  const queryParams = new URLSearchParams(
    Object.fromEntries(
      Object.entries(parameters)
        .map(([key, value]) => {
          // Remove the hash symbol from the color value
          return [key, value.replace(/#/g, "")];
        })
        .filter(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ([_, value]) => {
            return !EXCLUDED_VALUES.includes(value);
          }
        )
    )
  ).toString();

  return queryParams;
}
