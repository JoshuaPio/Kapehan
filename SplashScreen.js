import React, { useEffect } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

// Import local images
import kapapebg from './assets/blurbeans.png';
import kapapelogo from './assets/kapepelogo.png';

function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('GettingStarted');
    }, 2000); // Navigate to GettingStarted after 2 seconds
  }, []);

  return (
    <ImageBackground
      source={kapapebg} // Use local background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={kapapelogo} // Use local logo image
          style={styles.logo}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default SplashScreen;
