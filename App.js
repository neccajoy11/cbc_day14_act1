import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import RedScreen from './Screens/RedScreen';
import GreenScreen from './Screens/GreenScreen';
import BlueScreen from './Screens/BlueScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="RedScreen" component={RedScreen} options={{ title: 'Red Screen' }} />
        <Stack.Screen name="GreenScreen" component={GreenScreen} options={{ title: 'Green Screen' }} />
        <Stack.Screen name="BlueScreen" component={BlueScreen} options={{ title: 'Blue Screen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
