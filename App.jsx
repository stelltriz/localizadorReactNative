//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Inicial } from './src/pages/Inicial';

export default function App() {
  return (
    <View style={estilos.container}>
      <StatusBar barStyle="light-content" />
      <Inicial />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  }
});
