import React from 'react';
import { StyleSheet, ActivityIndicator } from "react-native";

export const Container = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
    },
    ContainerMain: {
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
    header:{
        backgroundColor: "#fff",
        bottom: 15
        
    },
    headerContent:{
      bottom: 55,
      alignItems: 'center',
      
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 75,
      borderWidth: 2,
      borderColor: "#6558f5",
      bottom: 15
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:16,
      color:"#778899",
      fontWeight:'600',
    },
    body:{
      backgroundColor: "#fff",
      height:150,
      width: 325,
      borderRadius: 10,
      borderColor: "#6558f5",
      borderWidth: 3,
      alignItems:'center',
      left: 40,    
      bottom: 50
    },
    item:{
      flexDirection : 'row',
    },
    infoContent:{
      flex: 2,
      alignItems:'flex-start',
      width: 100,
    },
    iconContent:{
      textAlign: "center",
      flex:1,
      alignItems:'flex-start',
      paddingRight:5,
      paddingLeft: 15,   
    },
    infoUm:{
      top: 10,
      textAlign: "left",
      fontSize:16,
      paddingBottom: 10,
      color: "#000",
    },
    infoDois:{
      top: 10,
      width: 200,
      fontSize:16,
      marginLeft: -5,
      color: "#000",
  },
});


