import {View, StyleSheet } from "react-native"
import { Header } from "../componentes/Header"
import { Formulario } from "../componentes/Formulario"
import { Lista } from "../componentes/Lista"

export function Usuarios(){
    return(
        <View style={estilos.container}>
            <Header titulo="Users"/>
            <Formulario />
            <Lista />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edf2fb'
    }

})