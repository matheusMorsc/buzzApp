import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Button, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from './src/screens/Preload';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Principal from './src/screens/Principal';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
       
      <Drawer.Navigator initialRouteName='Principal'>
        <Drawer.Screen name='Perfil' component={Principal} />
      </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Preload'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Preload" component={Preload}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="Principal" component={DrawerRoutes}/>
       
    </Stack.Navigator>
    </NavigationContainer>   
  );
}

export default App;


/*
import React from "react";
import { StyleSheet,Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import MyStack from "./src/stack/MainStack";


export default function App() {
 return(
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>

 );
}
*/

