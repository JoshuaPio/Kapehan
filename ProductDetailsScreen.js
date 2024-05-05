import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, PanResponder, Animated } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCart } from './CartContext';

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    navigation.navigate('Cart');
  };

  const [panResponder, setPanResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        // Update the position of the image based on the gesture
        imagePosition.setValue({ x: gesture.dx, y: gesture.dy });
      },
    })
  );



  const imagePosition = useRef(new Animated.ValueXY()).current;

  // Define local asset paths for product images
  const productImages = {
    'Green Tea': require('./assets/GreenTea.png'),
    'Black Tea': require('./assets/BlackTea.png'),
    'Herbal Tea': require('./assets/HerbalTea.png'),
    'Chamomile Tea': require('./assets/Chamomile.png'),
    'Oolong Tea': require('./assets/oolong.png'),
    'Espresso': require('./assets/Espresso.png'),
    'Latte': require('./assets/Latte.png'),
    'Caramel Macchiato': require('./assets/CaramelMac.png'),
    'Cappuccino': require('./assets/Cappuccino.png'),
    'Mocha': require('./assets/Mocha.png'),
    'Chocolate Chip Cookie': require('./assets/ChocoChip.png'),
    'Oatmeal Raisin Cookie': require('./assets/OatmealCookie.png'),
    'Sugar Cookie': require('./assets/SugarCookie.png'),
    'Peanut Butter Cookie': require('./assets/PeanutButter.png'),
    'Snickerdoodle Cookie': require('./assets/SnickerdoodleCookie.png'),
    // Add more product images here for other products
  };




  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <View style={styles.upperBackground} />
        <Image source={require('./assets/kapepelogo.png')} style={styles.logoLeft} />
        <Image source={require('./assets/kapepelogo.png')} style={styles.logoRight} />
        <View style={styles.imageContainer}>
          <Image
            {...panResponder.panHandlers}
            source={productImages[product.name]}
            style={[
              styles.productImage,
              { transform: [{ translateX: imagePosition.x }, { translateY: imagePosition.y }] },
            ]}
          />
        </View>
      </View>
      <View style={styles.lowerHalf}>
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>Price: ₱{convertToPeso(product.price)}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};





// Function to convert currency to peso
const convertToPeso = (price) => {
  // You can implement your own conversion logic here
  return (price * 50).toFixed(2); // For demonstration, assuming 1 USD = 50 PHP
};








const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECE0D1', // Beige background color
  },
  upperHalf: {
    flex: 2, // Fill half of the screen
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    borderBottomLeftRadius: 50, // Rounded corner for the top left corner
    borderBottomRightRadius: 50, // Rounded corner for the top right corner
    overflow: 'hidden', // Hide overflow to respect border radius
  },
  upperBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#967259', // Sienna color
  },
  logoLeft: {
    position: 'absolute',
    top: '20%',
    left: -200,
    width: 400,
    height: 400,
    transform: [{ translateY: -50 }], // Center the logo vertically
  },
  logoRight: {
    position: 'absolute',
    top: '20%',
    right: -200,
    width: 400,
    height: 400,
    transform: [{ translateY: -50 }], // Center the logo vertically
  },
  lowerHalf: {
    flex: 1, // Fill half of the screen
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items at the top
    width: '100%',
    paddingHorizontal: 20,
  },
  imageContainer: {
    position: 'relative', // Position the container
    width: '100%',
    height: '100%', // Fill the container
    alignItems: 'center',
    justifyContent: 'center', // Center the image horizontally and vertically
  },
  productImage: {
    width: 400, // Adjust width and height as needed
    height: 400,
    borderRadius: 10, // Rounded corner for the image
  },
  productDetails: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#38220F', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;
