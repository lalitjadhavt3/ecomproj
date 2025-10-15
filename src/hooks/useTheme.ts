import {useThemeContext} from '../context/ThemeContext';

export const useTheme = () => {
  const {colors, spacing, typography, shadows, mode, toggleTheme} = useThemeContext();
  
  return {
    Colors: colors,
    Spacing: spacing,
    Typography: typography,
    Shadows: shadows,
    mode,
    toggleTheme,
  };
};