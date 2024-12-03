/** @format */

import React, { useState } from 'react';
import { Theme, Font } from './types/themes';
import Default, { defaultFont } from './themes';
import { ThemeContext } from './ThemeContext';
import { StyledThemeProvider } from './StyledThemeProvider';
import { generateTheme } from './utils';

/**
 * `ThemeProvider` is a React component that provides the current theme and font settings to its children via context.
 * It allows you to customize the theme and font for your application, either by passing them as props or using the default settings.
 *
 * It also uses the `StyledThemeProvider` to apply the generated theme styles to the component tree.
 *
 * @component
 *
 * @example
 * <ThemeProvider theme={customTheme} font={customFont}>
 *   <App />
 * </ThemeProvider>
 *
 * @param {object} props - The component props.
 * @param {Theme} [props.theme] - The initial theme to be applied. If not provided, the default theme is used.
 * @param {Font} [props.font] - The initial font to be applied. If not provided, the default font is used.
 * @param {JSX.Element} [props.children] - The child components to be rendered inside the provider.
 *
 * @returns {JSX.Element} The ThemeProvider component with context and styles applied.
 */

export interface ThemeProviderProps {
  theme?: Theme;
  font?: Font;
  children?: JSX.Element;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { theme: initialTheme, font: initialFont, children } = props;

  const [activeTheme, setActiveTheme] = useState<Theme>(
    initialTheme || Default.Default
  );
  const [activeFont, setActiveFont] = useState<Font>(
    initialFont || defaultFont
  );
  const styledTheme = generateTheme(activeTheme);

  return (
    <StyledThemeProvider theme={styledTheme}>
      <ThemeContext.Provider
        value={{
          theme: activeTheme,
          font: activeFont,
          setActiveFont: setActiveFont,
          setTheme: setActiveTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
