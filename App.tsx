import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider, useThemeContext } from './src/context/ThemeContext'
import { DemoScreen } from './src/screens/DemoScreen'

const AppContent: React.FC = () => {
  const { colors, mode } = useThemeContext();
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={mode === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={colors.background}
      />
      <DemoScreen />
    </SafeAreaView>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;