import {View, StyleSheet} from 'react-native'
import { Header } from '../componentes/Header';

export function Inicial(){
    return(
        <View style={estilos.container}>
            <Header />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dad7cd'
    },
})