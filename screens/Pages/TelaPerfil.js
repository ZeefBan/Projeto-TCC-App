import React from "react";
import {View, SafeAreaView, StyleSheet} from "react-native";
import styles from "../../style/mainStyles";
import {Avatar, Title, Caption, Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Perfil() {
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15 }}>
           <Avatar.Image
           source ={{
             uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
             
           }}
           size={80}
           />
           <View style={{marginLeft: 20}}>

             <Title style={[styles.title, {
               marginTop: 15, 
               marginBottom: 5, 
            
            }]}>David Ferraira</Title>
             <Caption style={styles.caption}>Zeef Banido</Caption>

           </View>

          </View>

        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
                 <Text>Sao paulo, Brazil </Text>

          </View>
        </View>

      </SafeAreaView>
    );

}