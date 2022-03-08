import React from "react";
import {Container} from './style';
import {Text,View,ActivityIndicator} from 'react-native';
import Onibus from '../../img/Onibus.svg';

export default function Preload ({navigation}) {
    const telaLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Login"}]
        })
    }

return (
    <View style = {Container.Container}>
        <Onibus width="100%" height="180" onPress={() => telaLogin()} />
        <Text style={Container.Texto} >BUZZ</Text>
        <ActivityIndicator size={"large"} color={"#45c"}/>
     </View>
);
}