import {View, StyleSheet, Text, FlatList } from "react-native"

export function Lista(){

    const listUsers = [
        {
            code: '1',
            nome: 'Carlito',
            email: 'carli@to.com',
            telefone: '123456'
        },

        {
            code: '2',
            nome: 'Javier',
            email: 'ja@vier.com',
            telefone: '1232323'
        },
        
        {
            code: '3',
            nome: 'Elimin',
            email: 'eli@min.com',
            telefone: '888888'
        }
        
    ]

    return(
        <View>
            <FlatList
                data = {listUsers}
                keyExtractor = {(item) => {item.code}}
                renderItem = {({item}) => (
                <>   
                    <Text style={estilos.texto}>{item.nome}</Text>
                    <Text style={estilos.texto}>{item.email}</Text>
                    <Text style={estilos.texto}>{item.telefone}</Text>
                </> 
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