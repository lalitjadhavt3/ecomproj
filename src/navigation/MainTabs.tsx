import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import { HomeStack } from './HomeStack';
import { CategoriesScreen, SearchScreen, CartScreen, ProfileScreen } from '../screens';
import { useTheme } from '../hooks/useTheme';
import { Typography } from '../components';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabs: React.FC = () => {
    const { colors } = useTheme();

    const TabIcon = ({ focused, icon }: { focused: boolean; icon: string }) => (
        <Typography
            variant="body"
            color={focused ? colors.primary : colors.textSecondary}
            style={{ fontSize: 20 }}>
            {icon}
        </Typography>
    );

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderTopColor: colors.textSecondary,
                    borderTopWidth: 0.5,
                    paddingTop: 8,
                    paddingBottom: 8,
                    height: 70,
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarLabelStyle: {
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                    marginTop: 4,
                },
                headerStyle: {
                    backgroundColor: colors.background,
                },
                headerTintColor: colors.textPrimary,
                headerTitleStyle: {
                    fontFamily: 'Poppins-SemiBold',
                },
            }}>
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="🏠" />,
                }}
            />
            <Tab.Screen
                name="CategoriesTab"
                component={CategoriesScreen}
                options={{
                    title: 'Categories',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="📂" />,
                }}
            />
            <Tab.Screen
                name="SearchTab"
                component={SearchScreen}
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="🔍" />,
                }}
            />
            <Tab.Screen
                name="CartTab"
                component={CartScreen}
                options={{
                    title: 'Cart',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="🛒" />,
                    tabBarBadge: 3, // This would be dynamic based on cart items
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="👤" />,
                }}
            />
        </Tab.Navigator>
    );
};