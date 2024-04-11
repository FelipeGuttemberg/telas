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
      <TextInput style={estilos.senha} placeholder='Digite a sua senha'/> 
      <TextInput style={estilos.confirmarSenha} placeholder='Confirme a sua senha' />
      <Button style={estilos.botao} color='black' title='Finalizar cadastro'></Button>
      <Button style={estilos.botaoVoltar} color='black' title='Voltar para a tela inicial'></Button>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({

telaDeCadastro:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blueskyblue'
},

cadastro:{
  
},

email:{

},

nome:{

},

senha:{

},

confirmarSenha:{

},

botao:{

},

botaoVoltar:{

}
});
