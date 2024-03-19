import {View, StyleSheet } from "react-native"
import { useState } from "react"

import { Header } from "../componentes/Header"
import { FormularioCadastro } from "../componentes/FormularioCadastro";

export function Cadastro(){

    const [listaUsuarios, setListaUsuarios] = useState([]); //useState serve para armazenar informações, dados

    const addUser = (nome, usuario, senha) => {
        let newUser = {
            nome: nome,
            usuario: usuario,
            senha: senha
        }
        setListaUsuarios([...listaUsuarios, newUser]) //spread
        console.log(listaUsuarios)
    }

    return(
        <View style={estilos.container}>
            <Header titulo="Cadastro"/>
            <FormularioCadastro adicionar = {addUser}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edf2fb'
    }

})