import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Typography, Card, Button} from '../components';
import {useTheme} from '../hooks/useTheme';
import {wp, hp} from '../utils/responsive';

export const CartScreen: React.FC = () => {
  const {colors} = useTheme();

  return (
    <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Typography variant="h1" color={colors.textPrimary}>
          Shopping Cart
        </Typography>
      </View>
      
      <Card style={styles.card}>
        <Typography variant="h2" color={colors.textPrimary}>
          Your Cart Items
        </Typography>
        <Typography variant="body" color={colors.textSecondary}>
          Cart items, quantities, and checkout functionality will be here.
        </Typography>
        
        <Button
          title="Proceed to Checkout"
          onPress={() => console.log('Checkout')}
          variant="primary"
          style={styles.checkoutButton}
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
  checkoutButton: {
    marginTop: hp(2),
  },
});