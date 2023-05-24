import { QuerySnapshot, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";
import { FlatList } from "react-native-web";
import Styles from "../utils/style";


export default function ProdutoScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarProduto() {
        const ProdutoRef = collection(db, 'produto');
        const buscarProduto = query(ProdutoRef, where('nome', '==', busca));
        const resultadoSnapshot = await getDocs(buscarProduto);
        const produtoTemp = [];
        resultadoSnapshot.forEach(
            (doc) => {
                produtoTemp.push(doc.data())
            },
            setResultado(produtoTemp)
        );

    }

    useEffect(
        () => {
            buscarProduto(busca);
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
                renderItem={({item}) => <Text>Produto: {item.nome}, preço: {item.preco}, quantidade {item.quantidade}</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}