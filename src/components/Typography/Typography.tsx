import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';

type TypographyVariant = 'h1' | 'h2' | 'body' | 'caption';

type TypographyProps = TextProps & {
  variant?: TypographyVariant;
  color?: string;
  children: React.ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = '#212121',
  style,
  children,
  ...props
}) => {
  return (
    <Text
      style={[
        styles[variant],
        {color},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },
  h2: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  caption: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Poppins-Light',
  },
});