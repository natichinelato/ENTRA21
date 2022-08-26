
import { StyleSheet, Text, View,  } from 'react-native';
import InputIdade from './src/teste/componentes'
import ResultadoIdade from './src/teste/resultado';



export default function App() {
 
  return (
    <View style={styles.container}>
      <Text>MOSTRART MAIORIDADE</Text>
      
      <InputIdade/>
      <ResultadoIdade/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
