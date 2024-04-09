import { StyleSheet, Text, View, TextInput, Button,} from 'react-native';
import React from 'react';
import { useState } from 'react';

export default function App() {
  return (
    <View style={estilos.teladeCadastro}>

      <Text style={estilos.cadastro}>Faça o seu cadastro</Text>

      <View>
      <TextInput style={estilos.email} placeholder='Digite o seu email'> </TextInput>
      <TextInput style={estilos.nome} placeholder='Digite o seu nome de usuário'> </TextInput>
      <TextInput style={estilos.senha} placeholder='Digite o seu a sua senha'> </TextInput>
      <Button color={black} title='Finalizar Cadastro'></Button>
      </View>

    </View>
  );
}

const estilos = StyleSheet.create({


});
