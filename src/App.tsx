import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import {ThemeProvider} from './context/ThemeContext';
import {AuthProvider, useAuth} from './context/AuthContext';
import {LoginScreen} from './screens';
import {Typography, MainContainer} from './components';
import {useTheme} from './hooks/useTheme';

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