import { StyleSheet, View, Text } from "react-native";
import CORES from "../../comum/constantes/cores";

    const estilos = StyleSheet.create({
        container: {
            height: 48,
            backgroundColor: CORES.CINZA,
        },
    });

const ItemListagemUsuarios = (props) => {
    console.log(props);

    return (
        <View style={estilos.container}>
            <Text>{props.item.nome}</Text>
        </View>
    )
};

export default ItemListagemUsuarios;