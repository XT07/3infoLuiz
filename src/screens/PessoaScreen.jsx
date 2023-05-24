import { QuerySnapshot, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";
import { FlatList } from "react-native-web";
import Styles from "../utils/style";


export default function PessoaScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarPessoa() {
        const PessoaRef = collection(db, 'pessoa');
        const buscarPessoa = query(PessoaRef, where('nome', '==', busca));
        const resultadoSnapshot = await getDocs(buscarPessoa);
        const PessoaTemp = [];
        resultadoSnapshot.forEach(
            (doc) => {
                PessoaTemp.push(doc.data())
            },
            setResultado(PessoaTemp)
        );

    }

    useEffect(
        () => {
            buscarPessoa(busca);
        }, [busca]
    )
    return (
        <View style = {Styles.txtInputDiv}>
            <TextInput
            label="Faça sua Busca"
            value={busca}
            onChangeText={setBusca}
            />
            <FlatList
                data={resultado}
                renderItem={({item}) => <Text>Pessoa: {item.nome}, quantidade: {item.quantidade}, preço: {item.preco}</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}