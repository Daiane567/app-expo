import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';

import Saldo from './Components/Saldo';
import Lancamento from './Components/Lancamento';
import SaldoProvider from './Context/ContaContext';

const App = () => {

  return (
    <SaldoProvider>
      <View style={styles.container}>
        <Saldo />
        <Lancamento Credito />
        <Lancamento />
      </View>
    </SaldoProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
 
});

export default App;
