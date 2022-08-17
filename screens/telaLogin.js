import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { BottomNavigation } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './telaCadastro';


export default function Login({navigation}){
    const [Email, setEmail] = useState(null)
    const [Senha, setSenha] = useState(null)
    const entrar = () => {

        navigation.reset({
            index: 0,
            routes: [{name: "Principal"},]
        })

    }
    const entrarCadastro = () => {
 
        navigation.reset({
            index: 0,
            routes: [{name: "Cadastro"}]
        })

        
    }

    return(
       <View style={styles.container}>




           <Text style={styles.label}> Login



           </Text>



           <Input style={styles.inputStyle}
            placeholder="Email"
            onChangeText= {value => setEmail(value)}
            keyboardType='email-address'
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'gray'}}
           />

            <Input style={styles.inputStyle}
            placeholder="Senha"
            onChangeText= {value => setSenha(value)}
            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'gray', }}
            secureTextEntry={true}
           />

           <Button 
           style={styles.buttonStyle}
           title={"Entrar"} 
           type="outline"
           
           onPress={() => entrar()}
          
           />
            <Button
             style={styles.buttonStyle}
             title={"Cadastrar"}
              type="outline"
           
           onPress={() => entrarCadastro()}
           />
           


       </View>

    );
}

  
    
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
        justifyContent: 'Top',
        
    },
    label: {

        alignItems: 'center',
        fontSize: 50,
        marginVertical: 125,
        color: 'gray'
        
    },
    inputStyle: {
        color: 'gray',
        marginVertical: '15px'
    },
    buttonStyle: {

        marginTop: '15px',
        width: '200px'
        
        


    },


})