import { MakerParameters, Pzl } from "~/types/maker";
import { square } from "~/utils/number";

export function getCubeSize(pzl: Pzl) {
  return +pzl;
}

export function isCaseSupported(pzl: Pzl) {
  return ["1", "2", "3"].includes(pzl);
}

export function generateFd(pzl: Pzl) {
  const FACES = ["u", "r", "f", "d", "l", "b"];

  const cubeSize = getCubeSize(pzl);

  return FACES.map((face) => {
    return face.repeat(square(cubeSize));
  }).join("");
}

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
    fd: parameters.fd,
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
