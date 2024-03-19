//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Login } from './src/pages/Login';

export default function App() {
  return (
    <View style={estilos.container}>
      <StatusBar barStyle="light-content" />
      <Login />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1
  }
});
