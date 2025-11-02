import {NavigatorScreenParams} from '@react-navigation/native';

// Auth Stack Navigator
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

// Main Tab Navigator
export type MainTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  CategoriesTab: NavigatorScreenParams<CategoriesStackParamList>;
  SearchTab: NavigatorScreenParams<SearchStackParamList>;
  CartTab: NavigatorScreenParams<CartStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

// Home Stack Navigator
export type HomeStackParamList = {
  Home: undefined;
  ProductDetails: {productId: string};
  Demo: undefined;
};

// Categories Stack Navigator
export type CategoriesStackParamList = {
  Categories: undefined;
  CategoryProducts: {categoryId: string; categoryName: string};
  ProductDetails: {productId: string};
};

// Search Stack Navigator
export type SearchStackParamList = {
  Search: undefined;
  SearchResults: {query: string};
  ProductDetails: {productId: string};
};

// Cart Stack Navigator
export type CartStackParamList = {
  Cart: undefined;
  Checkout: undefined;
  OrderConfirmation: {orderId: string};
};

// Profile Stack Navigator
export type ProfileStackParamList = {
  Profile: undefined;
  Orders: undefined;
  OrderDetails: {orderId: string};
  Settings: undefined;
  EditProfile: undefined;
  DeliveryAddress: undefined;
  PaymentMethods: undefined;
};

// Root Stack Navigator (combines Auth and Main)
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  // Modal screens that can be accessed from anywhere
  ProductDetails: {productId: string};
  Checkout: undefined;
};