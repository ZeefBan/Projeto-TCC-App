import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity, Animated } from 'react-native';
import { Button, Icon, Input, Image } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { BottomNavigation } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './telaCadastro';


export default function Login({navigation}){
    const [Email, setEmail] = useState(null)
    const [Senha, setSenha] = useState(null)
    const Acessar = () => {

        navigation.reset({
            index: 0,
            routes: [{name: "Principal"},]
        })

    }
    const Cadastro = () => {
 
        navigation.reset({
            index: 0,
            routes: [{name: "Cadastro"}]
        })

        
    }

    const [offSet] = useState(new Animated.ValueXY({x: 0, y: 95}));
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {

        Animated.parallel([
            Animated.spring(offSet.y, {
                toValue: 0,
                speed: 4,
                bounciness: 30,
            }),
         Animated.timing(opacity,{
          toValue: 1,
          duration: 300,



         })

        ]).start();

        
},[]);

    


    return(
        
        <KeyboardAvoidingView style={styles.background}>

       <View style={styles.containerLogo}>


           <Image style={styles.imageStyle}
             source={require('..//assets/LogoTF.png')}


           />
        </View>

           <Animated.View style={[styles.container, {
             opacity: opacity,  
             transform: [
                {translateY: offSet.y }
             ]
            
           }]}>

        
           <Input style={styles.inputStyle}
            placeholder="Email"
            autoCorrect={false}
            onChangeText= {value => setEmail(value)}
            keyboardType='email-address'
           />

            <Input style={styles.inputStyle}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText= {value => setSenha(value)}
            secureTextEntry={true}
           />

           <TouchableOpacity style={styles.buttonStyle}
           onPress={() =>Acessar()}>

           <Text style={styles.textStyle}> Acessar </Text>
           

           </TouchableOpacity>

            <TouchableOpacity style={styles.registerStyle}
            onPress={() =>Cadastro()}>

             <Text style={styles.registerText} > Criar conta Gratuita </Text>

           
           </TouchableOpacity>
           


       </Animated.View>
       
       </KeyboardAvoidingView>
    );
}

  
    
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