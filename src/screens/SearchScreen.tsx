import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Typography, Card, Input, ThemeToggle, ProductCard} from '../components';
import {useTheme} from '../hooks/useTheme';
import {wp, hp} from '../utils/responsive';
import {Spacing} from '../theme';

const recentSearches = ['Apples', 'Milk', 'Bread', 'Chicken', 'Rice'];

const sampleProducts = [
  {id: '1', name: 'Fresh Red Apples', price: 299, discount: 10},
  {id: '2', name: 'Organic Bananas', price: 150},
  {id: '3', name: 'Whole Wheat Bread', price: 45},
  {id: '4', name: 'Fresh Milk 1L', price: 65},
];

export const SearchScreen: React.FC = () => {
  const {colors} = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const handleProductPress = (id: string) => {
    console.log('Product pressed:', id);
  };

  const handleAddToCart = (id: string) => {
    console.log('Add to cart:', id);
  };

  return (
    <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Typography variant="h1" color={colors.textPrimary}>
          Search
        </Typography>
        <ThemeToggle />
      </View>
      
      <View style={styles.searchContainer}>
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      {searchQuery === '' ? (
        <Card style={styles.card}>
          <Typography variant="h2" color={colors.textPrimary}>
            Recent Searches
          </Typography>
          <View style={styles.recentSearches}>
            {recentSearches.map((search, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.searchTag, {backgroundColor: colors.surface}]}
                onPress={() => setSearchQuery(search)}>
                <Typography variant="caption" color={colors.textPrimary}>
                  {search}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>
        </Card>
      ) : (
        <View style={styles.resultsContainer}>
          <Typography variant="h2" color={colors.textPrimary} style={styles.resultsTitle}>
            Search Results for "{searchQuery}"
          </Typography>
          <View style={styles.productsGrid}>
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                discount={product.discount}
                onPress={handleProductPress}
                onAddToCart={handleAddToCart}
              />
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  searchContainer: {
    paddingHorizontal: wp(4),
    marginBottom: hp(2),
  },
  card: {
    margin: wp(4),
  },
  recentSearches: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    marginTop: Spacing.md,
  },
  searchTag: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: 16,
  },
  resultsContainer: {
    paddingHorizontal: wp(4),
  },
  resultsTitle: {
    marginBottom: hp(2),
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});