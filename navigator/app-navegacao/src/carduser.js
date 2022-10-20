import { Picker, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from "react"

export default function CadUser() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confsenha, setConfsenha] = useState('')
    const [perfil, setPerfil] = useState('ADM')
    const [msg, setMsg] = useState('')

    function callsave() {
        if (validaDados()) {
            setMsg("");
            save();
        }
    }
    function save() {
        fetch('http://localhost:3000/usuario',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha,
                    perfil: perfil
                })
            }
        )
            .then(() => { setMsg("Registro inserido com sucesso") })
            .catch((erro) => { setMsg("Registro não foi inserido: " + erro) })

    }
    function validaDados() {
        if (nome.length == 0) {
            setMsg("O nome deve ser informado")
            return false;
        }
        if (email.length == 0) {
            setMsg("O email deve ser informado")
            return false;
        }
        if (senha.length == 0) {
            setMsg("A senha deve ser informado")
            return false;
        }
        if (perfil.length == 0) {
            setMsg("O perfil deve ser informado")
            return false;
        }
        return true;
    }
    return (
        <View style={styles.container}>
            <Text>Tela de cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                onChangeText={text => setNome(text)}
                defaultValue={nome}
            />
            {(msg.search('nome') > -1) ? <Text style={styles.alert}>{msg}</Text> : <Text></Text>}

            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                onChangeText={text => setEmail(text)}
                defaultValue={email}
                keyboardType="email-address"
            />
            {(msg.search('email') > -1) ? <Text style={styles.alert}>{msg}</Text> : <Text></Text>}

            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    onChangeText={text => setSenha(text)}
                    defaultValue={senha}
                    secureTextEntry={true}
                />
                {(msg.search('A senha') > -1) ? <Text style={styles.alert}>{msg}</Text> : <Text></Text>}
            </View>


            <TextInput
                style={styles.input}
                placeholder="Digite confirmação de senha"
                onChangeText={text => setConfsenha(text)}
                defaultValue={confsenha}
                secureTextEntry={true}
            />
            {(msg.search('confirmação') > -1) ? <Text style={styles.alert}>{msg}</Text> : <Text></Text>}

            <Picker selectedValue={perfil} onValueChange={setPerfil}>
                <Picker.Item label="ADM" value="ADM" />
                <Picker.Item label="VENDEDOR" value="VENDEDOR" />
                <Picker.Item label="GERENTE" value="GERENTE" />
            </Picker>

            <TouchableOpacity
                style={styles.button}
                onPress={() => callsave()}
            >
                <Text style={{ color: 'red' }}>Gravar</Text>
            </TouchableOpacity>
            {(msg.search('Registro') > -1) ? <Text style={styles.alert}>{msg}</Text> : <Text></Text>}
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
        marginVertical: 20
      },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        marginVertical:10
    },
    title:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    alert:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    }
})
