import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [emailVerdadero, setEmailVerdadero] = useState(true);
  const [contrasenaVerdadera, setContrasenaVerdadera] = useState(true);

  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("")

  const iniciarSesion = ()=>{
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

    setEmailVerdadero(emailRegex.test(email));
    setcontrasenaVerdadero(passwordRegex.test(contrasena));
  }

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.logoContenedor}>
        <Image 
        style ={styles.logo}
        source={require('./assets/logogato.jpg')}
        ></Image>
      </View>

      <View style={styles.contenedorTexto}>
        <Text style={styles.titulo}>Login</Text>
        <TextInput onChangeText={text=> setEmail(text)} placeholderTextColor={'#444'} style={[styles.campos, !emailVerdadero && emailVerdadero!=undefined ? {borderColor:'red'}:'']} placeholder="Email" keyboardType='email-address'></TextInput> 
        <TextInput onChangeText={text=> setContrasena(text)} placeholderTextColor={'#444'} style={[styles.campos, !contrasenaVerdadera  && contrasenaVerdadera!=undefined ? {borderColor:'red'}:'']} placeholder="Contraseña" secureTextEntry={true}></TextInput> 
        <View style={{backgroundColor:'#ba9b73'}}>
        <Button onPress={iniciarSesion} color={'white'} title="Iniciar sesion"></Button>
        </View>
        <Button title="¿Has olvidado tu contrseña?"></Button>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logoContenedor:{
    width:'100%',
    height: 300,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },

  logo: {
    borderRadius:500,
    width: 200, 
    height:200
  },
  contenedorTexto:{
    flex:1,
    display:'flex',
    alignItems:'stretch',
    paddingHorizontal:20
  },
  titulo:{
    paddingVertical:20,
    fontWeight:'900',
    fontSize:20,
    textAlign:'center'
    
  },
  campos:{
    // width:'80%',
    height: 50,
    borderWidth:2,
    borderColor:'#2e393e',
    marginBottom:20,
    borderRadius:10,
    paddingHorizontal:20,
    fontWeight:'800'
  },
  boton:{
    width:'80%'
  }
  


});
