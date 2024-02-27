import {View, StyleSheet, Text } from "react-native"

export function Formulario(){
    return(
        <View>
            <Text style={estilos.texto}>Forms</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    texto: {
        color:'#252422',
        fontWeight: 'bold',
        fontSize: 22,
    }

})