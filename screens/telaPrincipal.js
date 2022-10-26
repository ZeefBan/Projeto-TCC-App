import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feed from './Pages/TelaFeed';
import Notifications from './Pages/TelaNotification';
import Perfil from './Pages/TelaPerfil';



const Tab = createBottomTabNavigator();

export default function Principal() {
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
  );
}