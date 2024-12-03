import { defaultFont } from "./themes";
import { createContext } from "react";
import themes from "./themes";
import { Theme, Font } from "./types/themes";

export interface ThemeContextType {
  theme: Theme;
  font: Font;
  setActiveFont: (theme: Font) => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.Default,
  font: defaultFont,
  setActiveFont: () => {},
  setTheme: () => {},
});
