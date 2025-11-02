import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Typography, Card, ThemeToggle, SafeArea} from '../components';
import {useTheme} from '../hooks/useTheme';
import {wp, hp} from '../utils/responsive';
import {Spacing} from '../theme';

const categories = [
  {id: '1', name: 'Fresh Vegetables', icon: '🥬', count: 45},
  {id: '2', name: 'Organic Fruits', icon: '🍎', count: 32},
  {id: '3', name: 'Dairy Products', icon: '🥛', count: 28},
  {id: '4', name: 'Meat & Seafood', icon: '🥩', count: 19},
  {id: '5', name: 'Bakery Items', icon: '🍞', count: 24},
  {id: '6', name: 'Beverages', icon: '🥤', count: 36},
];

export const CategoriesScreen: React.FC = () => {
  const {colors} = useTheme();

  return (
    <SafeArea style={{backgroundColor: colors.background}}>
      <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Typography variant="h1" color={colors.textPrimary}>
          Categories
        </Typography>
        <ThemeToggle />
      </View>
      
      <View style={styles.categoriesGrid}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryItem}
            onPress={() => console.log('Category pressed:', category.name)}>
            <Card style={styles.categoryCard}>
              <Typography variant="h1" style={styles.categoryIcon}>
                {category.icon}
              </Typography>
              <Typography variant="body" color={colors.textPrimary} style={styles.categoryName}>
                {category.name}
              </Typography>
              <Typography variant="caption" color={colors.textSecondary}>
                {category.count} items
              </Typography>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
    </SafeArea>
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
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: wp(2),
  },
  categoryItem: {
    width: '50%',
    padding: wp(2),
  },
  categoryCard: {
    alignItems: 'center',
    paddingVertical: hp(3),
  },
  categoryIcon: {
    fontSize: 40,
    marginBottom: Spacing.sm,
  },
  categoryName: {
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
});