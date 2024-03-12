import {View, StyleSheet, FlatList, Text } from "react-native"
import { Usuario } from "./Usuario"

export function Lista({ colecao, remover }) {
    return (
        <View>
            <FlatList
                data={colecao}
                keyExtractor={(item) => item.code.toString()} 
                renderItem={({ item }) => (
                    <Usuario
                        nome={item.nome}
                        email={item.email}
                        telefone={item.telefone}
                        remover={() => remover(item.code)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={estilos.texto}>
                        Nenhum Usuário Cadastrado
                    </Text>
                )}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    texto: {
        color:'#252422',
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 15,
        textAlign: 'center'
    }

})