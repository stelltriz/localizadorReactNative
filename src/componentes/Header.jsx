import { StyleSheet, View, Text } from "react-native"

export  const Header = () => {
    return(
        <View style={estilos.container}>
            <Text style={estilos.texto}>Freezia</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#b6ccfe',
        alignItems: 'center',
        paddingVertical: 12
    },
    texto:{
        color: '#edf2fb',
        fontSize: 30
    }
})