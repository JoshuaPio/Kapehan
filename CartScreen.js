import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from './CartContext';
import CheckoutScreen from './CheckoutScreen';

// Fixed exchange rate (1 USD = 50 PHP)
const EXCHANGE_RATE = 50;

const CartScreen = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutVisible, setCheckoutVisible] = useState(false);

  // Calculate total price when cart items change
  useEffect(() => {
    let price = 0;
    cartItems.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalPrice(price * EXCHANGE_RATE); // Convert total price to pesos
  }, [cartItems]);

  const handleRemove = (productName) => {
    removeFromCart(productName);
  };

  const handleIncreaseQuantity = (productName) => {
    const item = cartItems.find((item) => item.name === productName);
    if (item) {
      updateQuantity(productName, item.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (productName) => {
    const item = cartItems.find((item) => item.name === productName);
    if (item && item.quantity > 1) {
      updateQuantity(productName, item.quantity - 1);
    }
  };

  const handleCheckout = () => {
    setCheckoutVisible(true);
  };

  if (checkoutVisible) {
    return <CheckoutScreen totalPrice={totalPrice} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cartHeader}>
        <Text style={styles.cartHeaderText}>My Cart</Text>
      </View>
      <View style={styles.cartItemsContainer}>
        {cartItems.map((item) => (
          <View key={item.name} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>
              Price: ₱{(item.price * EXCHANGE_RATE * item.quantity).toFixed(2)}
            </Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => handleDecreaseQuantity(item.name)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => handleIncreaseQuantity(item.name)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => handleRemove(item.name)}
              style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.footer}>

        <Text style={styles.totalPrice}>
          Total Price: ₱{totalPrice.toFixed(2)}
        </Text>

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBC1AC',
  },
  cartHeader: {
    backgroundColor: '#DBC1AC',
    paddingVertical: 30,
    borderRadius: 20,
    marginBottom: 10,
  },
  cartHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cartItemsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginBottom: 20,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  removeButton: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '480607',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.5)', // Light gray border
    backgroundColor: '#38220F',
  },
  totalPrice: {
    color: '#DBC1AC',
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#DBC1AC',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: '38220F',
    fontWeight: 'bold',
  },
});

export default CartScreen;
