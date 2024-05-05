import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Handle sign-in logic here
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password screen
    // Example:
    // navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        {/* Image Background */}
        <ImageBackground source={require('./assets/halftop.png')} style={styles.imageBackground}>
        </ImageBackground>
        {/* Thick white line */}
        <View style={styles.separator} />
      </View>
      {/* Input Fields */}
      <View style={styles.bottomHalf}>
        {/* Title */}
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#ECE0D1' }]}
          placeholder="Username or Email"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#ECE0D1' }]}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.forgotPassword}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#967259', // Beige
  },
  topHalf: {
    flex: 0.5,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end', // Align content to the bottom
  },
  separator: {
    height: 6,
    backgroundColor: '#FFFFFF', // White
  },
  bottomHalf: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 5,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Jomhuria', // Applying the Jomhuria font
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F5F5DC',
    marginBottom: 70, // Adjust margin to move the text lower
  },
  input: {
    height: 40,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  signInButton: {
    fontFamily: 'Jomhuria',
    backgroundColor: '#38220F',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 70,
  },
  signInText: {
    color: '#F5F5DC',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SignInScreen;
