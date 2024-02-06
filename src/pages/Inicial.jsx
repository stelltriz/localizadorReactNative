import { estilos } from './inicial'
import {View, Text} from 'react-native'

export function Inicial(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.texto}>Salve</Text>
            <Text style={estilos.texto}>Olá</Text>
        </View>
    );
}