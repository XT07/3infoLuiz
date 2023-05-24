import { QuerySnapshot, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";
import { FlatList } from "react-native-web";
import Styles from "../utils/style";


export default function CorScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarCor() {
        const CorRef = collection(db, 'cor');
        const buscarCor = query(CorRef, where('nome', '==', busca));
        const resultadoSnapshot = await getDocs(buscarCor);
        const coresTemp = [];
        resultadoSnapshot.forEach(
            (doc) => {
                coresTemp.push(doc.data())
            },
            setResultado(coresTemp)
        );

    }

    useEffect(
        () => {
            buscarCor(busca);
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
                renderItem={({item}) => <Text>Cor: {item.nome}</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}