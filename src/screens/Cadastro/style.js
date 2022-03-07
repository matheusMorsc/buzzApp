import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Directions } from "react-native-gesture-handler";

export const Container = StyleSheet.create(

    {
        Container: {
            marginTop: 50,
            height: 80,
            width: "100%",
            /*backgroundColor: "#b1b1b1",*/
            /*borderBottomWidth: 2,*/
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            
        },
        TextoLogo: {
            color: "#45c",
            fontSize: 45,
            flexDirection: "row",
        },
        TextoTitulo:{
            fontSize: 33,
            marginTop: 80,
            marginBottom: 40,
            color:"#45c",
        },
        MainContainer: {
            flex: 1,
            /*backgroundColor: "#ccc",*/
            backgroundColor: "#fff",
            justifyContent: "center"
        },
        InputArea: {
            /*flex: 1,*/
            /*backgroundColor: "#fff",*/
            margin: 25,
            alignItems: "center",
        },
        input:{
            padding: 10, 
            marginTop:10,
            width: 275,
            height: 45,
            borderColor: '#dfe6ed',
            fontSize: 16,
            fontWeight: 'bold',
            borderRadius: 4,
            borderWidth: 2,
            margin: "-4%"
          },
        InputLogin:{
            alignItems: "center",
        },
        Texto:{
            color:"#45c",
            fontSize:25,
            marginRight: 200,
            marginTop: 15,
            top: 10,
        },
        botaoText:{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#fff'
        },
        botao:{
            width: 100,
            height: 42,
            backgroundColor: '#6558f5',
            marginTop: 33,
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center'
        },
        textoCadastro:{
            justifyContent:"center",
            marginTop: 25,
            fontSize: 17,
            flexDirection: "row",     
        }
    }
)
