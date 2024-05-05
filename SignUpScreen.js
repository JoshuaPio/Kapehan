import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Handle sign-up logic here
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
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={[styles.input, { backgroundColor: '#ECE0D1' }]}
          placeholder="Full Name"
          autoCapitalize="words"
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#ECE0D1' }]}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#ECE0D1' }]}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInLink}>Already have an account?</Text>
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
  signUpButton: {
    backgroundColor: '#38220F',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 40,
  },
  signUpText: {
    color: '#F5F5DC',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signInLink: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SignUpScreen;
