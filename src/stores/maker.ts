import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { MakerParameters } from "~/types/maker";
import { DEFAULT_PARAMETERS } from "~/constants/maker";

interface MakerState {
  parameters: MakerParameters;
  updateParameters: (updates: Partial<MakerParameters>) => void;
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
