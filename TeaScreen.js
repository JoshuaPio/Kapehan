// TeaScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TeaScreen = () => {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Green Tea', description: 'Refreshing green tea with antioxidants', price: 2.99 })}>
        <Text style={styles.productName}>Green Tea</Text>
        <Text style={styles.productDescription}>Refreshing green tea with antioxidants</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Black Tea', description: 'Bold black tea with robust flavor', price: 3.49 })}>
        <Text style={styles.productName}>Black Tea</Text>
        <Text style={styles.productDescription}>Bold black tea with robust flavor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Herbal Tea', description: 'Soothing herbal tea blend for relaxation', price: 3.99 })}>
        <Text style={styles.productName}>Herbal Tea</Text>
        <Text style={styles.productDescription}>Soothing herbal tea blend for relaxation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Chamomile Tea', description: 'Gentle chamomile tea for calming effects', price: 4.49 })}>
        <Text style={styles.productName}>Chamomile Tea</Text>
        <Text style={styles.productDescription}>Gentle chamomile tea for calming effects</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productContainer} onPress={() => handleProductPress({ name: 'Oolong Tea', description: 'Traditional oolong tea with rich flavor', price: 3.99 })}>
        <Text style={styles.productName}>Oolong Tea</Text>
        <Text style={styles.productDescription}>Traditional oolong tea with rich flavor</Text>
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

export default TeaScreen;
