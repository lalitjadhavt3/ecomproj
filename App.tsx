import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import {ThemeProvider} from './src/context/ThemeContext';
import {AuthProvider, useAuth} from './src/context/AuthContext';
import {LoginScreen} from './src/screens';
import {Typography, MainContainer} from './src/components';
import {useTheme} from './src/hooks/useTheme';

const AppContent: React.FC = () => {
  const {isAuthenticated, loading} = useAuth();
  const {colors} = useTheme();

  if (loading) {
    return (
      <View style={[styles.loadingContainer, {backgroundColor: colors.background}]}>
        <Typography variant="h2" color={colors.textPrimary}>
          Loading...
        </Typography>
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <StatusBar barStyle="default" />
      {isAuthenticated ? <MainContainer /> : <LoginScreen />}
    </View>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;