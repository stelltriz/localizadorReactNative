import { StyleSheet, View, Text } from "react-native"

export  const Header = ({titulo, subtitulo}) => {
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{titulo}</Text>
            <Text style={estilos.subtitulo}>{subtitulo}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#ccdbfd',
        alignItems: 'center',
        paddingVertical: 12
    },
    titulo:{
        color: '#edf2fb',
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: '#6c757d', 
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowRadius: 4,
        fontFamily: ''
    },
    subtitulo:{
        color: '#edf2fb',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: '#6c757d', 
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowRadius: 4,
        fontFamily: ''
    }
    
})