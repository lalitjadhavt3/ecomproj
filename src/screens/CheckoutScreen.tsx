import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Typography, Card, Button, SafeArea} from '../components';
import {useTheme} from '../hooks/useTheme';
import {wp, hp} from '../utils/responsive';

export const CheckoutScreen: React.FC = () => {
  const {colors} = useTheme();

  return (
    <SafeArea style={{backgroundColor: colors.background}}>
      <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Typography variant="h1" color={colors.textPrimary}>
          Checkout
        </Typography>
      </View>
      
      <Card style={styles.card}>
        <Typography variant="h2" color={colors.textPrimary}>
          Order Summary
        </Typography>
        <Typography variant="body" color={colors.textSecondary}>
          Delivery address, payment method, and order confirmation.
        </Typography>
        
        <Button
          title="Place Order"
          onPress={() => console.log('Place order')}
          variant="primary"
          style={styles.placeOrderButton}
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
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  card: {
    margin: wp(4),
  },
  placeOrderButton: {
    marginTop: hp(2),
  },
});