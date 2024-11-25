import useMakerStore from "~/stores/maker";

export function useFaces() {
  const parameters = useMakerStore((state) => state.parameters);

  const { sch } = parameters;

  return {
    up: {
      key: "up",
      abbr: "u",
      color: sch[0],
    },
    right: {
      key: "right",
      abbr: "r",
      color: sch[1],
    },
    front: {
      key: "front",
      abbr: "f",
      color: sch[2],
    },
    down: {
      key: "down",
      abbr: "d",
      color: sch[3],
    },
    left: {
      key: "left",
      abbr: "l",
      color: sch[4],
    },
    back: {
      key: "back",
      abbr: "b",
      color: sch[5],
    },
    blank: {
      key: "blank",
      abbr: "n",
      color: "#808080",
    },
    transparent: {
      key: "transparent",
      abbr: "t",
      color: "var(--gradient-transparent)",
    },
  };
}
