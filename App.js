import { StyleSheet, Text, View, TextInput, Button,} from 'react-native';
import React from 'react';
import { useState } from 'react';

export default function App() {
  return (
    <View style={estilos.telaDeCadastro}>

      <Text style={estilos.cadastro}>Faça o seu cadastro</Text>

      <View>
      <TextInput style={estilos.email} placeholder='Digite o seu email'/> 
      <TextInput style={estilos.nome} placeholder='Digite o seu nome de usuário'/> 
      <TextInput style={estilos.senha} placeholder='Digite o seu a sua senha'/> 
      <Button style={estilos.botao} color='black' title='Finalizar Cadastro'></Button>
      </View>

    </View>
  );
}

const estilos = StyleSheet.create({

telaDeCadastro:{
    flex: 1,
    justifyContent: 'center'
},

cadastro:{
  
},

email:{

},

nome:{

},

senha:{

},
botao:{

}
});
