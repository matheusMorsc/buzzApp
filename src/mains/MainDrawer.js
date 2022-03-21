import React from 'react'
import { View, Text} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { TouchableRipple, Switch, Drawer } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Cartao from '../screens/Cartao';
import Perfil from '../screens/Perfil';
import Scanner from '../screens/Scanner';
import Usuarios from '../screens/Usuarios';


const Draweer = createDrawerNavigator();

function DrawerRoutes() {
  return (      
      <Draweer.Navigator 
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
      
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Perfil" >

        <Draweer.Screen name='Perfil ' component={Perfil} />
        <Draweer.Screen name='Cartão Virtual'  component={Cartao} /> 
        <Draweer.Screen name='Scanner' component={Scanner} />
        <Draweer.Screen name='Usuários' component={Usuarios} />
        
       
      </Draweer.Navigator>
  );
}
export default DrawerRoutes;

function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}  >

      <Drawer.Section style={{flex: 1, marginTop: 15, }}>
        <DrawerItemList {...props} />
          <DrawerItem
            label="Ônibus"
            onPress={() => {}}
          />
          <DrawerItem
            label="Alterar dados"
            onPress={() => {}}
          />
      </Drawer.Section>

      <Drawer.Section title='Preferences' style={{borderTopColor: '#f4f4f4', borderTopWidth: 1}}>
          <TouchableRipple>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, paddingHorizontal: 16}}>
              <Text style={{marginTop: 15,}}>Dark Mode</Text>
              <Switch />
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Section style={{marginBottom: 15, borderTopColor: '#f4f4f4', borderTopWidth: 1}}>   
        <DrawerItem        
            label="Sair"
            icon={() => (
              <Icon name="exit-to-app" size={35} color='#6558f5'/>
            )}
            onPress={() => {
            props.navigation.navigate('Login');
            }}
          />
      </Drawer.Section>  
     </View>
  );
}

