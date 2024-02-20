import { StyleSheet, View, Text } from "react-native"

export  const Header = () => {
    return(
        <View style={estilos.container}>
            <Text style={estilos.texto}>Testing</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#ccdbfd',
        alignItems: 'center',
        paddingVertical: 12
    },
    texto:{
        color: '#edf2fb',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: '#6c757d', 
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowRadius: 4,
        fontFamily: ''
    }
})