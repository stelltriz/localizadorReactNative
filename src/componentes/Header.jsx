import { StyleSheet, View } from "react-native"

export  const Header = () => {
    return(
        <View>
            <Text>Testando Header</Text>
            <Text>Headers Testing</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#e9edc9',
        alignItems: 'center',
        paddingVertical: 12
    },
    texto:{
        color: '#386641',
        fontSize: 30,
        fontWeight: '200'
    }
})