import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LightColors, DarkColors, ColorScheme } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';
import { Shadows } from '../theme/shadows';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  colors: ColorScheme;
  spacing: typeof Spacing;
  typography: typeof Typography;
  shadows: typeof Shadows;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const colors = mode === 'light' ? LightColors : DarkColors;

  const value: ThemeContextType = {
    mode,
    colors,
    spacing: Spacing,
    typography: Typography,
    shadows: Shadows,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};