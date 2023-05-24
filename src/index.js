import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import PessoaScreen from "./screens/PessoaScreen";
import FrutaScreen from "./screens/FrutaScreen";
import AnimalScreen from "./screens/AnimalScreen";
import CarroScreen from "./screens/CarroScreen";
import CorScreen from "./screens/CorScreen";
import ProdutoScreen from "./screens/ProdutoScreen";


const Stack = createNativeStackNavigator();

    export default function RootNavigation() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="PessoaScreen" component={PessoaScreen} />
                    <Stack.Screen name="FrutaScreen" component={FrutaScreen} />
                    <Stack.Screen name="AnimalScreen" component={AnimalScreen} />
                    <Stack.Screen name="CarroScreen" component={CarroScreen} />
                    <Stack.Screen name="CorScreen" component={CorScreen} />
                    <Stack.Screen name="ProdutoScreen" component={ProdutoScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

            