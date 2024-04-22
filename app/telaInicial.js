import {Text,Image,View,StyleSheet} from 'react-native';
import {Link} from 'expo-router';

const App = () => {

return (
   <View style={styles.container}>
    
   <View style={styles.titulo}>

    <Text style={styles.texto}> Faça o seu cadastro no App </Text>

   </View>

    <View style={styles.footer}>

        <Text style={styles.criar}> Criar conta </Text>
        <Text style={styles.entrar}> Entrar </Text>

    </View>

   </View> 


)
};

const styles = StyleSheet.create({

container:{

    flex: 1,
    borderWidth:3,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,

},

titulo:{
    alignItems: 'left',
    margin: 10
}

});
export default App;