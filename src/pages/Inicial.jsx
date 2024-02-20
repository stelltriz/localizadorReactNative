import {View, StyleSheet} from 'react-native'
import { Header } from '../componentes/Header';
import { Botao } from '../componentes/Botao';

export function Inicial(){
    return(
        <View style={estilos.container}>
            <Header 
                titulo="Testing"
                subtitulo="test"
            />
            <Botao texto="Profile"/>
            <Botao texto="Sensors"/>
            <Botao texto="About"/>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edf2fb'
    },
})