import {View, StyleSheet } from "react-native"
import { useState } from "react"

import { Header } from "../componentes/Header"
import { FormularioLogin } from "../componentes/FormularioLogin";

export function Login(){

    const [listaUsuarios, setListaUsuarios] = useState([]); //useState serve para armazenar informações, dados

    const addUser = (usuario, senha) => {
        let newUser = {
            usuario: usuario,
            senha: senha
        }
        setListaUsuarios([...listaUsuarios, newUser]) //spread
        console.log(listaUsuarios)
    }

    return(
        <View style={estilos.container}>
            <Header titulo="Login"/>
            <FormularioLogin verificarLogin = {addUser}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edf2fb'
    }

})