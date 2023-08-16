import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from "./pages/Dashboard";
import Hospitals from "./pages/Hospitals";
import HospitalDetails from './pages/HospitalDetails';
import Profile from './pages/Profile';

import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Iransans: require('./assets/fonts/Iransans.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerTitle: "داشبورد" }} />
        <Stack.Screen name="Hospitals" component={Hospitals} />
        <Stack.Screen name="HospitalDetails" component={HospitalDetails} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});