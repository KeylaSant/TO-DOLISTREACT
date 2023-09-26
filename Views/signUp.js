import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

function SignUp({navigation}){

    const [valiname, setValiname] = useState(true);
    const [emailVerdadero, setEmailVerdadero] = useState(true);
    const [contrasenaVerdadera, setContrasenaVerdadera] = useState(true);
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("")
  
    const iniciarSesion = ()=>{
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
      const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
      const nameRegex=/^[A-Za-z\s]+$/;
      
  
      setEmailVerdadero(emailRegex.test(email));
      setContrasenaVerdadera(passwordRegex.test(contrasena));
      setValiname(nameRegex.test(name));
    }

    return ( 
    <View style={styles.container}>
      <View style={styles.logoContenedor}>
        <Image 
        style ={styles.logo}
        source={require('../assets/logogato.jpg')}
        ></Image>
      </View>

      <View style={styles.contenedorTexto}>
        <Text style={styles.titulo}>Registro</Text>
        <TextInput onChangeText={text=> setName(text)} placeholderTextColor={'#444'} style={[styles.campos, !valiname && valiname!=undefined ? {borderColor:'red'}:'']} placeholder="Nombre" ></TextInput> 

        <TextInput onChangeText={text=> setEmail(text)} placeholderTextColor={'#444'} style={[styles.campos, !emailVerdadero && emailVerdadero!=undefined ? {borderColor:'red'}:'']} placeholder="Email" keyboardType='email-address'></TextInput> 
        <TextInput onChangeText={text=> setContrasena(text)} placeholderTextColor={'#444'} style={[styles.campos, !contrasenaVerdadera  && contrasenaVerdadera!=undefined ? {borderColor:'red'}:'']} placeholder="Contraseña" secureTextEntry={true}></TextInput> 
        <View style={{backgroundColor:'#ba9b73'}}>
        <Button onPress={iniciarSesion} color={'white'} title="Crear cuenta"></Button>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>)
    
}
export default SignUp;

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