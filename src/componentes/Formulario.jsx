import { useState } from "react"
import {View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native"

export function Formulario(adicionar){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    
    return(
        <View style = {estilos.container}>

            <View style = {estilos.containerCampos}>
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
            </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={() => adicionar(nome, email, telefone)}
            >

                <Text style={estilos.botaoText}>+</Text>
            </TouchableOpacity>

        </View>
    )
}

const estilos = StyleSheet.create({

    container: {
        flexDirection: 'row',
        paddingHorizontal: 18,
        paddingVertical: 10,
        marginVertical: 10
    },

    containerCampos: {
        flex: 1
    },

    campo: {
        alignSelf: 'center',
        height: 50,
        width: 250,
        backgroundColor: '#edf2fb',
        color: 'black',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        elevation: 6,
        
    },
    botao: {
        justifyContent: 'center',
        height: 170,
        width: 100,
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