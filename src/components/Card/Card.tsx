import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {Spacing} from '../../theme/spacing';
import {Shadows} from '../../theme/shadows';

type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: keyof typeof Spacing;
};

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = 'md',
}) => {
  const {colors} = useTheme();
  
  return (
    <View
      style={[
        {
          backgroundColor: colors.surface,
          borderRadius: 12,
          padding: Spacing[padding],
          ...Shadows.card,
        },
        style,
      ]}>
      {children}
    </View>
  );
};