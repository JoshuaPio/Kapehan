import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useCart } from './CartContext';
import { TextInput } from 'react-native';
import { CheckBox } from 'react-native';

const EXCHANGE_RATE = 50; // 1 USD = 50 PHP

const CheckoutScreen = ({ totalPrice, navigation }) => { // Pass navigation as a prop
  const { cartItems } = useCart();
  const [voucherCode, setVoucherCode] = useState('');
  const [applyVoucher, setApplyVoucher] = useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);

  const handleApplyVoucher = () => {
    // Logic to apply voucher
  };

  const handlePaymentOption = (option) => {
    setSelectedPaymentOption(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cartHeader}>
        <Text style={styles.cartHeaderText}>Checkout</Text>
      </View>
      <Text style={styles.paymentText}>PAYMENT</Text>
      <View style={styles.paymentOptionsContainer}>
        <TouchableOpacity
          style={[styles.paymentOptionButton, selectedPaymentOption === 'Cash on Delivery' && styles.selectedPaymentOption]}
          onPress={() => handlePaymentOption('Cash on Delivery')}>
          <Image source={require('./assets/cod.png')} style={styles.paymentOptionLogo} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentOptionButton, selectedPaymentOption === 'GCash' && styles.selectedPaymentOption]}
          onPress={() => handlePaymentOption('GCash')}>
          <Image source={require('./assets/gcash.png')} style={styles.paymentOptionLogo} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentOptionButton, selectedPaymentOption === 'PayMaya' && styles.selectedPaymentOption]}
          onPress={() => handlePaymentOption('PayMaya')}>
          <Image source={require('./assets/paymaya.png')} style={styles.paymentOptionLogo} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.checkoutContainer}>
        {/* Order Items */}
        <View style={styles.orderItemsContainer}>
        <Text style={styles.ordersText}>Order Items</Text>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.orderItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₱{(item.price * EXCHANGE_RATE * item.quantity).toFixed(2)}</Text>
            </View>
          ))}
        </View>

        {/* Voucher Section */}
        <View style={styles.voucherContainer}>
        <CheckBox
            value={applyVoucher}
            onValueChange={(value) => setApplyVoucher(value)}
          />
          <Text style={styles.voucherText}>Voucher Applied</Text>
        </View>
      </ScrollView>

      {/* Total Price and Proceed to Payment Button */}
      <View style={styles.footer}>
        <Text style={styles.totalPrice}>Total: ₱{totalPrice.toFixed(2)}</Text>
        <TouchableOpacity style={styles.paymentButton} onPress={() => navigation.navigate("Success")}>
          <Text style={styles.paymentButtonText}>PAY NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#967259',
  },
  cartHeader: {
    backgroundColor: '#967259',
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
  paymentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
  paymentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
  },
  paymentOptionButton: {
    backgroundColor: '#ECE0D1',
    padding: 10,
    borderRadius: 20,
  },
  selectedPaymentOption: {
    backgroundColor: '#38220F',
  },
  paymentOptionLogo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  checkoutContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
    ordersText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#38220F',
    marginLeft: 18,
    marginBottom: 10,
  },
  orderItemsContainer: {
    marginTop: 20,
    backgroundColor: '#ECE0D1',
    borderRadius: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#38220F',
    marginLeft: 20,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#38220F',
    marginRight: 12,
  },
  voucherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ECE0D1',
    borderRadius: 15,
    marginLeft: 5,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  voucherText: {
    color: '#38220F',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  footer: {
    backgroundColor: '#38220F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  totalPrice: {
    color: '#DBC1AC',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentButton: {
    backgroundColor: '#DBC1AC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  paymentButtonText: {
    color: '#38220F',
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
