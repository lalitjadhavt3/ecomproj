import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {LightColors} from '../../theme/colors';

export const ThemeToggle: React.FC = () => {
  const handlePress = () => {
    // Theme toggle functionality will be added later
    console.log('Theme toggle pressed');
  };

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: LightColors.surface}]}
      onPress={handlePress}>
      <Text style={[styles.text, {color: LightColors.textPrimary}]}>
        🌙 Dark Mode
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