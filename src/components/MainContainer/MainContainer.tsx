import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {BottomTabs, TabName} from '../BottomTabs/BottomTabs';
import {
  HomeScreen,
  CategoriesScreen,
  SearchScreen,
  CartScreen,
  ProfileScreen,
  DemoScreen,
} from '../../screens';
import {useTheme} from '../../hooks/useTheme';

export const MainContainer: React.FC = () => {
  const {colors} = useTheme();
  const [activeTab, setActiveTab] = useState<TabName>('Home');
  const [cartCount] = useState(3); // Mock cart count

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Categories':
        return <CategoriesScreen />;
      case 'Search':
        return <SearchScreen />;
      case 'Cart':
        return <CartScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>
      
      <BottomTabs
        activeTab={activeTab}
        onTabPress={setActiveTab}
        cartCount={cartCount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    paddingBottom: 80, // Space for bottom tabs
  },
});