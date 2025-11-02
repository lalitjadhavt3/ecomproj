import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../hooks/useTheme';

export const TailwindDemoScreen: React.FC = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.background }}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="px-4 py-6 bg-blue-500">
          <Text className="text-3xl font-bold text-white mb-2">
            Tailwind CSS Demo
          </Text>
          <Text className="text-blue-100 text-base">
            Explore useful Tailwind utility classes for React Native
          </Text>
        </View>

        {/* Spacing & Layout */}
        <View className="px-4 py-4">
          <Text className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            📐 Spacing & Layout
          </Text>
          
          <View className="bg-blue-100 p-4 rounded-lg mb-4">
            <View className="mb-2">
              <Text className="text-gray-800 font-semibold">
                Margin & Padding
              </Text>
            </View>
            <View className="bg-white p-4 rounded">
              <Text className="text-sm text-gray-600">
                p-4 (padding), m-2 (margin), px-4 (horizontal), py-2 (vertical)
              </Text>
            </View>
          </View>

          {/* Flexbox Examples */}
          <View className="bg-green-100 p-4 rounded-lg mb-4">
            <Text className="text-gray-800 font-semibold mb-2">
              Flexbox Layout
            </Text>
            <View className="flex-row flex-wrap gap-2">
              <View className="bg-blue-500 w-16 h-16 rounded items-center justify-center">
                <Text className="text-white font-bold">1</Text>
              </View>
              <View className="bg-green-500 w-16 h-16 rounded items-center justify-center">
                <Text className="text-white font-bold">2</Text>
              </View>
              <View className="bg-purple-500 w-16 h-16 rounded items-center justify-center">
                <Text className="text-white font-bold">3</Text>
              </View>
            </View>
          </View>

          {/* Grid-like layout */}
          <View className="bg-purple-100 p-4 rounded-lg mb-4">
            <Text className="text-gray-800 font-semibold mb-2">
              Grid Layout (flex-wrap)
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <View
                  key={item}
                  className="bg-indigo-500 w-[48%] h-20 rounded-lg items-center justify-center">
                  <Text className="text-white font-semibold">Item {item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Typography */}
        <View className="px-4 py-4 bg-gray-50">
          <Text className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            ✍️ Typography
          </Text>

          <View className="bg-white p-4 rounded-lg shadow-md mb-4">
            <Text className="text-4xl font-black mb-2" style={{ color: colors.textPrimary }}>
              Heading 1 (text-4xl, font-black)
            </Text>
            <Text className="text-3xl font-bold mb-2" style={{ color: colors.textPrimary }}>
              Heading 2 (text-3xl, font-bold)
            </Text>
            <Text className="text-2xl font-semibold mb-2" style={{ color: colors.textPrimary }}>
              Heading 3 (text-2xl, font-semibold)
            </Text>
            <Text className="text-xl font-medium mb-2" style={{ color: colors.textSecondary }}>
              Large Text (text-xl, font-medium)
            </Text>
            <Text className="text-base mb-2" style={{ color: colors.textSecondary }}>
              Body Text (text-base, normal weight)
            </Text>
            <Text className="text-sm mb-2" style={{ color: colors.textSecondary }}>
              Small Text (text-sm)
            </Text>
            <Text className="text-xs" style={{ color: colors.textSecondary }}>
              Extra Small (text-xs)
            </Text>
          </View>

          {/* Text Colors */}
          <View className="bg-white p-4 rounded-lg shadow-md">
            <Text className="text-lg font-semibold mb-3" style={{ color: colors.textPrimary }}>
              Text Colors
            </Text>
            <Text className="text-red-500 mb-1">text-red-500</Text>
            <Text className="text-blue-500 mb-1">text-blue-500</Text>
            <Text className="text-green-500 mb-1">text-green-500</Text>
            <Text className="text-yellow-500 mb-1">text-yellow-500</Text>
            <Text className="text-purple-500 mb-1">text-purple-500</Text>
            <Text className="text-pink-500">text-pink-500</Text>
          </View>
        </View>

        {/* Colors & Backgrounds */}
        <View className="px-4 py-4">
          <Text className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            🎨 Colors & Backgrounds
          </Text>

          <View className="flex-row flex-wrap gap-3 mb-4">
            <View className="bg-red-500 w-20 h-20 rounded-lg items-center justify-center">
              <Text className="text-white text-xs font-bold">Red</Text>
            </View>
            <View className="bg-blue-500 w-20 h-20 rounded-lg items-center justify-center">
              <Text className="text-white text-xs font-bold">Blue</Text>
            </View>
            <View className="bg-green-500 w-20 h-20 rounded-lg items-center justify-center">
              <Text className="text-white text-xs font-bold">Green</Text>
            </View>
            <View className="bg-yellow-500 w-20 h-20 rounded-lg items-center justify-center">
              <Text className="text-gray-800 text-xs font-bold">Yellow</Text>
            </View>
            <View className="bg-purple-500 w-20 h-20 rounded-lg items-center justify-center">
              <Text className="text-white text-xs font-bold">Purple</Text>
            </View>
            <View className="bg-pink-500 w-20 h-20 rounded-lg items-center justify-center">
              <Text className="text-white text-xs font-bold">Pink</Text>
            </View>
          </View>

          {/* Solid color backgrounds */}
          <View className="bg-blue-400 p-4 rounded-lg mb-4">
            <Text className="text-white font-semibold">
              Solid Color Background
            </Text>
          </View>

          {/* Opacity */}
          <View className="bg-blue-500 p-4 rounded-lg mb-2">
            <Text className="text-white font-semibold">Full Opacity</Text>
          </View>
          <View className="bg-blue-500 opacity-75 p-4 rounded-lg mb-2">
            <Text className="text-white font-semibold">75% Opacity</Text>
          </View>
          <View className="bg-blue-500 opacity-50 p-4 rounded-lg mb-4">
            <Text className="text-white font-semibold">50% Opacity</Text>
          </View>
        </View>

        {/* Buttons & Interactive Elements */}
        <View className="px-4 py-4 bg-gray-50">
          <Text className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            🔘 Buttons & Interactive Elements
          </Text>

          <TouchableOpacity
            className="bg-blue-500 px-6 py-3 rounded-lg mb-3 active:bg-blue-600"
            onPress={() => Alert.alert('Primary Button', 'Button pressed!')}>
            <Text className="text-white text-center font-semibold text-base">
              Primary Button
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-green-500 px-6 py-3 rounded-lg mb-3 active:bg-green-600"
            onPress={() => Alert.alert('Success Button', 'Button pressed!')}>
            <Text className="text-white text-center font-semibold text-base">
              Success Button
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border-2 border-blue-500 px-6 py-3 rounded-lg mb-3 bg-transparent active:bg-blue-50"
            onPress={() => Alert.alert('Outline Button', 'Button pressed!')}>
            <Text className="text-blue-500 text-center font-semibold text-base">
              Outline Button
            </Text>
          </TouchableOpacity>

          <View className="bg-gray-200 px-6 py-3 rounded-lg">
            <Text className="text-gray-600 text-center font-semibold">
              Disabled Button
            </Text>
          </View>
        </View>

        {/* Borders & Rounded Corners */}
        <View className="px-4 py-4">
          <Text className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            📦 Borders & Rounded Corners
          </Text>

          <View className="flex-row flex-wrap gap-3 mb-4">
            <View className="border-2 border-gray-300 p-4 rounded">
              <Text className="text-sm">rounded</Text>
            </View>
            <View className="border-2 border-gray-300 p-4 rounded-lg">
              <Text className="text-sm">rounded-lg</Text>
            </View>
            <View className="border-2 border-gray-300 p-4 rounded-xl">
              <Text className="text-sm">rounded-xl</Text>
            </View>
            <View className="border-2 border-gray-300 p-4 rounded-full w-20 h-20 items-center justify-center">
              <Text className="text-xs">full</Text>
            </View>
          </View>

          {/* Border Colors */}
          <View className="flex-row flex-wrap gap-3">
            <View className="border-4 border-red-500 p-4 rounded-lg bg-white">
              <Text className="text-sm text-center">Red Border</Text>
            </View>
            <View className="border-4 border-blue-500 p-4 rounded-lg bg-white">
              <Text className="text-sm text-center">Blue Border</Text>
            </View>
            <View className="border-4 border-green-500 p-4 rounded-lg bg-white">
              <Text className="text-sm text-center">Green Border</Text>
            </View>
          </View>
        </View>

        {/* Shadows */}
        <View className="px-4 py-4 bg-gray-50">
          <Text className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            🌑 Shadows
          </Text>

          <View className="flex-row flex-wrap gap-4">
            <View className="bg-white p-4 rounded-lg shadow-sm w-[45%]">
              <Text className="text-sm text-center">shadow-sm</Text>
            </View>
            <View className="bg-white p-4 rounded-lg shadow w-[45%]">
              <Text className="text-sm text-center">shadow</Text>
            </View>
            <View className="bg-white p-4 rounded-lg shadow-md w-[45%]">
              <Text className="text-sm text-center">shadow-md</Text>
            </View>
            <View className="bg-white p-4 rounded-lg shadow-lg w-[45%]">
              <Text className="text-sm text-center">shadow-lg</Text>
            </View>
          </View>
        </View>

        {/* Input Fields */}
        <View className="px-4 py-4">
          <Text className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            ⌨️ Input Fields
          </Text>

          <TextInput
            className="border-2 border-gray-300 px-4 py-3 rounded-lg mb-3 bg-white"
            placeholder="Type something here..."
            placeholderTextColor="#9CA3AF"
            style={{ color: colors.textPrimary }}
          />

          <TextInput
            className="border-2 border-blue-500 px-4 py-3 rounded-lg mb-3 bg-white"
            placeholder="Focused input (blue border)"
            placeholderTextColor="#9CA3AF"
            style={{ color: colors.textPrimary }}
          />

          <TextInput
            className="border-2 border-red-500 px-4 py-3 rounded-lg bg-white"
            placeholder="Error state (red border)"
            placeholderTextColor="#9CA3AF"
            style={{ color: colors.textPrimary }}
          />
        </View>

        {/* Card Components */}
        <View className="px-4 py-4 bg-gray-50">
          <Text className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            🃏 Card Components
          </Text>

          <View className="bg-white p-4 rounded-xl shadow-lg mb-4">
            <Text className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>
              Card Title
            </Text>
            <Text className="mb-3" style={{ color: colors.textSecondary }}>
              This is a card component with rounded corners and shadow.
            </Text>
            <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg w-24">
              <Text className="text-white text-center font-semibold">Action</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-purple-500 p-4 rounded-xl mb-4">
            <Text className="text-xl font-bold text-white mb-2">
              Colored Card
            </Text>
            <Text className="text-purple-100">
              A card with colored background.
            </Text>
          </View>
        </View>

        {/* Position & Alignment */}
        <View className="px-4 py-4">
          <Text className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            📍 Position & Alignment
          </Text>

          <View className="bg-gray-200 h-32 rounded-lg mb-4 p-2">
            <View className="bg-blue-500 w-16 h-16 rounded-lg items-center justify-center self-center">
              <Text className="text-white text-xs">Center</Text>
            </View>
          </View>

          <View className="bg-gray-200 h-32 rounded-lg mb-4 p-2 justify-end">
            <View className="bg-green-500 w-16 h-16 rounded-lg items-center justify-center">
              <Text className="text-white text-xs">Bottom</Text>
            </View>
          </View>

          <View className="bg-gray-200 h-32 rounded-lg p-2 flex-row justify-between items-center">
            <View className="bg-red-500 w-16 h-16 rounded-lg items-center justify-center">
              <Text className="text-white text-xs">Left</Text>
            </View>
            <View className="bg-purple-500 w-16 h-16 rounded-lg items-center justify-center">
              <Text className="text-white text-xs">Right</Text>
            </View>
          </View>
        </View>

        {/* Responsive Utilities */}
        <View className="px-4 py-4 bg-gray-50">
          <Text className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            📱 Responsive Utilities
          </Text>

          <View className="bg-white p-4 rounded-lg shadow-md">
            <Text className="text-base mb-2" style={{ color: colors.textSecondary }}>
              • w-full: Full width
            </Text>
            <Text className="text-base mb-2" style={{ color: colors.textSecondary }}>
              • w-[48%]: Custom width (48%)
            </Text>
            <Text className="text-base mb-2" style={{ color: colors.textSecondary }}>
              • h-20: Fixed height
            </Text>
            <Text className="text-base mb-2" style={{ color: colors.textSecondary }}>
              • flex-1: Flex grow
            </Text>
            <Text className="text-base" style={{ color: colors.textSecondary }}>
              • gap-2: Gap between items
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

