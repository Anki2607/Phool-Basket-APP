import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductListScreen from './screens/ProductListScreen';
import CartScreen from './screens/CartScreen';
import SearchScreen from './screens/SearchScreen';

import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_right'
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
            <Stack.Screen name="ProductList" component={ProductListScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
      </CartProvider>
    </FavoritesProvider>
  );
}
