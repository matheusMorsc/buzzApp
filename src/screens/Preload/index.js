import React from "react";
import {Container} from './style';
import {Text,View,ActivityIndicator} from 'react-native';
import Onibus from '../../img/Onibus.svg';


export default function Preload () {
return (
    <View style = {Container.Container}>
        <Onibus width="100%" height="200"/>
        <Text style={Container.Texto}>BUZZ</Text>
        <ActivityIndicator size={"large"} color={"#45c"}/>
     </View>
);
}