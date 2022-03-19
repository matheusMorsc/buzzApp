import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Scanner from '../screens/Scanner';

import DrawerRoutes from './MainDrawer';

const Stack = createStackNavigator();

function StackRoutes() {
  return (
    
    <Stack.Navigator
      initialRouteName='Preload'
      screenOptions={{
        headerShown: false
      }}
    >
    
      <Stack.Screen name="Preload" component={Preload}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="Scanner" component={Scanner}/>
      <Stack.Screen name="Cartao" component={DrawerRoutes}/>
      <Stack.Screen name="Perfil" component={DrawerRoutes}/>
      
    </Stack.Navigator>
      
  );
}

export default StackRoutes;
