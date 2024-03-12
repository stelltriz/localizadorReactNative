import {View, StyleSheet, FlatList } from "react-native"
import { Usuario } from "./Usuario"

export function Lista({colecao}){
    return(
        <View>
            <FlatList
                data = {colecao}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => (
                    <Usuario 
                        nome = {item.nome}
                        email = {item.email}
                        telefone = {item.telefone}
                    />
                )}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    texto: {
        color:'#252422',
        fontWeight: 'bold',
        fontSize: 22,
        paddingTop: 10
    }

})