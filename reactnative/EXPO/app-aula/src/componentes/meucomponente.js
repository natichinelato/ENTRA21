import { View , Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
export default function MeuComponente(props){
   return(
       <View style={styles.container}>
           <TextInput
          style={styles.button} 
          placeholder= 'informe nome'/>
           <TextInput
           style={styles.button} 
           placeholder= 'informe Idade'/>
        
        
        <TouchableOpacity
        style={styles.button}
        >
        <Text style={styles.label}>Clique aqui</Text>
        </TouchableOpacity>
       
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
      marginVertical:20,
      padding: 10,
      
      
      
    },
    titulo:{
      color: 'lightcoral',
      textAlign: 'center',
      fontSize: 24,
      padding:50,
      fontStyle: 'italic'
      
    },
     button: {
       padding: 10,
       color: 'purple',
       marginVertical: 10,
       backgroundColor: 'pink',
       marginTop: 40,
     },
     label: {
        borderRadius:10,
        color: 'purple',
        marginVertical: 10,
        backgroundColor: 'pink',
        
      }
  });
  