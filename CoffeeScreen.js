// CoffeeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CoffeeScreen = () => {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Espresso', description: 'Strong espresso shot for coffee lovers', price: 3.49 })}>
        <Text style={styles.productName}>Espresso</Text>
        <Text style={styles.productDescription}>Strong espresso shot for coffee lovers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Latte', description: 'Smooth and creamy latte with espresso and steamed milk', price: 4.99 })}>
        <Text style={styles.productName}>Latte</Text>
        <Text style={styles.productDescription}>Smooth and creamy latte with espresso and steamed milk</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Caramel Macchiato', description: 'Rich caramel flavor with espresso and milk, topped with foam', price: 5.49 })}>
        <Text style={styles.productName}>Caramel Macchiato</Text>
        <Text style={styles.productDescription}>Rich caramel flavor with espresso and milk, topped with foam</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Cappuccino', description: 'Italian classic with equal parts espresso, steamed milk, and foam', price: 4.99 })}>
        <Text style={styles.productName}>Cappuccino</Text>
        <Text style={styles.productDescription}>Italian classic with equal parts espresso, steamed milk, and foam</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Mocha', description: 'Indulgent blend of espresso, chocolate, and steamed milk', price: 5.49 })}>
        <Text style={styles.productName}>Mocha</Text>
        <Text style={styles.productDescription}>Indulgent blend of espresso, chocolate, and steamed milk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#967259', 
  },
  productContainer: {
    backgroundColor: '#ECE0D1', 
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default CoffeeScreen;
