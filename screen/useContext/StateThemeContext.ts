import React from 'react';

export const ThemeContext = React.createContext({
  toggleTheme: (value: boolean) => {},
  isThemeDark: false,
  
});