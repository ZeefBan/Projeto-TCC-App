import React from "react";
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import {Avatar, Title, Caption, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import Notifications from "./TelaNotification";


const Perfil = () => {
    return(



      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15 }}>
           <Avatar.Image
           source ={{
             uri: 'https://avatars.githubusercontent.com/u/100307346?v=4',
             
           }}
           size={80}
           />
           <View style={{marginLeft: 20}}>

             <Title style={[styles.title, {
               marginTop: 15, 
               marginBottom: 5, 
            
            }]}>David Ferreira</Title>
             <Caption style={styles.caption}>Zeef Banido</Caption>

           </View>

          </View>

        </View>
     <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Sao Paulo, Brazil</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+55 97473-0153</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>ZeefPks@Gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>159</Title>
            <Caption>Pontos</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>10</Title>
            <Caption>Chamadas</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
    
          <TouchableOpacity style={styles.menuItem}
          onPress={() => {}}>
            <Icon name="heart-outline" color="#35AAFF" size={25}/>
            <Text style={styles.menuItemText}>Notificaçoes</Text>
          </TouchableOpacity>
  
    
        
         
          <TouchableOpacity style={styles.menuItem}
            onPress={() => {}}>
            <Icon name="account-check-outline" color="#35AAFF" size={25}/>
            <Text style={styles.menuItemText}>Suporte</Text>
          </TouchableOpacity>
        
         
          <TouchableOpacity style={styles.menuItem}
            onPress={() => {}}>
            <Icon name="settings-outline" color="#35AAFF" size={25}/>
            <Text style={styles.menuItemText}>Configuraçoes</Text>
            
          </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};
      



export default Perfil;

const styles = StyleSheet.create({
  container: {
   flex: 1,

  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});