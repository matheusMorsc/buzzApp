import React from "react";
import { Container } from './style';
import { View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text,  Keyboard, Pressable} from "react-native";
import Onibus from '../../img/Onibus.svg';
import { useNavigation  } from "@react-navigation/native";
/*import { Input, Text } from 'react-native-elements';*/


export default function Cadastro({navigation}) {


    const clicouLogin = () => {
        navigation.navigate("Login")
    }

    const clicou = () => {
        /*Alert.alert("Cadastro", "Foi realizado com sucesso!");*/
    }

    return (
        <View style={Container.MainContainer}>
            <Pressable onPress={Keyboard.dismiss}>
           
            <View style={Container.InputArea}>
                
                <View style={Container.InputLogin}>
                    <Text style={Container.Texto}>   Usuário</Text>
                    <TextInput style={Container.input} />

                    <Text style={Container.Texto}>Email</Text>
                    <TextInput style={Container.input} />

                    <Text style={Container.Texto}> Senha</Text>
                    <TextInput style={Container.input} />

                    <TouchableOpacity style={Container.botao} onPress={ () => {clicou()}}>
                        <Text style={Container.botaoText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Container.textoCadastro} onPress={() => {clicouLogin()}}>
                        <Text style={{color: "#6558f5"}}>Já possui uma conta?</Text>
                        <Text style={{fontWeight: "bold", color: "#6558f5"}}> Faça login</Text>
                    </TouchableOpacity>                
                </View>           
            </View>
            <View style={Container.Container}>
                <Onibus width="15%" height="45" />
                <Text style={Container.TextoLogo}>BUZZ</Text>
            </View>
            </Pressable>
        </View>
    );
}