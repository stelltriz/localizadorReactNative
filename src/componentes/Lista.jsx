import {View, StyleSheet, Text } from "react-native"

export function Lista(){
    return(
        <View>
            <Text style={estilos.texto}>List</Text>
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