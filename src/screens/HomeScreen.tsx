import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Typography, ThemeToggle, Card, Button, SafeArea} from '../components';
import {useTheme} from '../hooks/useTheme';
import {useAuth} from '../context/AuthContext';
import {wp, hp} from '../utils/responsive';
import {Spacing} from '../theme';

export const HomeScreen: React.FC = () => {
  const {colors} = useTheme();
  const {user} = useAuth();

  return (
    <SafeArea style={{backgroundColor: colors.background}}>
      <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Typography variant="h1" color={colors.textPrimary}>
          Grocery Store
        </Typography>
        <ThemeToggle />
      </View>
      
      <Card style={styles.card}>
        <Typography variant="h2" color={colors.textPrimary}>
          Welcome, {user?.name || 'User'}! 🎉
        </Typography>
        <Typography variant="body" color={colors.textSecondary} style={styles.description}>
          Discover fresh groceries, amazing deals, and everything you need for your kitchen.
        </Typography>
        
        <View style={styles.featuresContainer}>
          <Card style={styles.featureCard}>
            <Typography variant="body" color={colors.textPrimary} style={styles.featureTitle}>
              🥬 Fresh Vegetables
            </Typography>
            <Typography variant="caption" color={colors.textSecondary}>
              Farm fresh produce delivered daily
            </Typography>
          </Card>
          
          <Card style={styles.featureCard}>
            <Typography variant="body" color={colors.textPrimary} style={styles.featureTitle}>
              🍎 Organic Fruits
            </Typography>
            <Typography variant="caption" color={colors.textSecondary}>
              Premium quality organic fruits
            </Typography>
          </Card>
        </View>
        
        <Button
          title="Browse Categories"
          onPress={() => console.log('Browse categories')}
          variant="primary"
          style={styles.browseButton}
        />
      </Card>
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
  card: {
    margin: wp(4),
  },
  description: {
    marginBottom: hp(2),
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
    gap: Spacing.sm,
  },
  featureCard: {
    flex: 1,
    padding: Spacing.sm,
  },
  featureTitle: {
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
  browseButton: {
    marginTop: hp(1),
  },
});