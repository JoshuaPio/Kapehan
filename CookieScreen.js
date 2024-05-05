// CookieScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CookieScreen = () => {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Chocolate Chip Cookie', description: 'Delicious chocolate chip cookie with gooey chocolate chunks', price: 1.99 })}>
        <Text style={styles.productName}>Chocolate Chip Cookie</Text>
        <Text style={styles.productDescription}>Delicious chocolate chip cookie with gooey chocolate chunks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Oatmeal Raisin Cookie', description: 'Classic oatmeal cookie with sweet raisins', price: 2.49 })}>
        <Text style={styles.productName}>Oatmeal Raisin Cookie</Text>
        <Text style={styles.productDescription}>Classic oatmeal cookie with sweet raisins</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Sugar Cookie', description: 'Soft and buttery sugar cookie', price: 1.79 })}>
        <Text style={styles.productName}>Sugar Cookie</Text>
        <Text style={styles.productDescription}>Soft and buttery sugar cookie</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Peanut Butter Cookie', description: 'Rich and nutty peanut butter cookie', price: 2.29 })}>
        <Text style={styles.productName}>Peanut Butter Cookie</Text>
        <Text style={styles.productDescription}>Rich and nutty peanut butter cookie</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Snickerdoodle Cookie', description: 'Cinnamon-sugar coated snickerdoodle cookie', price: 2.19 })}>
        <Text style={styles.productName}>Snickerdoodle Cookie</Text>
        <Text style={styles.productDescription}>Cinnamon-sugar coated snickerdoodle cookie</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#967259', // Sienna
  },
  productContainer: {
    backgroundColor: '#ECE0D1', // Beige
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

export default CookieScreen;
