import { useEffect, useState } from "react";
import { FlatList, View } from "react-native"
import ListagemVazia from "../../comum/componentes/ListagemVazia/ListagemVazia";
import SeparadorListagem from "../../comum/componentes/SeparadorListagem/SeparadorListagem";
import api from '../../comum/servicos/api';
import ItemListagemUsuarios from "./ItemListagemUsuarios";

const TelaListagemUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const pegarUsuariosViaAPI = async () => {
            const response = await api.get('/usuarios')
            setUsuarios(response.data)
        };

        pegarUsuariosViaAPI();
    }, [])

    return (
        <View>
            <FlatList
                data={usuarios}
                renderItem={ItemListagemUsuarios}
                ListEmptyComponent={ListagemVazia}
                ItemSeparatorComponent={SeparadorListagem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default TelaListagemUsuarios;