import { TouchableOpacity, Text, StyleSheet } from "react-native"

export const Botao = () => {
    return(
        <TouchableOpacity>
            <Text>Usuários</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#edede9'
    },
    texto:{
        color: '#252422',
        fontSize: 18
    }
})