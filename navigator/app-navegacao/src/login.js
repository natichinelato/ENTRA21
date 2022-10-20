import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function logar() {
        fetch('http://localhost:3000/usuario/login',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha
                })
            }
        )
            .then(data => data.json())
            .then(result => AsyncStorage.setItem('login', result.token))
            .catch(() => { setMsg("Usuário ou senha inválidos.") })
    }
    return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            onChangeText={text => setEmail(text)}
            defaultValue={senha}
            keyboardType="email-address"
        />
        <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                onChangeText={text => setSenha(text)}
                defaultValue={senha}
                secureTextEntry={true}
            />
        <TouchableOpacity
            style={styles.button}
            onPress={() => logar()}
        >
        <Text style={{color : 'white'}}>Logar</Text>
        </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'coral'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginVertical: 20,
        borderRadius: 10
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 10
    },
    title: {
        color: 'white',
        FontSize: 14
    },
    alert: {
        color: 'white',
        fontSize: 10
    }
})