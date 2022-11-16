import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, Animated } from 'react-native';
import { Button, Icon, Input, Image, Text } from 'react-native-elements';
import { DarkTheme } from 'react-native-paper';


export default function Configs() {
    
      const [offSet] = useState(new Animated.ValueXY({x: 0, y: 95}));
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {

        Animated.parallel([
            Animated.spring(offSet.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20,
            }),
         Animated.timing(opacity,{
          toValue: 1,
          duration: 300,



         })

        ]).start();

        
},[]);

    


    return(
        
        <KeyboardAvoidingView style={styles.background}>

         <View style={styles.container}>  
             <Text style={styles.textStyle}> Configuraçoes</Text>

         </View>

           <Animated.View style={[styles.container, {
             opacity: opacity,  
             transform: [
                {translateY: offSet.y }
             ]
            
           }]}>

         <TouchableOpacity style={styles.buttonStyle}
           onPress={() =>DarkTheme()}>

           <Text style={styles.textStyle}> Modo Escuro </Text>
           

           </TouchableOpacity>
           
           


       </Animated.View>
       
       </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({

  background:{
   flex:1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#191919',

  },


   containerLogo: {
       flex: 1,
       justifyContent: 'center',
       
   },

   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       width: '90%',
       paddingBottom: 50,
   },

   inputStyle: {
       backgroundColor: '#FFF',
       color: '#222',
       width: '90%',
       marginBottom:15,
       fontSize: 17,
       borderRadius: 7,
       padding: 10,
   },
   buttonStyle: {

       backgroundColor: '#35AAFF',
       width: '90%',
       height: 45,
       alignItems: 'center',
       justifyContent: 'center',
   },

   textStyle: {
     color: '#FFF',
     fontSize: 18,

   },

   registerStyle: {
    marginTop: 10,
    

   },
    
   registerText: {
    color: '#FFF',

   },
   

   imageStyle: {
       justifyContent: 'center',
       alignItems: 'center',
       width: '150px',
       height: '160px',
       borderRadius: 20,
       
    
      },


})