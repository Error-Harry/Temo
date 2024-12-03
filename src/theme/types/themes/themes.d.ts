/** @format */

import theme from 'src/theme/theme';

export interface backgroundColorMap extends theme {
  themeMode: string;
  default: string;
  paper: string;
  componentText: string;
  componentBgColor: string;
  componentHoverBorder: string;
  componentBorderColor: string;
}

export interface typographyMap {
  fontcolor: string;
}
export interface Theme {
  colors: ColorMap;
  background: backgroundColorMap;
  ButtonColor: ButtonColorMap;
  typography: typographyMap;
  breakpoints: object;
}

export interface Font {
  fontConfig: FontMap;
}
export interface AbstractedTheme extends Theme {
  el: Theme;
}

export interface AbstractedFont extends Font {
  el: Font;
}

export interface ColorMap {
  primary: string;
  secondary: string;
  tertiary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  dark: string;
  light: string;
  inverse: string;
  designColor: string;
}

export interface FontMap {
  fontSizes: {};
  fontWeights: {};
  fontColor: {};
}

export interface ButtonColorMap {
  borderColor: string;
  hover: {
    borderColor: string;
    background: string;
    hoverText: string;
  };
  before: {
    borderColor: string;
    background: string;
  };
  active: {
    borderColor: string;
    background: string;
  };
}
