import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Spacing, Typography, Shadows} from '../../theme';
import {LightColors} from '../../theme/colors';
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
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress?.(id)}
      activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{uri: image}} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}
        {discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{discount}% OFF</Text>
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {formatCurrency(discountedPrice)}
          </Text>
          {discount && (
            <Text style={styles.originalPrice}>
              {formatCurrency(price)}
            </Text>
          )}
        </View>
        
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => onAddToCart?.(id)}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(45),
    backgroundColor: LightColors.background,
    borderRadius: 12,
    marginBottom: Spacing.md,
    ...Shadows.card,
  },
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
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: LightColors.surface,
  },
  discountBadge: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    backgroundColor: LightColors.error,
    paddingHorizontal: Spacing.xs,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountText: {
    ...Typography.caption,
    color: LightColors.background,
    fontWeight: '600',
  },
  content: {
    padding: Spacing.sm,
  },
  name: {
    ...Typography.body,
    color: LightColors.textPrimary,
    marginBottom: Spacing.xs,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  price: {
    ...Typography.body,
    color: LightColors.primary,
    fontWeight: '600',
  },
  originalPrice: {
    ...Typography.caption,
    color: LightColors.textSecondary,
    textDecorationLine: 'line-through',
    marginLeft: Spacing.xs,
  },
  addButton: {
    backgroundColor: LightColors.primary,
    paddingVertical: Spacing.xs,
    borderRadius: 6,
    alignItems: 'center',
  },
  addButtonText: {
    ...Typography.caption,
    color: LightColors.background,
    fontWeight: '600',
  },
});