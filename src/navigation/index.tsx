import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MarketScreen, CartScreen, CheckoutScreen}  from '../screens';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer
      onStateChange={(state) => console.log('New state is', state)}
      >
        <Stack.Navigator
          initialRouteName="Market"
        >
          <Stack.Screen
            name="Market"
            component={MarketScreen}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
          />
          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
