import { MakerParameters } from "~/types/maker";

function handleNone(value: string) {
  if (value === "none") {
    return "";
  }

  return value;
}

function handleColor(value: string) {
  return value.replace("#", "");
}

function handleArray(value: string[]) {
  return value.join(",");
}

export function generateQueryParams(parameters: MakerParameters) {
  const rawParams = {
    fmt: parameters.fmt,
    pzl: parameters.pzl,
    view: handleNone(parameters.view),
    case: parameters.case,
    sch: handleArray(parameters.sch.map(handleColor)),
    cc: handleColor(parameters.cc),
  };

  const filteredParams = Object.fromEntries(
    Object.entries(rawParams).filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, value]) => value !== ""
    )
  );

  const queryParams = new URLSearchParams(filteredParams).toString();

  return queryParams;
}
