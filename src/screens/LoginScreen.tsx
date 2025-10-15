import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Button,
  Input,
  Card,
  Typography,
  ThemeToggle,
} from '../components';
import {useTheme} from '../hooks/useTheme';
import {wp, hp} from '../utils/responsive';
import {Spacing} from '../theme';

export const LoginScreen: React.FC = () => {
  const {colors, mode} = useTheme();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login pressed');
  };

  const handleAppleLogin = () => {
    console.log('Apple login pressed');
  };

  const handleGoogleLogin = () => {
    console.log('Google login pressed');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
  };

  const handleRegister = () => {
    console.log('Register pressed');
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
          Welcome Back
        </Typography>
        <Typography variant="body" color={colors.textSecondary} style={styles.welcomeSubtitle}>
          Log in to your account using email{'\n'}or social networks
        </Typography>
      </View>

      {/* Social Login Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity 
          style={[styles.socialButton, {backgroundColor: colors.surface}]}
          onPress={handleAppleLogin}>
          <View style={styles.socialIconContainer}>
            <Typography variant="body" style={styles.appleIcon}>🍎</Typography>
          </View>
          <Typography variant="body" color={colors.textPrimary} style={styles.socialButtonText}>
            Login with Apple
          </Typography>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.socialButton, {backgroundColor: colors.surface}]}
          onPress={handleGoogleLogin}>
          <View style={styles.socialIconContainer}>
            <Typography variant="body" style={styles.googleIcon}>G</Typography>
          </View>
          <Typography variant="body" color={colors.textPrimary} style={styles.socialButtonText}>
            Login with Google
          </Typography>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <Typography variant="caption" color={colors.textSecondary}>
          Or continue with social account
        </Typography>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Input
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          style={styles.input}
        />

        <View style={styles.passwordContainer}>
          <Input
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity 
            style={styles.passwordToggle}
            onPress={() => setShowPassword(!showPassword)}>
            <Typography variant="body" color={colors.textSecondary}>
              {showPassword ? '🙈' : '👁️'}
            </Typography>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.forgotPasswordContainer}
          onPress={handleForgotPassword}>
          <Typography variant="caption" color={colors.primary}>
            Forgot Password ?
          </Typography>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <View style={styles.loginButtonContainer}>
        <Button
          title="Login"
          onPress={handleLogin}
          variant="primary"
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
        />
      </View>

      {/* Register Link */}
      <View style={styles.registerContainer}>
        <Typography variant="body" color={colors.textSecondary}>
          Didn't have an account?{' '}
        </Typography>
        <TouchableOpacity onPress={handleRegister}>
          <Typography variant="body" color={colors.primary} style={styles.registerLink}>
            Register
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
    marginBottom: hp(4),
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
  socialContainer: {
    marginBottom: hp(3),
    gap: Spacing.md,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    borderRadius: 12,
    marginBottom: Spacing.sm,
  },
  socialIconContainer: {
    width: wp(8),
    alignItems: 'center',
    marginRight: wp(3),
  },
  appleIcon: {
    fontSize: 20,
  },
  googleIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4285F4',
  },
  socialButtonText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
  },
  dividerContainer: {
    alignItems: 'center',
    marginBottom: hp(3),
  },
  formContainer: {
    marginBottom: hp(3),
  },
  input: {
    marginBottom: Spacing.md,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordToggle: {
    position: 'absolute',
    right: wp(4),
    top: hp(5),
    padding: Spacing.xs,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: Spacing.sm,
  },
  loginButtonContainer: {
    marginBottom: hp(4),
  },
  loginButton: {
    paddingVertical: hp(2),
    borderRadius: 12,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  registerLink: {
    fontWeight: '600',
  },
});