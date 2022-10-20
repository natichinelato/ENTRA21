import React, { useState } from 'react'
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Edicao from './Edicao';

const CardContato = (props) => {
    const [editar, setEditar] = useState()
    const [msg, setMsg] = useState('')
    function excluir(item) {
        fetch(`http://localhost:3000/contatos/${item}`,
            {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json', 'content-Type': 'application/json'
                }
            }
        )
        .then(() => { setMsg("Registro excluido com sucesso") })
        .catch(() => { setMsg("Registro não foi excluido") })
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>Nome : <Text style={styles.texto}>{props.nome}</Text></Text>
                <Text>Email :<Text style={styles.texto}>{props.email}</Text></Text>
                <Text>Fone : <Text style={styles.texto}>{props.fone}</Text></Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setEditar(!editar)}
                    >
                        <Text style={styles.textoBotao}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => excluir(props.id)}
                    >
                        <Text style={styles.textoBotao}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {(editar) ? <Edicao id={props.id} /> : ""}
            {(msg.search('Registro') > 0)? <Text style={styles.alert}>{msg}</Text>:""}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignContent: 'center',
        marginHorizontal: 10
    },
    card: {
        backgroundColor: 'silver',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    button: {
        backgroundColor: 'pink',
        width: 100,
        textAlign: 'center',
        borderRadius: 10
    },
    textoBotao: {
        color: 'white',
        fontWeight: 600
    },
    texto: {
        color: 'white',
        fontWeight: 700
    },
    alert: {
        color: 'red',
        fontSize: 10
    }
})

export default CardContato;