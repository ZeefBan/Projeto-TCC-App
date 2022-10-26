import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/telaLogin';
import Cadastro from './screens/telaCadastro';
import Principal from './screens/telaPrincipal';

const Stack = createStackNavigator();

function MyStack() {
  return (

    
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
       name="Login"
       component={Login}
      />
      <Stack.Screen 
      name="Cadastro" 
      component={Cadastro}/>

      <Stack.Screen 
      name="Principal" 
      component={Principal} />
    </Stack.Navigator>
  );
}



export default function App(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    
    )}
  
    
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
    InputStyle: {

        color: 'gray',
        

    }
})