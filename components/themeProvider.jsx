// components/ThemeProvider.js
import React, { useEffect } from 'react';

const ThemeProvider = ({ theme, children }) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
