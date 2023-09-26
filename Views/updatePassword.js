import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

function UpdatePassword({ navigation }) {

    const [nuevaContra, setNuevaContra] = useState(true);
    const [nuevaContraConf, setNuevaContraConf] = useState(true);
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;


    const revisarContra= (text)=>{
        setNuevaContra(passwordRegex.test(text))
    }
    const revisarContraConf= (text)=>{
        setNuevaContraConf(passwordRegex.test(text))
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContenedor}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logogato.jpg')}
                ></Image>
            </View>

            <View style={styles.contenedorTexto}>
                <Text style={styles.titulo}>Actualizar contrasena</Text>
                <TextInput onChangeText={text => revisarContra(text)} placeholderTextColor={'#444'} style={[styles.campos, nuevaContra ? { borderColor: 'red' } : '']} placeholder="Nueva contraseña" secureTextEntry={true}></TextInput>
                <TextInput onChangeText={text => revisarContraConf(text)} placeholderTextColor={'#444'} style={[styles.campos, nuevaContraConf? { borderColor: 'red' } : '']} placeholder="Confirmar contraseña" secureTextEntry={true}></TextInput>
                <View style={{ backgroundColor: '#ba9b73' }}>
                    <Button color={'white'} title="Actualizar contraseña"></Button>
                </View>
            </View>
            {/* <StatusBar style="auto" /> */}
        </View>)

}
export default UpdatePassword;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    logoContenedor: {
        width: '100%',
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        borderRadius: 500,
        width: 200,
        height: 200
    },
    contenedorTexto: {
        flex: 1,
        display: 'flex',
        alignItems: 'stretch',
        paddingHorizontal: 20
    },
    titulo: {
        paddingVertical: 20,
        fontWeight: '900',
        fontSize: 20,
        textAlign: 'center'

    },
    campos: {
        // width:'80%',
        height: 50,
        borderWidth: 2,
        borderColor: '#2e393e',
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontWeight: '800'
    },
    boton: {
        width: '80%'
    }



});