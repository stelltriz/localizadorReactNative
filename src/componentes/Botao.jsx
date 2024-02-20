import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { useState } from 'react'

export const Botao = ({texto}) => { //or = props => | {props.texto}

    const [clicks, setClicks] = useState(0) //tipo get e set
    
    const countClicks = () =>{
        setClicks( clicks + 1)
    }

    return(
        <TouchableOpacity 
            style={estilos.container}
            onPress={countClicks}
        >
            <Text style={estilos.texto}>{texto} {clicks}</Text>
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