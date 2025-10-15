import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Typography, Card} from '../';
import {useTheme} from '../../hooks/useTheme';
import {Spacing} from '../../theme';

export const LoginInstructions: React.FC = () => {
  const {colors} = useTheme();

  return (
    <Card style={styles.container}>
      <Typography variant="h2" color={colors.primary} style={styles.title}>
        🚀 Demo Login
      </Typography>
      
      <Typography variant="body" color={colors.textPrimary} style={styles.description}>
        Use these sample credentials to test the login functionality:
      </Typography>
      
      <View style={styles.credentialsContainer}>
        <View style={styles.credentialRow}>
          <Typography variant="body" color={colors.textSecondary}>
            📱 Phone: 
          </Typography>
          <Typography variant="body" color={colors.textPrimary} style={styles.credentialValue}>
            1234567890
          </Typography>
        </View>
        
        <View style={styles.credentialRow}>
          <Typography variant="body" color={colors.textSecondary}>
            🔒 Password: 
          </Typography>
          <Typography variant="body" color={colors.textPrimary} style={styles.credentialValue}>
            password123
          </Typography>
        </View>
      </View>
      
      <Typography variant="caption" color={colors.textSecondary} style={styles.note}>
        After login, you'll be redirected to the main app with bottom navigation.
      </Typography>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.md,
  },
  title: {
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  description: {
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  credentialsContainer: {
    marginBottom: Spacing.md,
  },
  credentialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  credentialValue: {
    fontWeight: '600',
    marginLeft: Spacing.xs,
  },
  note: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});