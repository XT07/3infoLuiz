import { QuerySnapshot, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";
import { FlatList } from "react-native-web";
import Styles from "../utils/style";


export default function AnimalScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarAnimal() {
        const AnimalRef = collection(db, 'animal');
        const buscarAnimal = query(AnimalRef, where('nome', '==', busca));
        const resultadoSnapshot = await getDocs(buscarAnimal);
        const AnimalTemp = [];
        resultadoSnapshot.forEach(
            (doc) => {
                AnimalTemp.push(doc.data())
            },
            setResultado(AnimalTemp)
        );

    }

    useEffect(
        () => {
            buscarAnimal(busca);
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
                renderItem={({item}) => <Text>Animal: {item.nome}, quantidade: {item.quantidade}, preço: {item.preco}</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}