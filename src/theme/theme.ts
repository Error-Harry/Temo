import { ThemeProps } from "styled-components";
import {
  ColorMap,
  FontMap,
  Theme,
  AbstractedTheme,
  AbstractedFont,
} from "./types/themes";

function style(
  get: (t: Theme) => string
): (props: ThemeProps<AbstractedTheme>) => string {
  return (props): string => get(props.theme.el);
}

function color(
  getColor: (c: ColorMap) => string
): (props: ThemeProps<AbstractedTheme>) => string {
  return (props): string => getColor(props.theme.el.colors);
}

function font(
  getFont: (f: FontMap) => string
): (props: ThemeProps<AbstractedFont>) => string {
  return (props): string => getFont(props.theme.el.fontConfig);
}

export default {
  style,
  color,
  font,
};
