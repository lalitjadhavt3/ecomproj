import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const {colors, mode, toggleTheme} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colors.surface}]}
      onPress={toggleTheme}>
      <Text style={[styles.text, {color: colors.textPrimary}]}>
        {mode === 'light' ? '🌙' : '☀️'} {mode === 'light' ? 'Dark' : 'Light'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
});