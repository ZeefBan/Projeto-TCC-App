import React, { useState, useEffect} from 'react';
import { Alert } from 'react-native';
import { Platform } from 'react-native';
import { Button, CheckBox, Input,TextInput, Image } from 'react-native-elements';
import { StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity, Animated } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { BottomNavigation } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import firebase from '../firebase/firebaseConnection'

export default function Cadastrar({navigation}) {
    const[email,setEmail] = useState("");
    const[cpf,setCPF] = useState("");
    const[nome,setNome] = useState("");
    const[telefone,setTelefone] = useState("");
    const[senha,setSenha]= useState("");


    async function Inserir (){

        const Usuarios = await firebase.database().ref('Usuarios');;
        Usuarios.child(cpf).set({
            Cpf: cpf,
            Email: email,
            Nome: nome,
            Telefone: telefone,
            Senha: senha
          
        })


  }

  const Voltar = () => {

    navigation.reset({
      index: 0,
      routes: [{name: "Login"}]
  })}

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
      onChangeText = {(texto)=> setEmail(texto)}
      keyboardType='email-address'
     />
     <Input style={styles.inputStyle}
            placeholder="Nome Completo"
            onChangeText = {(texto)=> setNome(texto)}
            keyboardType='default'
            textContentType='name'

     />
     <Input style={styles.inputStyle}
            placeholder="CPF"
            onChangeText = {(texto)=> setCPF(texto)}
            keyboardType='numbers-and-punctuation'

          
     />
     <Input style={styles.inputStyle}
            placeholder="Telefone"
            onChangeText = {(texto)=> setTelefone(texto)}
            keyboardType='numeric'  
            textContentType="telephoneNumber"        
     />


      <Input style={styles.inputStyle}
      placeholder="Senha"
      autoCorrect={false}
      onChangeText = {(texto)=> setSenha(texto)}
      secureTextEntry={true}
     />


     <TouchableOpacity style={styles.registerStyle}
     onPress={() =>Inserir()}>

     <Text style={styles.registerText}> Inserir </Text>
     

     </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}
      onPress={() =>Voltar()}>

       <Text style={styles.textStyle} > Voltar </Text>

     
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
  marginBottom: 15,
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
  backgroundColor: '#35AAFF',
  width: '90%',
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 17,
},

registerText: {
color: '#FFF',
fontSize: 18,
},


imageStyle: {
  justifyContent: 'center',
  alignItems: 'center',
  width: '150px',
  height: '160px',
  borderRadius: 20,
  

 },


})