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

