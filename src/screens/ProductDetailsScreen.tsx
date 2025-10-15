import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Typography, Card, Button} from '../components';
import {useTheme} from '../hooks/useTheme';
import {wp, hp} from '../utils/responsive';

export const ProductDetailsScreen: React.FC = () => {
  const {colors} = useTheme();

  return (
    <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Typography variant="h1" color={colors.textPrimary}>
          Product Details
        </Typography>
      </View>
      
      <Card style={styles.card}>
        <Typography variant="h2" color={colors.textPrimary}>
          Product Information
        </Typography>
        <Typography variant="body" color={colors.textSecondary}>
          Detailed product information, images, reviews, and add to cart functionality.
        </Typography>
        
        <Button
          title="Add to Cart"
          onPress={() => console.log('Add to cart')}
          variant="primary"
          style={styles.addToCartButton}
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  card: {
    margin: wp(4),
  },
  addToCartButton: {
    marginTop: hp(2),
  },
});