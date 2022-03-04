import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";

export const Container = StyleSheet.create(

    {
        Container: {
            marginTop: "6%",
            height: 80,
            width: "100%",
            backgroundColor: "#b1b1b1",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"


        },
        TextoLogo: {
            color: "#45c",
            fontSize: 40,
            flexDirection: "row"


        },
        Texto:{
            fontSize:40,
            marginTop:"4%",
            color:"#45c",
        },
        MainContainer: {
            flex: 1,
            backgroundColor: "#ccc",
        },
        InputArea: {
            flex: 1,
            backgroundColor: "#cc4",
            margin: 20,
            alignItems: "center",
            

        }
    }
)
