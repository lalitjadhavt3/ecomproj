import React from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
import {Typography, Card, Button} from '../components';
import {useTheme} from '../hooks/useTheme';
import {useAuth} from '../context/AuthContext';
import {wp, hp} from '../utils/responsive';

export const ProfileScreen: React.FC = () => {
  const {colors} = useTheme();
  const {logout, user} = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await logout();
            } catch (error) {
              console.error('Logout failed:', error);
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Typography variant="h1" color={colors.textPrimary}>
          Profile
        </Typography>
      </View>
      
      <Card style={styles.card}>
        <Typography variant="h2" color={colors.textPrimary}>
          Welcome, {user?.name || 'User'}!
        </Typography>
        <Typography variant="body" color={colors.textSecondary}>
          Email: {user?.email}
        </Typography>
        <Typography variant="body" color={colors.textSecondary}>
          Phone: {user?.phone}
        </Typography>
        <Typography variant="body" color={colors.textSecondary} style={styles.description}>
          Profile information, order history, settings, and account management.
        </Typography>
        
        <Button
          title="Logout"
          onPress={handleLogout}
          variant="outline"
          style={styles.logoutButton}
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
  logoutButton: {
    marginTop: hp(2),
  },
  description: {
    marginTop: hp(2),
  },
});