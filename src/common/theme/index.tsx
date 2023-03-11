import { createContext, useContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { darkTheme } from "./dark";
import { lightTheme } from "./light";

type ThemeMode = "light" | "dark";

type Theme = {
  mode: ThemeMode;
  onChangeThemeMode: () => void;
};

const AppThemeContext = createContext<Theme>({ mode: "dark", onChangeThemeMode: () => {} });

function AppThemeProvider(props: { children: any }) {
  const { children } = props;
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");

  function handleChangeThemeMode(): void {
    if (themeMode === "dark") setThemeMode("light");
    else setThemeMode("dark");
  }

  function getTheme(): DefaultTheme {
    return themeMode === "dark" ? darkTheme : lightTheme;
  }

  return (
    <AppThemeContext.Provider value={{ mode: themeMode, onChangeThemeMode: handleChangeThemeMode }}>
      <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
}

const useAppTheme = () => useContext(AppThemeContext);

export default AppThemeProvider;
export { useAppTheme, AppThemeContext };
