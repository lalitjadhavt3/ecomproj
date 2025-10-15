import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import {Spacing, Typography, Shadows} from '../../theme';
import {formatCurrency} from '../../utils/helpers';
import {wp} from '../../utils/responsive';

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image?: string;
  discount?: number;
  onPress?: (id: string) => void;
  onAddToCart?: (id: string) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  discount,
  onPress,
  onAddToCart,
}) => {
  const {colors} = useTheme();
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  const dynamicStyles = {
    container: {
      width: wp(45),
      backgroundColor: colors.background,
      borderRadius: 12,
      marginBottom: Spacing.md,
      ...Shadows.card,
    },
    placeholder: {
      width: '100%' as const,
      height: '100%' as const,
      backgroundColor: colors.surface,
    },
    discountBadge: {
      position: 'absolute' as const,
      top: Spacing.sm,
      right: Spacing.sm,
      backgroundColor: colors.error,
      paddingHorizontal: Spacing.xs,
      paddingVertical: 2,
      borderRadius: 4,
    },
    discountText: {
      ...Typography.caption,
      color: colors.background,
      fontWeight: '600' as const,
    },
    name: {
      ...Typography.body,
      color: colors.textPrimary,
      marginBottom: Spacing.xs,
    },
    price: {
      ...Typography.body,
      color: colors.primary,
      fontWeight: '600' as const,
    },
    originalPrice: {
      ...Typography.caption,
      color: colors.textSecondary,
      textDecorationLine: 'line-through' as const,
      marginLeft: Spacing.xs,
    },
    addButton: {
      backgroundColor: colors.primary,
      paddingVertical: Spacing.xs,
      borderRadius: 6,
      alignItems: 'center' as const,
    },
    addButtonText: {
      ...Typography.caption,
      color: colors.background,
      fontWeight: '600' as const,
    },
  };

  return (
    <TouchableOpacity
      style={dynamicStyles.container}
      onPress={() => onPress?.(id)}
      activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{uri: image}} style={styles.image} />
        ) : (
          <View style={dynamicStyles.placeholder} />
        )}
        {discount && (
          <View style={dynamicStyles.discountBadge}>
            <Text style={dynamicStyles.discountText}>{discount}% OFF</Text>
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <Text style={dynamicStyles.name} numberOfLines={2}>
          {name}
        </Text>
        
        <View style={styles.priceContainer}>
          <Text style={dynamicStyles.price}>
            {formatCurrency(discountedPrice)}
          </Text>
          {discount && (
            <Text style={dynamicStyles.originalPrice}>
              {formatCurrency(price)}
            </Text>
          )}
        </View>
        
        <TouchableOpacity
          style={dynamicStyles.addButton}
          onPress={() => onAddToCart?.(id)}>
          <Text style={dynamicStyles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    height: wp(40),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: Spacing.sm,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
});