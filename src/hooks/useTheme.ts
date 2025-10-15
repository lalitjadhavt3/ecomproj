import {useThemeContext} from '../context/ThemeContext';

export const useTheme = () => {
  const {colors, mode, toggleTheme} = useThemeContext();
  
  return {
    colors,
    mode,
    toggleTheme,
  };
};