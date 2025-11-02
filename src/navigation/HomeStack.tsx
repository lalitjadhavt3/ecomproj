import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProductDetailsScreen, DemoScreen } from '../screens';
import { HomeStackParamList } from './types';
import { useTheme } from '../hooks/useTheme';

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStack: React.FC = () => {
    const { colors } = useTheme();

    return (
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
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{ title: 'Product Details' }}
            />
            <Stack.Screen
                name="Demo"
                component={DemoScreen}
                options={{ title: 'Component Demo' }}
            />
        </Stack.Navigator>
    );
};