import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import Login from './Views/login';
import ForgotPassword from './Views/forgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdatePassword from './Views/updatePassword';
import SignUp from './Views/signUp';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}

        />

        <Stack.Screen
          name="forgotPassword"
          component={ForgotPassword}
          options={{ headerShown: true }}

        />

        <Stack.Screen
          name="updatePassword"
          component={UpdatePassword}
          options={{ headerShown: true }}

        />

        <Stack.Screen
          name="signUp"
          component={SignUp}
          options={{ headerShown:true }}

        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


