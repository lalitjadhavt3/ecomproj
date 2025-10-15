import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {LightColors} from '../../theme/colors';
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
  const backgroundColor = LightColors[variant];

  return (
    <View style={[styles.badge, {backgroundColor}, style]}>
      <Text style={styles.text}>{text}</Text>
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
    color: LightColors.background,
    fontWeight: '600',
  },
});