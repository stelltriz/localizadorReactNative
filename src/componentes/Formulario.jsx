import { useState } from "react"
import {View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native"

export function Formulario(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    
    return(
        <View style = {estilos.container}>
            <TextInput
                style={estilos.campo}
                placeholder="Name" 
                keyboardType='default'
                onChangeText={setNome}        //evento
                value={nome}
            />

            <TextInput 
                style={estilos.campo}
                placeholder="Email" 
                keyboardType='email-address'
                onChangeText={setEmail}        //evento
                value={email}
            />

            <TextInput
                style={estilos.campo}
                placeholder="Telephone"
                keyboardType='phone-pad'  
                onChangeText={setTelefone}        //evento
                value={telefone}
            />

            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.botaoText}>Enter</Text>
            </TouchableOpacity>

        </View>
    )
}

const estilos = StyleSheet.create({

    container: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10
    },

    campo: {
        alignSelf: 'center',
        height: 50,
        width: 370,
        backgroundColor: '#edf2fb',
        color: 'black',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        elevation: 6
    },
    botao: {
        alignSelf: 'center',
        marginTop: 20,
        height: 50,
        width: 230,
        alignItems: 'center',
        backgroundColor: '#252422',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
    },

    botaoText:{
        color: '#edf2fb',
        fontSize: 20
    }
})