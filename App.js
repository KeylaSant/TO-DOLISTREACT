import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import Login from './Views/login';
import ForgotPassword from './Views/forgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdatePassword from './Views/updatePassword';
import SignUp from './Views/signUp';
import TodoList from './Views/todoList';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            headerTitle: "Todo list"
          }}

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
          options={{ headerShown: true }}

        />

        <Stack.Screen
          name="todoList"
          component={TodoList}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#2e393e'
            },
            headerTintColor:'white',
            statusBarColor:'white'
          }}

        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export const globalStyles = StyleSheet.create({
  campos:{
    flex:1,
    height: 50,
    borderWidth:2,
    borderColor:'#2e393e',
    marginBottom:20,
    borderRadius:10,
    paddingHorizontal:20,
    fontWeight:'800',
    backgroundColor:'white'
  },
})

