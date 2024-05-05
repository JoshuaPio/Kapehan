import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GettingStartedScreen = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('SignIn'); // Navigating to the sign-in screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/halftop.png')} style={styles.backgroundImage}>
        <Text style={styles.title}>Al mal tiempo, buena cara.</Text>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Jomhuria', // Applying the Jomhuria font
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF', // White text color
    paddingBottom: 10,
  },
  getStartedButton: {
    backgroundColor: '#38220F', // Dark brown button color
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
  },
  getStartedText: {
    color: '#F5F5DC', // White text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GettingStartedScreen;
