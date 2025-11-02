import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import {LightColors, DarkColors, ColorScheme} from '../theme/colors';
import {getThemeMode, saveThemeMode} from '../utils/storage';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  colors: ColorScheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    loadThemeMode();
  }, []);

  const loadThemeMode = async () => {
    try {
      const savedMode = await getThemeMode();
      if (savedMode) {
        setMode(savedMode);
      }
    } catch (error) {
      console.error('Error loading theme mode:', error);
    }
  };

  const toggleTheme = async () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    try {
      await saveThemeMode(newMode);
    } catch (error) {
      console.error('Error saving theme mode:', error);
    }
  };

  const colors = mode === 'light' ? LightColors : DarkColors;

  const value: ThemeContextType = {
    mode,
    colors,
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