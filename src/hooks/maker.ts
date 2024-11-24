import useMakerStore from "~/stores/maker";

export function useColorSchemeParameter() {
  const parameters = useMakerStore((state) => state.parameters);

  const { sch } = parameters;

  return {
    sch,
    faces: {
      up: {
        index: 0,
        color: sch[0],
      },
      right: {
        index: 1,
        color: sch[1],
      },
      front: {
        index: 2,
        color: sch[2],
      },
      down: {
        index: 3,
        color: sch[3],
      },
      left: {
        index: 4,
        color: sch[4],
      },
      back: {
        index: 5,
        color: sch[5],
      },
    },
  };
}
