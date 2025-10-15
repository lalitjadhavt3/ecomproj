import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { DemoScreen } from './screens/DemoScreen';
import { LightColors } from './theme/colors';

const App: React.FC = () => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: LightColors.background }]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={LightColors.background}
      />
      <DemoScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;