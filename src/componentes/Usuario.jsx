import {View, StyleSheet, TouchableOpacity, Text } from "react-native"

export function Usuario(){
    return(
        <View style={estilos.container}>

            <View style={estilos.containerDados}>
                <Text style={estilos.texto}>{}</Text>
                <Text style={estilos.texto}>{}</Text>
                <Text style={estilos.texto}>{}</Text>
            </View>

            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.texto}>-</Text>
            </TouchableOpacity>

        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#edf2fb'
    },

    containerDados: {
        flex: 1
    },

    botao: {
        justifyContent: 'center',
        height: 10,
        width: 10,
        alignItems: 'center',
        backgroundColor: '#252422',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        fontSize: 10,
    },

    texto: {
        color:'#252422',
        fontWeight: 'bold',
        fontSize: 22,
        paddingTop: 10
    }

})