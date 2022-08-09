import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input, } from 'react-native-elements';






export default function App(){
    const [Email, setEmail] = useState(null)
const [Senha, setSenha] = useState(null) 

    return(
       <View style={styles.container}>




           <Text style={styles.label}> LOGIN



           </Text>



           <Input
            placeholder="Email"
            onChangeText= {value => setEmail(value)}
            keyboardType='email-address'
            leftIcon={{ type: 'font-awesome', name: 'envelope'}}
           />

            <Input
            placeholder="Senha"
            onChangeText= {value => setSenha(value)}
            leftIcon={{ type: 'font-awesome', name: 'lock'}}
            secureTextEntry={true}
           />



       </View>

    );
  }

  
    
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    


    },
    label: {

        alignItems: 'baseline',
        backgroundColor: 'yellow'
        
    }

})

