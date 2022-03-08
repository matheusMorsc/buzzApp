import React from 'react';
import { StyleSheet } from "react-native";

export const Container = StyleSheet.create({
      header:{
        height: 350,
        backgroundColor: "#6558f5",
      },
      headerContent:{
        bottom: 55,
        padding: 30,
        alignItems: 'center',
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        top: 20,
        marginBottom:10,
      },
      name:{
        top: 12,
        fontSize:22,
        color:"#ffffff",
        fontWeight:'600',
      },
      userInfo:{
        top: 12,
        fontSize:16,
        color:"#ffffff",
        fontWeight:'600',
      },
      body:{      
        backgroundColor: "#ffffff",
        height:500,
        alignItems:'center',
        justifyContent:"center",    
      },
      item:{
        bottom: 105,
        flexDirection : 'row',
      },
      infoContent:{
        flex:1,
        alignItems:'flex-start',
        paddingLeft:5,
      },
      iconContent:{
        flex:1,
        alignItems:'flex-end',
        paddingRight:5,
      },
      icon:{
        width:30,
        height:30,
        marginTop:20,
      },
      info:{
        fontSize:16,
        marginTop:20,
        color: "#6158f1",
      },
      LogoBuzz: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        bottom: 35
      },
      TextoLogo: {
        color: "#45c",
        fontSize: 45,
        flexDirection: "row",
      },
});




