import {View, StyleSheet } from "react-native"
import { useState } from "react"

import { Header } from "../componentes/Header"
import { Formulario } from "../componentes/Formulario"
import { Lista } from "../componentes/Lista"

import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export function Usuarios(){

    const [listaUsuarios, setListaUsuarios] = useState([]); //useState serve para armazenar informações, dados

    const addUser = (nome, email, telefone) => {
        let newUser = {
            code: uuidv4(),
            nome: nome,
            email: email,
            telefone: telefone
        }
        setListaUsuarios([...listaUsuarios, newUser]) //spread
        console.log(listaUsuarios)
    }

    const removeUser = code => {

        setListaUsuarios(
            listaUsuarios.filter( usuario => usuario.code !== code)
        )
    }

    return(
        <View style={estilos.container}>
            <Header titulo="Users"/>
            <Formulario adicionar = {addUser}/>
            <Lista 
                colecao={listaUsuarios}
                remover={removeUser}         
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edf2fb'
    }

})