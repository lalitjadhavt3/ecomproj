import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {LightColors} from '../../theme/colors';
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
  return (
    <View
      style={[
        styles.card,
        {padding: Spacing[padding]},
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: LightColors.surface,
    borderRadius: 12,
    ...Shadows.card,
  },
});