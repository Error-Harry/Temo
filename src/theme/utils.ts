import { AbstractedTheme, Theme, AbstractedFont, Font } from "./types/themes";

export function generateTheme(theme: Theme): AbstractedTheme {
  return {
    ...theme,
    el: theme,
  };
}

export function generateFont(font: Font): AbstractedFont {
  return {
    ...font,
    el: font,
  };
}
