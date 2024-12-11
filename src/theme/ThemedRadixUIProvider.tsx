import { Theme } from "@radix-ui/themes";
import { useEffect } from "react";

import useSettingsStore from "~/stores/settings";

interface ThemeRadixUIProviderProps {
  children: React.ReactNode;
}

function ThemedRadixUIProvider(props: ThemeRadixUIProviderProps) {
  const { children } = props;

  const colorMode = useSettingsStore((state) => state.colorMode);

  useEffect(() => {
    document.documentElement.className =
      colorMode === "dark" ? "dark-theme" : "light-theme";
  }, [colorMode]);

  return <Theme>{children}</Theme>;
}

export default ThemedRadixUIProvider;
