import { Text, SafeAreaView, FlatList } from 'react-native'

export default function ResultadoLista(props) {

    return (
        <SafeAreaView>
            <FlatList
                data={props.dados}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={item => item} />
        </SafeAreaView>

    )
}
