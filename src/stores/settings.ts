import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { ColorMode } from "~/types/settings";

interface SettingsState {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  isHydrating: boolean;
  setIsHydrating: (isHydrating: boolean) => void;
}

const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      colorMode: "light",
      setColorMode: (colorMode) => {
        set({ colorMode });
      },
      isHydrating: true,
      setIsHydrating: (isHydrating) => {
        set({ isHydrating });
      },
    }),
    {
      name: "settings-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setIsHydrating(false);
      },
    }
  )
);

export default useSettingsStore;
