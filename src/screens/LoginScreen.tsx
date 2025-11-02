import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  Button,
  Input,
  Typography,
  ThemeToggle,
  LoginInstructions,
  SafeArea,
} from '../components';
import {useTheme} from '../hooks/useTheme';
import {useAuth} from '../context/AuthContext';
import {wp, hp} from '../utils/responsive';
import {Spacing} from '../theme';

export const LoginScreen: React.FC = () => {
  const {colors} = useTheme();
  const {login} = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // Signup form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async () => {
    // Sample credentials for testing
    const sampleCredentials = {
      phone: '1234567890',
      password: 'password123'
    };

    if (phoneNumber === sampleCredentials.phone && password === sampleCredentials.password) {
      try {
        // Mock user data
        const mockUser = {
          id: '1',
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: phoneNumber,
        };

        // Mock token
        const mockToken = 'sample_jwt_token_12345';

        // Use auth context to login
        await login(mockToken, mockUser);
        
        console.log('Login successful!');
      } catch (error) {
        console.error('Login failed:', error);
        Alert.alert('Login Failed', 'Please try again.');
      }
    } else {
      Alert.alert('Invalid credentials!', 'Use:\nPhone: 1234567890\nPassword: password123');
    }
  };

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

  const handleAppleLogin = () => {
    Alert.alert('Apple Login', 'Apple login would be implemented here');
  };

  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Google login would be implemented here');
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Password reset would be implemented here');
  };

  if (showSignup) {
    return (
      <SafeArea style={{backgroundColor: colors.background}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoid}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
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
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
            style={[styles.input, {borderColor: colors.primary}]}
          />

          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={[styles.input, {borderColor: colors.primary}]}
          />

          <Input
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            style={[styles.input, {borderColor: colors.primary}]}
          />

          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={[styles.input, {borderColor: colors.primary}]}
          />

          <Input
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}
            style={[styles.input, {borderColor: colors.primary}]}
          />
        </View>

        {/* Signup Button */}
        <View style={styles.loginButtonContainer}>
          <Button
            title="Signup"
            onPress={handleSignup}
            variant="primary"
            style={styles.loginButton}
            textStyle={styles.loginButtonText}
          />
        </View>

        {/* Login Link */}
        <View style={styles.registerContainer}>
          <Typography variant="body" color={colors.textSecondary}>
            Already have an account?{' '}
          </Typography>
          <TouchableOpacity onPress={() => setShowSignup(false)}>
            <Typography variant="body" color={colors.primary} style={styles.registerLink}>
              Log in
            </Typography>
          </TouchableOpacity>
        </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeArea>
    );
  }

  return (
    <SafeArea style={{backgroundColor: colors.background}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
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
        
        {/* Login Instructions */}
        <LoginInstructions />
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
        <TouchableOpacity onPress={() => setShowSignup(true)}>
          <Typography variant="body" color={colors.primary} style={styles.registerLink}>
            Register
          </Typography>
          </TouchableOpacity>
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