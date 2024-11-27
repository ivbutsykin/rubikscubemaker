import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { MakerParameters, Pzl } from "~/types/maker";
import { DEFAULT_PARAMETERS } from "~/constants/maker";
import { generateFd } from "~/helpers/maker";

interface MakerState {
  parameters: MakerParameters;
  updateParameters: (updates: Partial<MakerParameters>) => void;
  updatePuzzleType: (pzl: Pzl) => void;
  isHydrating: boolean;
  setIsHydrating: (isHydrating: boolean) => void;
}

const useMakerStore = create<MakerState>()(
  persist(
    (set) => ({
      parameters: DEFAULT_PARAMETERS,
      updateParameters: (updates) => {
        set((state) => {
          return {
            parameters: { ...state.parameters, ...updates },
          };
        });
      },
      updatePuzzleType: (pzl) => {
        set((state) => {
          return {
            parameters: {
              ...state.parameters,
              pzl,
              fd: generateFd(pzl),
            },
          };
        });
      },
      isHydrating: true,
      setIsHydrating: (isHydrating) => {
        set({ isHydrating });
      },
    }),
    {
      name: "maker-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setIsHydrating(false);
      },
    }
  )
);

export default useMakerStore;
