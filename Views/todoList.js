import { useState } from "react";
import { FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { globalStyles } from "../App";
import { Icon } from "@rneui/themed";

export default function TodoList() {
    let [data, setData] = useState([
    ])
    let [textoNota, setTextoNota] = useState("");

    const addItem = () => {
        if (textoNota.trim().length > 0) {

            setData([...data, {
                titulo: textoNota.trim()
            }]);

            setTextoNota("");
        }

    }

    const eliminarNota = (index)=>{
        setData((prevData) =>{
            const newData=[...prevData];
            newData.splice(index,1);
            return newData;
        })
    }

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={60}
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <View style={styles.list}>

                <View style={styles.listContainer}>
                    <FlatList
                        data={data}
                        contentContainerStyle={{ paddingBottom: 50,gap:20 }}
                        renderItem={({ item, index }) => (
                            <View style={{
                                display: "flex",
                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent:"space-between"

                            }}>
                                <BouncyCheckbox
                                    style={{
                                        padding: 10,
                                        borderRadius: 10,
                                        backgroundColor: '#d78a87'
                                    }}
                                    size={25}
                                    fillColor="#ba9b73"
                                    unfillColor="#FFFFFF"
                                    text={item.titulo}
                                    textStyle={{ color: 'white', fontWeight: "600" }}
                                    iconStyle={{ borderColor: "#ba9b73" }}
                                    innerIconStyle={{ borderWidth: 2 }}
                                    onPress={(isChecked) => { }}
                                />
                                <TouchableOpacity onPress={()=>eliminarNota(index)}>
                                    <Icon name="delete" />
                                </TouchableOpacity>
                            </View>

                        )}
                    />
                </View>


                <View style={styles.contenedor} >
                    <TextInput
                        style={globalStyles.campos}
                        placeholder="Ingrese la nota"
                        value={textoNota}
                        onChangeText={(text) => setTextoNota(text)}
                    />
                    <TouchableOpacity onPress={addItem} style={styles.botonAgregar} >
                        <Text style={styles.icono} >+</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        height: '100%',
        display: "flex",
        alignItems: "center",
        paddingVertical: 30
    },
    listContainer: {
        maxWidth: "90%",
        width: "100%",
        gap: 20

    },

    contenedor: {
        position: 'absolute',
        bottom: 20,
        display: "flex",
        width: "100%",
        maxWidth: "95%",
        flexDirection: "row",
        gap: 10
    },

    botonAgregar: {
        width: 50,
        height: 50,
        backgroundColor: "#62615d",
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,

    },
    icono: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }


})
