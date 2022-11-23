import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Semáforo Apagado', value: '1' },
  { label: 'Semáforo Em mal Funcionamento(Piscando ou Só uma Luz Funcionando)', value: '2' },
  { label: 'Fios Expostos', value: '3' },
  { label: 'Sinalização Danificada', value: '4' },
  { label: 'Falta De Sinalização', value: '5' },
  { label: 'Pista Molhada', value: '6' },
  { label: 'Pista intransitavel(coberta por óleo, farinha e etc.) ', value: '7' },
  { label: 'Buracos Na Pista', value: '8' },
  { label: 'Roubo De Fios', value: '9' },
  { label: 'Acidentes (Batidas De Carro ETC.)', value: '10' },
  { label: 'Acidentes (Atropelamento)', value: '11' }

];

const TelaNew = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  

  return (
    <View style={styles.container}>
        <StatusBar barStyle='light-content' />
      <View style={{backgroundColor: '#fff', padding: 20, borderRadius:15}}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Selecione o Problema' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        
      />
      </View>
    </View>
  );
};

export default TelaNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center'
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom:10
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 99,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});