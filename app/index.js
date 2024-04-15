import React, { useState } from 'react';
import { Button,Text,TextInput,View,StyleSheet,Pressable, onPressFunction} from 'react-native';
import {Link} from 'expo-router';

const App = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrar, setMostrar] = useState('');

  return (
   <View style={styles.container}>

     <View style={styles.titulo}>

     <Text style={styles.texto}> Nome do Aplicativo </Text>

     </View>

    
      
    <View style={styles.main}>
      
      <TextInput style={styles.input} placeholder="Digite seu email ou nome de usuário"
      onChangeText={(texto) => setEmail(texto)}
      defaultValue={email}
      />

      <TextInput style={styles.input} placeholder="Digite sua senha"
      onChangeText={(texto) => setSenha(texto)}
      defaultValue={senha}
      />

      <Text style={styles.entrar}> Entrar </Text> 

      <View style={styles.footer}>
      
      {/* <Pressable style={styles.esqueceuSenha} onPress={onPressFunction}> <Text> Esqueceu sua senha? </Text> </Pressable>

      <Pressable style={styles.cad} onPress={onPressFunction}> <Text> Cadastre-se </Text> </Pressable>
       */}
      </View>
      </View>
   </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 20,
    borderWidth: 3
  },
  titulo:{
    alignItems: 'center',
    margin: 10
  },
  texto:{
    fontSize:30,
    //borderWidth:3, 
    textAlign: 'center'

  },
  main:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 1,
    margin: 170
  },
  input:{
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    width: 300,
    //margin: 2
  },
  entrar:{
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    width: 125,
    margin: 11,
    borderColor: 'white',
    backgroundColor: 'black',
    color: 'white'
 },
  footer:{
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 7,
    margin: 9,
    width: 200
},
esqueceuSenha:{
  margin: 10

},
cad:{
  margin: 3
}
 
});
export default App;
