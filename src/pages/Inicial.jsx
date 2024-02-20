import {View, StyleSheet} from 'react-native'
import { Header } from '../componentes/Header';
import { Botao } from '../componentes/Botao';

export function Inicial(){
    return(
        <View style={estilos.container}>
            <Header />
            <Botao />
            <Botao />
            <Botao />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edf2fb'
    },
})