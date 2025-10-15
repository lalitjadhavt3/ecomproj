import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {LightColors} from '../../theme/colors';
import {Spacing} from '../../theme/spacing';
import {Typography} from '../../theme/typography';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle,
}) => {
  const backgroundColor =
    variant === 'primary'
      ? LightColors.primary
      : variant === 'secondary'
      ? LightColors.secondary
      : 'transparent';
  
  const borderColor = variant === 'outline' ? LightColors.primary : 'transparent';
  const textColor = variant === 'outline' ? LightColors.primary : LightColors.background;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor, borderColor},
        style,
      ]}>
      <Text style={[styles.text, {color: textColor}, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
  },
  text: {
    ...Typography.body,
    fontWeight: '600',
  },
});