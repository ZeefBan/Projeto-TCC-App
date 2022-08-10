import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { BottomNavigation } from 'react-native-paper';





export default function App(){
    const [Email, setEmail] = useState(null)
    const [Senha, setSenha] = useState(null)
    const entrar = () => {
    }


    return(
       <View style={styles.container}>




           <Text style={styles.label}> Login



           </Text>



           <Input
            placeholder="Email"
            onChangeText= {value => setEmail(value)}
            keyboardType='email-address'
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'gray'}}
           />

            <Input
            placeholder="Senha"
            onChangeText= {value => setSenha(value)}
            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'gray', }}
            secureTextEntry={true}
           />

           <Button title={"Entrar"} type="outline"
           
           onPress={() => entrar()}
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
        marginVertical: 100,
        color: 'gray'
        
    },

})