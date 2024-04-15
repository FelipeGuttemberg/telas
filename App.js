import { StyleSheet, Text, View, TextInput, Button, Pressable,} from 'react-native';
import React from 'react';
import { useState } from 'react';
import {Link} from 'expo-router';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrar, setMostrar] = useState('');

  return (
  <View style={styles.container}>

    <View style={styles.titulo}>

    <Text style={styles.texto}>Nome do Aplicativo</Text>

    </View>

    <View style={styles.main}>

    <TextInput style={styles.input} placeholder='Digite seu email ou nome de usuário'
    onChangeText={(texto) => setEmail(texto)}
    defaultValue={email}
    />

    <TextInput style={styles.input} placeholder='Digite a sua senha'
    onChangeText={(texto) => setSenha(texto)}
    defaultValue={senha}
    />
    </View>

    <Text style={styles.entrar}> Entrar </Text>

    <View style={styles.footer}>

    <Pressable style={style.esqueceuSenha} onPress={onPressFunction}> <Text>Esqueceu sua senha?</Text> </Pressable>

    <Pressable style={style.cad} onPress={onPressFunction}> <Text> Cadastre-se </Text>  </Pressable>

    </View>

  </View>
  );
}

const estilos = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'white',
  //alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 20,
  borderWidth: 3
},
titulo: {
  alignItems: 'center', 
},
texto: {
  fontSize: 30,
  textAlign: 'center'
},
main: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: 1,
  margin: 170
},
input: {
  borderWidth: 3,
  padding: 10,
  borderRadius: 10,
  width: 300
},
entrar: {
  borderWidth: 3,
  padding: 10,
  borderRadius:10,
  textAlign: 'center',
  width: 125,
  margin: 11,
  borderColor:'white',
  backgroundColor: 'black',
  color: 'white'
},
footer: {
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-around',
  gap: 7,
  margin: 9,
  width:200
},
esqueceuSenha: {
  margin: 10
},
cad:{
  margin: 3 
}
});
