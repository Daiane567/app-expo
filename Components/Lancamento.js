import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput} from 'react-native';

import {useSaldo} from '../Context/ContaContext'


const Lancamento = (props) => {
    const {saldo, setSaldo} = useSaldo();

  const [valor, setValor] = useState();

  return (
    <>
    <TextInput
        style={styles.input}
        onChangeText={setValor}
        value={valor}
        placeholder="0,00"
        keyboardType="numeric"
      />

      <Button
      color={props.Credito ? 'green' : 'red'}
        title={props.Credito ? 'Adicionar saldo': 'Subtrair saldo'}/*if ternario */
        onPress={() => {
        props.Credito ?  setSaldo(saldo + Number(valor)) : setSaldo(saldo - Number(valor))
        }}
      />
    </>  
  )

}

const styles = StyleSheet.create({
  
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Lancamento;