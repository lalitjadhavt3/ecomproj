import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Button,
  Input,
  Typography,
  ThemeToggle,
} from '../components';
import {useTheme} from '../hooks/useTheme';
import {useAuth} from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import type {AuthStackParamList} from '../navigation/types';
import {wp, hp} from '../utils/responsive';
import {Spacing} from '../theme';

export const SignupScreen: React.FC = () => {
  const {colors} = useTheme();
  const {login} = useAuth();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async () => {
    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      Alert.alert('Missing Fields', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match');
      return;
    }

    try {
      // Mock signup success
      const mockUser = {
        id: '2',
        name: fullName,
        email: email,
        phone: phoneNumber,
      };

      const mockToken = 'sample_jwt_token_67890';

      // Auto-login after signup
      await login(mockToken, mockUser);
      
      console.log('Signup successful!');
    } catch (error) {
      console.error('Signup failed:', error);
      Alert.alert('Signup Failed', 'Please try again.');
    }
  };

  const handleLogin = () => {
    // Navigate to login screen
    navigation.navigate('Login');
  };

  return (
    <ScrollView 
      style={[styles.container, {backgroundColor: colors.background}]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      
      {/* Theme Toggle */}
      <View style={styles.themeToggleContainer}>
        <ThemeToggle />
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={[styles.logoCircle, {backgroundColor: colors.primary}]}>
          <Typography variant="h1" color={colors.background}>
            R
          </Typography>
        </View>
      </View>

      {/* Welcome Text */}
      <View style={styles.welcomeContainer}>
        <Typography variant="h1" color={colors.textPrimary} style={styles.welcomeTitle}>
          Create New Account
        </Typography>
        <Typography variant="body" color={colors.textSecondary} style={styles.welcomeSubtitle}>
          Set up your username and password.{'\n'}You can always change it later.
        </Typography>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Input
          placeholder="Smith Mate"
          value={fullName}
          onChangeText={setFullName}
          style={[styles.input, {borderColor: colors.primary}]}
        />

        <Input
          placeholder="smithmate@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={[styles.input, {borderColor: colors.primary}]}
        />

        <Input
          placeholder="(205) 555-0100"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          style={[styles.input, {borderColor: colors.primary}]}
        />

        <View style={styles.passwordContainer}>
          <Input
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={[styles.input, {borderColor: colors.primary}]}
          />
          <TouchableOpacity 
            style={styles.passwordToggle}
            onPress={() => setShowPassword(!showPassword)}>
            <Typography variant="body" color={colors.textSecondary}>
              {showPassword ? '🙈' : '👁️'}
            </Typography>
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <Input
            placeholder="••••••••"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            style={[styles.input, {borderColor: colors.primary}]}
          />
          <TouchableOpacity 
            style={styles.passwordToggle}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Typography variant="body" color={colors.textSecondary}>
              {showConfirmPassword ? '🙈' : '👁️'}
            </Typography>
          </TouchableOpacity>
        </View>
      </View>

      {/* Signup Button */}
      <View style={styles.signupButtonContainer}>
        <Button
          title="Signup"
          onPress={handleSignup}
          variant="primary"
          style={styles.signupButton}
          textStyle={styles.signupButtonText}
        />
      </View>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Typography variant="body" color={colors.textSecondary}>
          Already have an account?{' '}
        </Typography>
        <TouchableOpacity onPress={handleLogin}>
          <Typography variant="body" color={colors.primary} style={styles.loginLink}>
            Log in
          </Typography>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: wp(6),
    paddingVertical: hp(3),
  },
  themeToggleContainer: {
    alignItems: 'flex-end',
    marginBottom: hp(2),
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: hp(3),
  },
  logoCircle: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: hp(4),
  },
  welcomeTitle: {
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    textAlign: 'center',
    lineHeight: 24,
  },
  formContainer: {
    marginBottom: hp(3),
  },
  input: {
    marginBottom: Spacing.lg,
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: hp(2),
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordToggle: {
    position: 'absolute',
    right: wp(4),
    top: hp(2.5),
    padding: Spacing.xs,
  },
  signupButtonContainer: {
    marginBottom: hp(4),
  },
  signupButton: {
    paddingVertical: hp(2),
    borderRadius: 12,
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  loginLink: {
    fontWeight: '600',
  },
});