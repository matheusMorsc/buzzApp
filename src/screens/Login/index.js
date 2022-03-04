import React from "react";
import { Container } from './style';
import { View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import Onibus from '../../img/Onibus.svg';
import { Input, Text } from 'react-native-elements';


export default function Login() {
    return (
        <View style={Container.MainContainer}>

            <View style={Container.Container}>
                <Onibus width="15%" height="40" />
                <Text style={Container.TextoLogo}>BUZZ</Text>
            </View>
            <View style={Container.InputArea}>

                <Text h1 style={Container.Texto}> Bem-Vindo </Text>
        
             
            </View>
        </View>

    );
}