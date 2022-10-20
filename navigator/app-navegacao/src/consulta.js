import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import CardConsulta from './cardconsulta';


export default function Consulta() {
    const [contatos, setContatos] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/contatos')
        .then(data => data.json())
        .then(result => { setContatos(result)
           
    })
}, [contatos])  

    return (
        <View style={styles.container}>
           <Text style={styles.titulo}>Tela de Consulta<hr/></Text>
           <FlatList
            data={contatos}
            renderItem={({item})=> <CardConsulta 
            id={item.id} nome={item.nome} email={item.email} fone={item.fone} />}
            keyExtractor={item => item.id}
            />
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
        color: 'red',
        FontSize: 14
    },
    titulo:{
        color: 'white',
        fontSize: 30,
        textAlign: "center",
       
    }

})