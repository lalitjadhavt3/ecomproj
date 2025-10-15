import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack} from './AuthStack';
import {MainTabs} from './MainTabs';
import {ProductDetailsScreen, CheckoutScreen} from '../screens';
import {RootStackParamList} from './types';
import {useAuth} from '../context/AuthContext';
import {useTheme} from '../hooks/useTheme';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Typography} from '../components';

const Stack = createStackNavigator<RootStackParamList>();

const LoadingScreen: React.FC = () => {
  const {colors} = useTheme();
  
  return (
    <View style={[styles.loadingContainer, {backgroundColor: colors.background}]}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Typography variant="body" color={colors.textPrimary} style={styles.loadingText}>
        Loading...
      </Typography>
    </View>
  );
};

export const RootNavigator: React.FC = () => {
  const {isAuthenticated, loading} = useAuth();
  const {colors} = useTheme();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.textPrimary,
          headerTitleStyle: {
            fontFamily: 'Poppins-SemiBold',
          },
          cardStyle: {
            backgroundColor: colors.background,
          },
        }}>
        {!isAuthenticated ? (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Main"
              component={MainTabs}
              options={{headerShown: false}}
            />
            {/* Modal screens */}
            <Stack.Group screenOptions={{presentation: 'modal'}}>
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{title: 'Product Details'}}
              />
              <Stack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{title: 'Checkout'}}
              />
            </Stack.Group>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
  },
});