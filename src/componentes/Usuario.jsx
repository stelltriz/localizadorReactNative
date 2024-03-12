import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Usuario({ nome, email, telefone, remover }) {
    return (
        <View style={estilos.container}>
            <View style={estilos.containerDados}>
                <Text style={estilos.texto}>{nome}</Text>
                <Text style={estilos.texto}>{email}</Text>
                <Text style={estilos.texto}>{telefone}</Text>
            </View>
            <TouchableOpacity
                style={estilos.botao}
                onPress={remover}
            >
                <Text style={estilos.textoBotao}>-</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#edf2fb',
        alignSelf: 'center',
        height: 50,
        width: 250,
        backgroundColor: '#edf2fb',
        color: 'black',
        marginVertical: 5,
        padding: 10,
        borderRadius: 4,
        fontSize: 16,
        elevation: 6
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
        fontSize: 10,
        borderRadius: 2
    },

    texto: {
        color: '#252422', // Apply the specified text color
        fontWeight: 'bold',
        fontSize: 10,
        paddingTop: 10,
        display: 'flex'
    },

    textoBotao: {
        color:'#edf2fb',
        fontSize: 40
    }

})