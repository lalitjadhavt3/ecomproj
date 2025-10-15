import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {Spacing} from '../../theme/spacing';
import {Typography} from '../../theme/typography';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
};

export const Input: React.FC<InputProps> = ({
  label,
  error,
  containerStyle,
  style,
  ...props
}) => {
  const {colors} = useTheme();
  
  const dynamicStyles = {
    label: {
      ...Typography.body,
      color: colors.textPrimary,
      marginBottom: Spacing.xs,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.textSecondary,
      borderRadius: 8,
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.sm,
      ...Typography.body,
      color: colors.textPrimary,
    },
    inputError: {
      borderColor: colors.error,
    },
    error: {
      ...Typography.caption,
      color: colors.error,
      marginTop: Spacing.xs,
    },
  };
  
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={dynamicStyles.label}>{label}</Text>}
      <TextInput
        style={[
          dynamicStyles.input,
          error && dynamicStyles.inputError,
          style,
        ]}
        placeholderTextColor={colors.textSecondary}
        {...props}
      />
      {error && <Text style={dynamicStyles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
});