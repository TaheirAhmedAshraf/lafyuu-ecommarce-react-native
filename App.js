import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './redux/store';
// Screens
import BottomTabNavigator from './navigators/BottomTabNavigator';
import ProductScreen from './pages/ProductScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const globalScreenOptions = {headerShown: false};

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BottomTabNavigator"
          screenOptions={globalScreenOptions}>
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
          <Stack.Screen
            name="ProductScreen"
            component={ProductScreen}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
