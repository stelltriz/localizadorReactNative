//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Usuarios } from './src/pages/Usuarios';

export default function App() {
  return (
    <View style={estilos.container}>
      <StatusBar barStyle="light-content" />
      <Usuarios />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1
  }
});
