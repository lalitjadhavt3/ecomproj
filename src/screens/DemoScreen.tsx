import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  Button,
  Input,
  Card,
  ProductCard,
  Typography,
  Badge,
  ThemeToggle,
  SafeArea,
} from '../components';
import { useTheme } from '../hooks/useTheme';
import { useResponsive } from '../hooks/useResponsive';
import { formatCurrency, capitalize } from '../utils/helpers';
import { wp, hp } from '../utils/responsive';
import { Spacing } from '../theme';

export const DemoScreen: React.FC = () => {
  const {colors, mode} = useTheme();
  const Colors = colors;
  const screen = useResponsive();
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const handleButtonPress = (variant: string) => {
    Alert.alert('Button Pressed', `You pressed the ${variant} button!`);
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (text.length < 3) {
      setInputError('Must be at least 3 characters');
    } else {
      setInputError('');
    }
  };

  const handleProductPress = (id: string) => {
    Alert.alert('Product Selected', `Product ID: ${id}`);
  };

  const handleAddToCart = (id: string) => {
    Alert.alert('Added to Cart', `Product ${id} added to cart!`);
  };

  return (
    <SafeArea style={{backgroundColor: Colors.background}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
        <ScrollView
          style={[styles.container, { backgroundColor: Colors.background }]}
          showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        <Typography variant="h1" color={Colors.primary}>
          Component Demo
        </Typography>
        <Typography variant="body" color={Colors.textSecondary}>
          Testing all components with {mode} theme
        </Typography>
      </View>

      {/* Screen Info Card */}
      <Card style={styles.section}>
        <Typography variant="h2" style={styles.sectionTitle} color={Colors.textPrimary}>
          📱 Screen Information
        </Typography>
        <Typography variant="body" color={Colors.textPrimary}>
          Width: {screen.width.toFixed(0)}px
        </Typography>
        <Typography variant="body" color={Colors.textPrimary}>
          Height: {screen.height.toFixed(0)}px
        </Typography>
        <Typography variant="body" color={Colors.textPrimary}>
          wp(50): {wp(50).toFixed(0)}px
        </Typography>
        <Typography variant="body" color={Colors.textPrimary}>
          hp(10): {hp(10).toFixed(0)}px
        </Typography>
      </Card>

      {/* Typography Section */}
      <Card style={styles.section}>
        <Typography variant="h2" style={styles.sectionTitle} color={Colors.textPrimary}>
          📝 Typography with Poppins Font
        </Typography>
        <Typography variant="h1" color={Colors.textPrimary}>
          Heading 1 - Poppins Bold
        </Typography>
        <Typography variant="h2" color={Colors.textPrimary}>
          Heading 2 - Poppins SemiBold
        </Typography>
        <Typography variant="body" color={Colors.textPrimary}>
          Body text - Poppins Regular
        </Typography>
        <Typography variant="caption" color={Colors.textSecondary}>
          Caption - Poppins Light
        </Typography>
      </Card>

      {/* Buttons Section */}
      <Card style={styles.section}>
        <Typography variant="h2" style={styles.sectionTitle} color={Colors.textPrimary}>
          🔘 Button Variants
        </Typography>
        <View style={styles.buttonContainer}>
          <Button
            title="Primary Button"
            onPress={() => handleButtonPress('primary')}
            variant="primary"
            style={styles.button}
          />
          <Button
            title="Secondary Button"
            onPress={() => handleButtonPress('secondary')}
            variant="secondary"
            style={styles.button}
          />
          <Button
            title="Outline Button"
            onPress={() => handleButtonPress('outline')}
            variant="outline"
            style={styles.button}
          />
          <ThemeToggle/>
        </View>
      </Card>

      {/* Input Section */}
      <Card style={styles.section}>
        <Typography variant="h2" style={styles.sectionTitle} color={Colors.textPrimary}>
          ⌨️ Input Component
        </Typography>
        <Input
          label="Test Input"
          placeholder="Type something here..."
          value={inputValue}
          onChangeText={handleInputChange}
          error={inputError}
        />
        <Typography variant="caption" color={Colors.textSecondary}>
          Current value: "{inputValue}"
        </Typography>
      </Card>

      {/* Badges Section */}
      <Card style={styles.section}>
        <Typography variant="h2" style={styles.sectionTitle} color={Colors.textPrimary}>
          🏷️ Badge Variants
        </Typography>
        <View style={styles.badgeContainer}>
          <Badge text="Primary" variant="primary" />
          <Badge text="Success" variant="success" />
          <Badge text="Warning" variant="warning" />
          <Badge text="Error" variant="error" />
        </View>
      </Card>

      {/* Utility Functions Section */}
      <Card style={styles.section}>
        <Typography variant="h2" style={styles.sectionTitle} color={Colors.textPrimary}>
          🛠️ Utility Functions
        </Typography>
        
        <Typography variant="body" color={Colors.textPrimary}>
          formatCurrency(299.99): {formatCurrency(299.99)}
        </Typography>
        <Typography variant="body" color={Colors.textPrimary}>
          formatCurrency(150, '$'): {formatCurrency(150, '$')}
        </Typography>
        <Typography variant="body" color={Colors.textPrimary}>
          capitalize('hello world'): {capitalize('hello world')}
        </Typography>
      </Card>

      {/* Product Cards Section */}
      <Card style={styles.section}>
        <Typography variant="h2" style={styles.sectionTitle} color={Colors.textPrimary}>
          🛒 Product Cards
        </Typography>
        <View style={styles.productContainer}>
          <ProductCard
            id="1"
            name="Fresh Organic Apples"
            price={299.99}
            discount={15}
            onPress={handleProductPress}
            onAddToCart={handleAddToCart}
          />
          <ProductCard
            id="2"
            name="Premium Basmati Rice 5kg"
            price={899}
            onPress={handleProductPress}
            onAddToCart={handleAddToCart}
          />
        </View>
      </Card>

      {/* Color Palette Section */}
      <Card style={styles.section}>
        <Typography variant="h2" style={styles.sectionTitle} color={Colors.textPrimary}>
          🎨 Light Theme Colors
        </Typography>
        <View style={styles.colorContainer}>
          {Object.entries(Colors).map(([name, color]) => (
            <View key={name} style={styles.colorItem}>
              <View style={[styles.colorSwatch, { backgroundColor: color as string }]} />
              <Typography variant="caption" color={Colors.textPrimary}>
                {name}
              </Typography>
              <Typography variant="caption" color={Colors.textSecondary}>
                {color as string}
              </Typography>
            </View>
          ))}
        </View>
      </Card>

      <View style={styles.footer}>
        <Typography variant="caption" color={Colors.textSecondary}>
          🎉 All components working with Poppins font!
        </Typography>
      </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoid: {
    flex: 1,
  },
  header: {
    padding: Spacing.lg,
    alignItems: 'center',
  },
  section: {
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    marginBottom: Spacing.md,
  },
  buttonContainer: {
    gap: Spacing.sm,
  },
  button: {
    marginBottom: Spacing.sm,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  colorItem: {
    alignItems: 'center',
    width: wp(20),
  },
  colorSwatch: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: Spacing.xs,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  footer: {
    padding: Spacing.xl,
    alignItems: 'center',
  },
});