import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity, Animated } from 'react-native';
import { Button, Icon, Input, Image } from 'react-native-elements';
import styles from '../../style/mainStyles';

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