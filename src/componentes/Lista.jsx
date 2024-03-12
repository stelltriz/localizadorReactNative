import {View, StyleSheet, FlatList } from "react-native"
import { Usuario } from "./Usuario"

export function Lista(){

    const listUsers = [
        
    ]

    return(
        <View>
            <FlatList
                data = {listUsers}
                keyExtractor = {(item) => {item.code}}
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