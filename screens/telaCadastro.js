import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View, Image} from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { Button as PaperButton, Provider, Dialog, Paragraph, Portal} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Cadastro({navigation}) {
  const [Email, setEmail] = useState(null)
  const [CPF, setCPF] = useState(null)
  const [Nome, setNome] = useState(null)
  const [Telefone, setTelefone] = useState(null)
  const [Senha, setSenha] = useState(null)

  const voltar = () => {

    navigation.reset({
      index: 0,
      routes: [{name: "Login"}]
  })

  }


  return (

    <View style={styles.specificContainer}>
          
      <Image style={styles.imageStyle} source={require('../assets/LogoTF.png')}/>

      <Input style={styles.inputStyle}
            placeholder="Email"
            onChangeText= {value => setEmail(value)}
            keyboardType='email-address'
            textContentType='emailAddress'
            
           />
        <Input style={styles.inputStyle}
            placeholder="Nome"
            onChangeText= {value => setNome(value)}
            keyboardType='default'
            textContentType='name'

           />
           <Input style={styles.inputStyle}
            placeholder="CPF"
            onChangeText= {value => setCPF(value)}
            keyboardType='numbers-and-punctuation'

          
           />
                   <Input style={styles.inputStyle}
            placeholder="Telefone"
            onChangeText= {value => setTelefone(value)}
            keyboardType='numeric'  
            textContentType="telephoneNumber" 
            
             
            
            />
            
           


            <Input style={styles.inputStyle}
            placeholder="Senha"
            onChangeText= {value => setSenha(value)}
            secureTextEntry={true}

           />

           <Button
           
           style={styles.buttonStyle}

           title={"Cadastrar"} type="outline"
           
           onPress={() => inserir()}
          
           />
            <Button 

           style={styles.buttonStyle}

           title={"Voltar"} type="outline"
           
           onPress={() => voltar()}
           />




    </View>
  )

 
  }
const styles = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#1C1C1C",
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  buttonStyle: {
    width: '200px',
    marginTop: '15px',

  }, 
  inputStyle: {
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
  },

  imageStyle: {
   justifyContent: 'center',
   alignItems: 'center',
   width: '150px',
   height: '150px',
   borderRadius: 20,


  },

})