import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, SignupScreen} from '../screens';
import {AuthStackParamList} from './types';
import {useTheme} from '../hooks/useTheme';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack: React.FC = () => {
  const {colors} = useTheme();

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
        name="Login" 
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};