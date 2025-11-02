import React from 'react';
import {SafeAreaView, View, Platform, StatusBar, StyleSheet} from 'react-native';

interface SafeAreaProps {
  children: React.ReactNode;
  style?: any;
}

export const SafeArea: React.FC<SafeAreaProps> = ({children, style}) => {
  if (Platform.OS === 'ios') {
    return (
      <SafeAreaView style={[styles.container, style]}>
        {children}
      </SafeAreaView>
    );
  }

  // Android: Use View with StatusBar height padding
  return (
    <View style={[styles.container, styles.androidContainer, style]}>
      <StatusBar barStyle="default" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidContainer: {
    paddingTop: StatusBar.currentHeight || 0,
  },
});

