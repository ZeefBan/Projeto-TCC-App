import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { Button as PaperButton, Provider, Dialog, Paragraph, Portal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Cadastro({navigation}) {
  const [Email, setEmail] = useState(null)
  const [CPF, setCPF] = useState(null)
  const [Nome, setNome] = useState(null)
  const [Telefone, setTelefone] = useState(null)
  const [Senha, setSenha] = useState(null)



  return (

    <View style={styles.specificContainer}>


      <Text>

      </Text>
      <Input style={styles.inputStyle}
            placeholder="Email"
            onChangeText= {value => setEmail(value)}
            keyboardType='email-address'
           
           />
        <Input style={styles.inputStyle}
            placeholder="Nome"
            onChangeText= {value => setEmail(value)}
            keyboardType='default'
          
           />
                   <Input style={styles.inputStyle}
            placeholder="Telefone"
            onChangeText= {value => setEmail(value)}
            keyboardType='numeric'
            textContentType="telephoneNumber"

          
           />


            <Input style={styles.inputStyle}
            placeholder="Senha"
            onChangeText= {value => setSenha(value)}
            secureTextEntry={true}
           />

           <Button title={"Cadastrar"} type="outline"
           
           onPress={() => inserir()}
          
           />
            <Button title={"Voltar"} type="outline"
           
           onPress={() => voltar()}
           />




    </View>
  )

 
  }
const styles = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#ff",
    padding: 10,
  },
  button: {
    width: "100%",
    marginTop: 10
  }
})