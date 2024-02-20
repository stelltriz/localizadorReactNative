import { TouchableOpacity, Text, StyleSheet } from "react-native"

export const Botao = () => {
    return(
        <TouchableOpacity style={estilos.container}>
            <Text style={estilos.texto}>USERS</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#d7e3fc',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 100,
        marginTop: 40,
        marginLeft: 30,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ccdbfd"

    },
    texto:{
        color: '#252422',
        fontSize: 18,
        fontWeight: "500", 
    }
})