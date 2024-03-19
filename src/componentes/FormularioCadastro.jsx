import { useState } from "react"
import {View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native"

export function FormularioCadastro({adicionar}){

    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    
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
                    placeholder="Username" 
                    keyboardType='default'
                    onChangeText={setUsuario}        //evento
                    value={usuario}
                />

                <TextInput
                    style={estilos.campo}
                    placeholder="Password"
                    keyboardType='password'  
                    onChangeText={setSenha}        //evento
                    value={senha}
                />
            </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={() => adicionar(nome, usuario, senha)}
            >

                <Text style={estilos.botaoText}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingHorizontal: 18,
        paddingVertical: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    containerCampos: {
        width: '100%',
    },
    containerBotao: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    campo: {
        alignSelf: 'center',
        height: 50,
        width: '100%',
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
        height: 50,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#252422',
        marginVertical: 30,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        width: 200
    },
    botaoText: {
        color: '#edf2fb',
        fontSize: 17,
    },
});