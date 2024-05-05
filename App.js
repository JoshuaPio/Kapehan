// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
