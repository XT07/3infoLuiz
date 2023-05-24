import { QuerySnapshot, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";
import { FlatList } from "react-native-web";
import Styles from "../utils/style";


export default function CarroScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarCarros() {
        const CarroRef = collection(db, 'carro');
        const buscarCarro = query(CarroRef, where('nome', '==', busca));
        const resultadoSnapshot = await getDocs(buscarCarro);
        const carrosTemp = [];
        resultadoSnapshot.forEach(
            (doc) => {
                carrosTemp.push(doc.data())
            },
            setResultado(carrosTemp)
        );

    }

    useEffect(
        () => {
            buscarCarros(busca);
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
                renderItem={({item}) => <Text>Carro: {item.nome}, quantidade: {item.quantidade}, preço: {item.preco}</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}