import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Typography, Card, Button } from '../components';
import { useTheme } from '../hooks/useTheme';
import { wp, hp } from '../utils/responsive';
const intialData = {
  cartId: 'CART12345',
  userId: 'USER789',
  items: [
    {
      productId: 'PROD001',
      name: 'Fresh Bananas',
      category: 'Fruits',
      image:
        'https://zamaorganics.com/cdn/shop/files/banana1000_x_1000_px_1.png?v=1752738968',
      unit: '1 kg',
      pricePerUnit: 40,
      quantity: 2,
    },
    {
      productId: 'PROD002',
      name: 'Amul Milk',
      category: 'Dairy',
      image:
        'https://tiimg.tistatic.com/fp/1/007/548/nutrition-filled-tasty-creamy-white-amul-milk-half-liter-pack-082.jpg',
      unit: '1 litre',
      pricePerUnit: 60,
      quantity: 1,
    },
    {
      productId: 'PROD003',
      name: 'Basmati Rice',
      category: 'Grains',
      image:
        'https://www.cspi.org/sites/default/files/styles/700x530/public/2021-12/goForWholeGrains_hero_700x530.jpg.webp?itok=CVvGIloW',
      unit: '5 kg',
      pricePerUnit: 350,
      quantity: 1,
    },
  ],
  subtotal: 935,
  deliveryCharge: 40,
  totalAmount: 975,
  currency: 'INR',
  createdAt: '2025-10-21T13:00:00Z',
  status: 'pending',
};
export const CartScreen: React.FC = () => {
  const { colors } = useTheme();
  const [data, setData] = useState(intialData);
  const addQty = (itemID: string) => {
    const updated = data.items.map(item =>
      item.productId === itemID
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );
    setData({ ...data, items: updated });
  };
  const minusQty = (itemID: string) => {
    const updated = data.items
      .map(item =>
        item.productId === itemID
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      )
      .filter(item => item.quantity > 0);

    setData({ ...data, items: updated });
  };
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
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
        <FlatList
          data={data.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View
              key={index}
              style={[styles.cartItem, { borderColor: colors.textPrimary }]}
            >
              <View style={styles.leftContent}>
                <Image style={styles.itemImage} source={{ uri: item.image }} />
                <View style={styles.itemInfo}>
                  <Typography variant="body" color={colors.textPrimary}>
                    {item.name}
                  </Typography>
                  <Typography variant="caption" color={colors.textPrimary}>
                    <Typography variant="caption" color={colors.textPrimary}>
                      Category :{' '}
                    </Typography>
                    {item.category}
                  </Typography>
                  <Typography variant="caption" color={colors.textPrimary}>
                    <Typography variant="caption" color={colors.textPrimary}>
                      Price :{' '}
                    </Typography>
                    {item.pricePerUnit}
                  </Typography>
                </View>
              </View>
              <View style={styles.rightContent}>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => minusQty(item.productId)}
                >
                  <Typography variant="body" color={colors.error}>
                    -
                  </Typography>
                </TouchableOpacity>
                <Typography variant="body" color={colors.textPrimary}>
                  {item.quantity}
                </Typography>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => addQty(item.productId)}
                >
                  <Typography variant="body" color={colors.success}>
                    +
                  </Typography>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <View style={styles.checkoutInfo}>
          <Typography variant="caption" color={colors.textPrimary}>
            <Typography variant="caption" color={colors.textPrimary}>
              Subtotal :{' '}
            </Typography>
            400
          </Typography>
          <Typography variant="caption" color={colors.textPrimary}>
            <Typography variant="caption" color={colors.textPrimary}>
              Discount :{' '}
            </Typography>
            200
          </Typography>
          <Typography variant="h2" color={colors.textPrimary}>
            <Typography variant="h2" color={colors.textPrimary}>
              Total :{' '}
            </Typography>
            200
          </Typography>
        </View>
      </Card>
      <Button
        title="Proceed to Checkout"
        onPress={() => console.log('Checkout')}
        variant="primary"
        style={styles.checkoutButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutInfo: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: hp(2),
    paddingHorizontal: wp(2),
  },
  qtyBtn: {
    padding: 0,
    borderColor: 'grey',
    borderWidth: 0.7,
    width: wp(7),
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  rightContent: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(2),
  },
  leftContent: {
    flexDirection: 'row',
  },
  itemImage: {
    height: hp(7),
    width: wp(15),
    marginVertical: hp(1),
    alignSelf: 'center',
    borderRadius: 5,
    objectFit: 'cover',
  },
  itemInfo: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
  },
  cartItem: {
    flexDirection: 'row',
    marginVertical: hp(1),
    paddingHorizontal: wp(2),
    minHeight: hp(7),
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: hp(7),
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
    marginHorizontal: wp(3),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
