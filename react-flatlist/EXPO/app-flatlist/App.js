
import { useState } from 'react'
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'
import ResultadoLista from './src/resultado';

export default function App() {
  const [text, setText] = useState('')
  const [material, setMaterial] = useState([''])
  const [vazio, setVazio] = useState('')

  const add = () => {
    if (text == '') {
      setVazio("digite algo")
    } else {
      setMaterial((f) => [...f, text])
      setText('');
    }
  }

    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
        ></TextInput>

        <TouchableOpacity
          style={styles.button}
          onPress={add}

        >
          <Text> Adicionar </Text>
        </TouchableOpacity>

        <ResultadoLista dados={material} />

      </SafeAreaView>
    )
  };

  const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
    input: {
      height: 40,
      marginVertical: 10,
      borderWidth: 1,
      padding: 10

    },
    button: {
      alignItems: "center",
      marginVertical: 10,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "grey"

    }
  });

