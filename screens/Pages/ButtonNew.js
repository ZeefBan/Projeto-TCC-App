import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Entypo } from "@expo/vector-icons";


export default function ButtonNew({ focused, size}){
  return(

    
    <View style={[styles.Button, {backgroundColor: focused ? '#35AAFF' : '#1C1C1C'}]}>
        <Entypo name="flag" color={ focused ? '#FFF': '#ddd'} size={size}/>

        
    </View>
    
  )}


  const styles = StyleSheet.create({
     Button:{
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
     },


  })



