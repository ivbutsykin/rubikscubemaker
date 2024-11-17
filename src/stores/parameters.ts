import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { MakerParameters } from "~/types/parameters";
import { DEFAULT_PARAMETERS } from "~/constants/parameters";

interface ParametersState {
  parameters: MakerParameters;
  updateParameters: (updates: Partial<MakerParameters>) => void;
  isHydrating: boolean;
  setIsHydrating: (isHydrating: boolean) => void;
}

const useParametersStore = create<ParametersState>()(
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
      name: "parameters-storage",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        state?.setIsHydrating(false);
      },
    }
  )
);

export default useParametersStore;
