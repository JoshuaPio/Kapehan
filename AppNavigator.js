import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from './SplashScreen';
import GettingStartedScreen from './GettingStartedScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import CartAndSearchScreen from './CartAndSearchScreen';
import TeaScreen from './TeaScreen';
import CoffeeScreen from './CoffeeScreen';
import CookieScreen from './CookieScreen';
import CartScreen from './CartScreen';
import ProductDetailsScreen from './ProductDetailsScreen';
import CheckoutScreen from './CheckoutScreen';
import OrderSuccessScreen from './OrderSuccessScreen';
import OrderFailedScreen from './OrderFailedScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="GettingStarted" component={GettingStartedScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={CartAndSearchScreen} />
      <Stack.Screen name="Tea" component={TeaScreen} />
      <Stack.Screen name="Coffee" component={CoffeeScreen} />
      <Stack.Screen name="Cookie" component={CookieScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Success" component={OrderSuccessScreen} />
      <Stack.Screen name="Failed" component={OrderFailedScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
