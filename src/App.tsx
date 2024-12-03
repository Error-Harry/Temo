import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Dark, Default } from './theme/themes/Default';
import { Theme } from './theme/types/themes';
import { AppRouter } from '@routes/routes';
import { themeConfig } from '@store/selector';

function App() {
  const activeTheme = useSelector(themeConfig);
  const [initialTheme, setInitialTheme] = useState<Theme>(Default);

  useEffect(() => {
    if (activeTheme.themeMode === 'dark') {
      setInitialTheme(Dark);
    } else {
      setInitialTheme(Default);
    }
  }, [activeTheme]);

  return (
    <ThemeProvider theme={initialTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
