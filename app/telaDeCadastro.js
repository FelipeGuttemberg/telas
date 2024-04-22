import { Text, TextInput, View, StyleSheet } from 'react-native';
import {Link} from 'expo-router';

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.titulo}>

        <Text style={styles.texto}> Faça o seu cadastro</Text>

      </View>

      <View style={styles.main}>

        <TextInput
          style={styles.input}
          placeholder="Digite o seu nome de usuário"
        />

        <TextInput style={styles.input} placeholder="Digite o seu email" />

        <TextInput style={styles.input} placeholder="Digite sua senha " />

        <TextInput style={styles.input} placeholder="Confirme sua senha" />

      </View>

      <View style={styles.footer}>

        <Text style={styles.cad}> Finalizar cadastro </Text>

        <Text style={styles.voltar}> Voltar para a tela principal </Text>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:3,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
  },

  titulo: {
    alignItems: 'center',
    padding: 10,
  },
  texto: {
    fontSize: 30,
  },

  main: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 20,
  },

  input: {
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    width: 280,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },

  cad: {
    borderWidth: 3,
    padding: 17,
    width: 200,
    textAlign: 'center',
    borderRadius: 25,
    borderColor: 'white',
    backgroundColor: 'black',
    color: 'white'
  },

  voltar: {
    borderWidth: 3,
    padding: 12,
    width: 190,
    textAlign: 'center',
    borderRadius: 25,
    borderColor: 'white',
    color: 'white',
    backgroundColor: 'black'
  },
});
export default App;