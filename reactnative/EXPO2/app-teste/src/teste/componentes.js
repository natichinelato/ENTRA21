import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import ResultadoIdade from './resultado';

export default function InputIdade() {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [msg, setMsg] = useState('');

    const demaior = () => {
        if (idade >= 18) {
            setMsg(`${nome} você é maior de idade!`)
        } else {
            setMsg(`${nome} você é de menor!`)
        }
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.label}
                placeholder="Informe Nome"
                onChangeText={setNome}
                value={nome}
            />
            <TextInput
                style={styles.label}
                placeholder="Informe idade"
                onChangeText={setIdade}
                value={idade}
            />
            <TouchableOpacity
                style={styles.Button}
                onPress={demaior}>
                <Text style={styles.label}>Clique aqui</Text>

            </TouchableOpacity>

            <ResultadoIdade resultados={msg} />

        </View>

    )
}
const styles = StyleSheet.create({
    container: {

        width: '50%',
        backgroundColor: 'coral',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 10,



    },
});