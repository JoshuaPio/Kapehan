import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OrderSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/coffee-cup.png')} style={styles.icon} />
        <Text style={styles.successText}>ORDER SUCCESSFUL!</Text>
        <Text style={styles.thanksText}>Thank you for purchasing</Text>
        <Text style={styles.thanksText}>The Product is On its way!</Text>
        <TouchableOpacity
          style={styles.highlightedButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.highlightedButtonText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('./assets/Jose.png')} style={styles.personImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#967259',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  successText: {
     color: '#4CAF50',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  thanksText: {
    fontSize: 18,
    color: '#white',
    marginBottom: 5,
  },
  highlightedButton: {
    backgroundColor: '#38220F', 
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  highlightedButtonText: {
    color: '#DBC1AC',
    fontSize: 18,
    fontWeight: 'bold',
  },
  personImage: {
    width: width,
    height: height * 0.3,
    resizeMode: 'cover',
  },
});

export default OrderSuccessScreen;