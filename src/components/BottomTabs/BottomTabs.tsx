import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import {Typography} from '../Typography/Typography';
import {useTheme} from '../../hooks/useTheme';
import {wp, hp} from '../../utils/responsive';
import {Spacing} from '../../theme';

export type TabName = 'Home' | 'Categories' | 'Search' | 'Cart' | 'Profile';

interface Tab {
  name: TabName;
  icon: string;
  label: string;
}

interface BottomTabsProps {
  activeTab: TabName;
  onTabPress: (tab: TabName) => void;
  cartCount?: number;
}

const tabs: Tab[] = [
  {name: 'Home', icon: '🏠', label: 'Home'},
  {name: 'Categories', icon: '📂', label: 'Categories'},
  {name: 'Search', icon: '🔍', label: 'Search'},
  {name: 'Cart', icon: '🛒', label: 'Cart'},
  {name: 'Profile', icon: '👤', label: 'Profile'},
];

export const BottomTabs: React.FC<BottomTabsProps> = ({
  activeTab,
  onTabPress,
  cartCount = 0,
}) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.surface}]}>
      <View style={[styles.tabBar, {borderTopColor: colors.textSecondary}]}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          
          return (
            <TouchableOpacity
              key={tab.name}
              style={styles.tabItem}
              onPress={() => onTabPress(tab.name)}
              activeOpacity={0.7}>
              
              <View style={styles.iconContainer}>
                <Typography 
                  variant="body" 
                  color={isActive ? colors.primary : colors.textSecondary}
                  style={styles.icon}>
                  {tab.icon}
                </Typography>
                
                {/* Cart Badge */}
                {tab.name === 'Cart' && cartCount > 0 && (
                  <View style={[styles.badge, {backgroundColor: colors.error}]}>
                    <Typography 
                      variant="caption" 
                      color={colors.background}
                      style={styles.badgeText}>
                      {cartCount > 99 ? '99+' : cartCount.toString()}
                    </Typography>
                  </View>
                )}
              </View>
              
              <Typography 
                variant="caption" 
                color={isActive ? colors.primary : colors.textSecondary}
                style={styles.label}>
                {tab.label}
              </Typography>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.xs,
    paddingHorizontal: Spacing.xs,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.xs,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 4,
  },
  icon: {
    fontSize: 20,
  },
  label: {
    fontSize: 10,
    fontWeight: '500',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '600',
  },
});