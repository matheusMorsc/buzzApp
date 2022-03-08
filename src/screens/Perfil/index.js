import React from 'react';
import { View,  TouchableOpacity, Text, Image} from 'react-native';
import { Container } from './style';

import Onibus from '../../img/Onibus.svg';
import Icon from 'react-native-vector-icons/Entypo';

import ImagePicker from 'react-native-image-picker';

export default function Perfil({navigation}){

/*function imagePickerCallback(data){
  console.log(data)
}*/

    return(
        <View style={Container.container}>
          <View style={Container.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon style={{marginTop: 45, left: 10, width: 50}} name="menu" size={45} color='#fff'/>
          </TouchableOpacity>

            <View style={Container.headerContent}>
                <Image style={Container.avatar}
                  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzO5Fb637v1B6CAONSt4mGfckCw1gM8tHaJw&usqp=CAU'}}/>
                  <TouchableOpacity 
                  /*onPress={() => ImagePicker.launchImageLibrary({},imagePickerCallback)}*/>
                  <Text style={{fontSize: 12,paddingHorizontal: 3, borderWidth: 1, borderRadius: 5, textAlign:"center", top: 20, marginBottom: 21}}>Selecionar foto</Text></TouchableOpacity>

                <Text style={Container.name}>Matheus Silva </Text>
                <Text style={Container.userInfo}>matheus.morsc@gmail.com</Text>
                <Text style={Container.userInfo}>Pedralva </Text>
            </View>
            {/*<Text style={{color: "#6558f5", textAlign: 'center', bottom: 50, fontSize: 15}}>Centro Universitário de Itajubá - FEPI </Text>*/}
          </View>

          <View style={Container.body}>
            <View style={Container.item}>
              <View style={Container.iconContent}>
              <Text style={Container.info}>Faculdade:</Text>
              </View>
              <View style={Container.infoContent}>
                <Text style={Container.info}>Fepi</Text>
              </View>
            </View>

            <View style={Container.item}>
              <View style={Container.iconContent}>
              <Text style={Container.info}>Curso:</Text>
              </View>
              <View style={Container.infoContent}>
                <Text style={Container.info}>Sistemas de Informação</Text>
              </View>
            </View>

            <View style={Container.item}>
              <View style={Container.iconContent}>
              <Text style={Container.info}>Período:</Text>
              </View>
              <View style={Container.infoContent}>
                <Text style={Container.info}>5º período</Text>
              </View>
            </View>

            <View style={Container.item}>
              <View style={Container.iconContent}>
              <Text style={Container.info}>Dias de uso: </Text>
              </View>
              <View style={Container.infoContent}>
                <Text style={Container.info}>De terça a quinta</Text>
              </View>
            </View>

            <View style={Container.LogoBuzz}>
                <Onibus width="15%" height="45" />
                <Text style={Container.TextoLogo}>BUZZ</Text>
            </View>
          </View>  
      </View>    
    );
}


