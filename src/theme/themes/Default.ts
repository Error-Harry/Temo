/** @format */

import {
  ColorMap,
  FontMap,
  Theme,
  Font,
  backgroundColorMap,
  ButtonColorMap,
  typographyMap,
} from "../types/themes";
import { mq } from "./themeBreakpoint";
import {
  BodyBg,
  ColorDark,
  ColorError,
  ColorInfo,
  ColorInverse,
  ColorLight,
  ColorPrimary,
  ColorPrimaryContrast,
  ColorSecondary,
  ColorSuccess,
  ColorTertiary,
  ColorWarning,
  DesignColorCombination,
  HoverText,
  SelectedBg,
  SelectedHoverBg,
  SelectedHoverBorder,
} from "./themeVariable";

const defaultBackgroundColors: backgroundColorMap = {
  themeMode: "light",
  default: BodyBg,
  paper: "#01203a, #0358a0",
  componentText: "black",
  componentBgColor: "#ffffff",
  componentHoverBorder: "#BCBCBC",
  componentBorderColor: SelectedBg,
};

const defaultBackgroundColorsDark: backgroundColorMap = {
  themeMode: "dark",
  default: "#121212",
  paper: "#333333",
  componentText: "white",
  componentBgColor: "#333333",
  componentHoverBorder: "#5E5E5E",
  componentBorderColor: SelectedBg,
};
const ButtonColor: ButtonColorMap = {
  borderColor: SelectedBg,
  hover: {
    borderColor: SelectedHoverBorder,
    background: SelectedHoverBg,
    hoverText: ColorDark,
  },
  before: {
    borderColor: SelectedBg,
    background: SelectedBg,
  },
  active: {
    borderColor: SelectedBg,
    background: SelectedBg,
  },
};

const defaultColors: ColorMap = {
  primary: ColorPrimary,
  secondary: ColorSecondary,
  tertiary: ColorTertiary,
  info: ColorInfo,
  success: ColorSuccess,
  warning: ColorWarning,
  error: ColorError,
  dark: ColorDark,
  light: ColorLight,
  inverse: ColorInverse,
  designColor: DesignColorCombination,
};

const typography: typographyMap = {
  fontcolor: ColorPrimaryContrast,
};

export const Default: Theme = {
  colors: defaultColors,
  background: defaultBackgroundColors,
  ButtonColor: ButtonColor,
  typography: typography,
  breakpoints: mq,
};

export const Dark: Theme = {
  colors: defaultColors,
  background: defaultBackgroundColorsDark,
  ButtonColor: ButtonColor,
  typography: typography,
  breakpoints: mq,
};

const defaultFonts: FontMap = {
  fontSizes: {},
  fontWeights: {},
  fontColor: {},
};

const mediumFonts: FontMap = {
  fontSizes: {},
  fontWeights: {},
  fontColor: {},
};

const largeFonts: FontMap = {
  fontSizes: {},
  fontWeights: {},
  fontColor: {},
};

export const defaultFont: Font = {
  fontConfig: defaultFonts,
};

export const mediumFont: Font = {
  fontConfig: mediumFonts,
};

export const largeFont: Font = {
  fontConfig: largeFonts,
};
