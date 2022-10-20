import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');
    const [msg, setMsg] = useState('');

    function salvar(){
       if(dadosValidos()){
        var contato = {

            nome: nome, 
            email: email, 
            fone: fone
        }
        save(contato)
        setMsg('')
    }
}

function save(obj) {
    fetch('http://localhost:3000/contatos',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json', 'content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
                
            })
        
    
    .then(() => {setMsg("Registro inserido com sucesso!!")})
    .then(() => {
        setNome('')
        setEmail('')
        setFone('')
        
})
     .catch((erro) => setMsg(`Registro não incluido. Erro: ${erro}`))
}

  function dadosValidos(){
    if(nome == ''){
        setMsg('O nome deve ser preenchido')
        return false
    }else if (email === ''){
        setMsg('O email deve ser preenchido')
        return false 
    }else if(fone == ''){
        setMsg('O fone deve ser preenchido')
        return false
    }
      return true
  }
    return (
        <View style={styles.container}>
           <Text style={styles.title}>Tela de cadastro</Text>
           <TextInput style={styles.input}
           placeholder= "informe nome"
           value={nome}
           onChangeText={setNome}
           />
        
          {(msg.search('nome') > -1)?<Text>{msg}</Text>: ''}

           <TextInput style={styles.input}
           placeholder= "informe email"
           value={email}
           onChangeText={setEmail}/>

           {(msg.search('email') > -1)?<Text>{msg}</Text>: ''}
           
           <TextInput style={styles.input}
           placeholder= "informe fone"
           value={fone}
           onChangeText={setFone}/>

           {(msg.search('fone') > -1)?<Text>{msg}</Text>: ''}

           <TouchableOpacity style={styles.button}
           onPress={salvar}
           >
             <Text>Gravar</Text>
            </TouchableOpacity>
           {(msg.search('Registro')> -1)?<Text style={styles.msgs}>{msg}</Text>:''}
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
    msgs:{
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    }
})