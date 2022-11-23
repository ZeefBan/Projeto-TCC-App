import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feed from './Pages/TelaFeed';
import Perfil from './Pages/TelaPerfil';
import Reportar from './Pages/TelaNew';
import ButtonNew from './Pages/ButtonNew';




const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    

    <Tab.Navigator
       tabBarOptions={{
        style:{
          backgroundColor:"#1C1C1C",
          borderTopColor: "transparent"
        },
        activeTintColor: "#35AAFF",
        tabStyle:{
          paddingBottom: 5,
          paddingTop: 5,
        }
       }}

      initialRouteName="Feed"
      
    >
      <Tab.Screen
        name="Início"
        component={Feed}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      
      
      <Tab.Screen
        name="Reportar"
        component={Reportar}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, size }) => (
             <ButtonNew size={size} focused={focused}/>
          ),
        }}
      />

       <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      
      
      
    </Tab.Navigator>

)}
