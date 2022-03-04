import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../screens/Preload/index';
import Login from '../screens/Login/index';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Preload" component={Login} options={{
        headerShown: false
      }} />
      
    </Stack.Navigator>
  );
}