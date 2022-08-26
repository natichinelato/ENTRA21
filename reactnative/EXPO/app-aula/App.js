
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MeuComponente from './src/componentes/meucomponente';


export default function App() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [nomecompleto, setNomecompleto] = useState ('');
  const [idade, setIdade] = useState('');

  function maioridade(){
    if(idade >= 18){
      return 'você é maior de idade!'
  }else{
    return 'você é de menor!'
  }
}
  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>

      <Text>Nome</Text>
      <TextInput
      style={styles.label}
        placeholder="Informe Nome"
        onChangeText={setNome}
        value={nome}
      />
      <Text>Sobrenome</Text>
      <TextInput
      style={styles.label}
        placeholder="Informe Sobrenome"
        onChangeText={setSobrenome}
        value={sobrenome}
      />
      <Text>Idade</Text>
      <TextInput 
      style={styles.label}
      placeholder="Informe idade"
      onChangeText={setIdade}
      value={idade}
      />
      
      <TouchableOpacity
      style={styles.Button}
      
      onPress={()=>{
        setNomecompleto (`${nome} ${sobrenome}`)
      }}
        >
          
        <Text style={styles.label}>Clique aqui</Text>
        {(nomecompleto!= '') ? <Text> Olá {nomecompleto}, {maioridade()}</Text>: ''}
      </TouchableOpacity>
     
      <MeuComponente
      placeholder= "Informe o nome"
      placeholder = 'Informe idade'
      />
          
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    
  },
  titulo:{
    color: 'lightcoral',
    textAlign: 'center',
    fontSize: 24,
    padding:50,
    
  },
   label: {
     padding: 10,
     color: 'purple',
     marginVertical: 10,
     backgroundColor: 'pink',
     borderRadius: 10
     
   }
});
