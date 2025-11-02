import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {Spacing} from '../../theme/spacing';
import {Typography} from '../../theme/typography';

type BadgeVariant = 'success' | 'warning' | 'error' | 'primary';

type BadgeProps = {
  text: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
};

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'primary',
  style,
}) => {
  const {colors} = useTheme();
  const backgroundColor = colors[variant];

  return (
    <View style={[styles.badge, {backgroundColor}, style]}>
      <Text style={[styles.text, {color: colors.background}]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: {
    ...Typography.caption,
    fontWeight: '600',
  },
});