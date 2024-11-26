import useMakerStore from "~/stores/maker";

export function useFaces() {
  const parameters = useMakerStore((state) => state.parameters);

  const { sch } = parameters;

  return {
    // Up
    u: {
      key: "u",
      color: sch[0],
    },
    // Right
    r: {
      key: "r",
      color: sch[1],
    },
    // Front
    f: {
      key: "f",
      color: sch[2],
    },
    // Down
    d: {
      key: "d",
      color: sch[3],
    },
    // Left
    l: {
      key: "l",
      color: sch[4],
    },
    // Back
    b: {
      key: "b",
      color: sch[5],
    },
    // Blank
    n: {
      key: "n",
      color: "#808080",
    },
    // Transparent
    t: {
      key: "t",
      color: "var(--gradient-transparent)",
    },
  };
}
