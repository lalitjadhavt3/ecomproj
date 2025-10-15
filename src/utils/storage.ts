import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage keys
export const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
  USER_DATA: 'user_data',
  THEME_MODE: 'theme_mode',
  CART_ITEMS: 'cart_items',
  RECENT_SEARCHES: 'recent_searches',
  FAVORITE_PRODUCTS: 'favorite_products',
  DELIVERY_ADDRESS: 'delivery_address',
  ONBOARDING_COMPLETED: 'onboarding_completed',
} as const;

// Generic storage functions
export const setStorageItem = async (key: string, value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error saving to storage:', error);
  }
};

export const getStorageItem = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error reading from storage:', error);
    return null;
  }
};

export const removeStorageItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from storage:', error);
  }
};

export const clearStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};

// Specific storage functions for the app
export const saveUserToken = async (token: string): Promise<void> => {
  await setStorageItem(STORAGE_KEYS.USER_TOKEN, token);
};

export const getUserToken = async (): Promise<string | null> => {
  return await getStorageItem<string>(STORAGE_KEYS.USER_TOKEN);
};

export const removeUserToken = async (): Promise<void> => {
  await removeStorageItem(STORAGE_KEYS.USER_TOKEN);
};

export const saveUserData = async (userData: any): Promise<void> => {
  await setStorageItem(STORAGE_KEYS.USER_DATA, userData);
};

export const getUserData = async (): Promise<any | null> => {
  return await getStorageItem(STORAGE_KEYS.USER_DATA);
};

export const saveThemeMode = async (mode: 'light' | 'dark'): Promise<void> => {
  await setStorageItem(STORAGE_KEYS.THEME_MODE, mode);
};

export const getThemeMode = async (): Promise<'light' | 'dark' | null> => {
  return await getStorageItem<'light' | 'dark'>(STORAGE_KEYS.THEME_MODE);
};

export const saveCartItems = async (items: any[]): Promise<void> => {
  await setStorageItem(STORAGE_KEYS.CART_ITEMS, items);
};

export const getCartItems = async (): Promise<any[] | null> => {
  return await getStorageItem<any[]>(STORAGE_KEYS.CART_ITEMS);
};

export const saveFavoriteProducts = async (products: any[]): Promise<void> => {
  await setStorageItem(STORAGE_KEYS.FAVORITE_PRODUCTS, products);
};

export const getFavoriteProducts = async (): Promise<any[] | null> => {
  return await getStorageItem<any[]>(STORAGE_KEYS.FAVORITE_PRODUCTS);
};

export const saveRecentSearches = async (searches: string[]): Promise<void> => {
  await setStorageItem(STORAGE_KEYS.RECENT_SEARCHES, searches);
};

export const getRecentSearches = async (): Promise<string[] | null> => {
  return await getStorageItem<string[]>(STORAGE_KEYS.RECENT_SEARCHES);
};

export const saveDeliveryAddress = async (address: any): Promise<void> => {
  await setStorageItem(STORAGE_KEYS.DELIVERY_ADDRESS, address);
};

export const getDeliveryAddress = async (): Promise<any | null> => {
  return await getStorageItem(STORAGE_KEYS.DELIVERY_ADDRESS);
};

export const setOnboardingCompleted = async (): Promise<void> => {
  await setStorageItem(STORAGE_KEYS.ONBOARDING_COMPLETED, true);
};

export const isOnboardingCompleted = async (): Promise<boolean> => {
  const completed = await getStorageItem<boolean>(STORAGE_KEYS.ONBOARDING_COMPLETED);
  return completed === true;
};