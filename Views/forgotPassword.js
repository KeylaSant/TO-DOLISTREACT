import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

function ForgotPassword({ navigation }) {

    const [emailVerdadero, setEmailVerdadero] = useState(true);
    const [email, setEmail] = useState("");

    const contrasenaOlvidada = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
        setEmailVerdadero(emailRegex.test(email));
        if(emailRegex.test(email)){
            navigation.navigate('updatePassword')
        }
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
                <Text style={styles.titulo}>Recuperar contraseña</Text>
                <TextInput onChangeText={text => setEmail(text)} placeholderTextColor={'#444'} style={[styles.campos, !emailVerdadero && emailVerdadero != undefined ? { borderColor: 'red' } : '']} placeholder="Email" keyboardType='email-address'></TextInput>
                <View style={{ backgroundColor: '#ba9b73' }}>
                    <Button onPress={contrasenaOlvidada} color={'white'} title="¿Has olvidado tu contraseña?"></Button>
                </View>
            </View>
            {/* <StatusBar style="auto" /> */}
        </View>)

}
export default ForgotPassword;

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