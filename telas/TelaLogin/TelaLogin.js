import { useState } from "react";
import { View, Text } from "react-native";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import estilos from "./TelaLoginStyle";
import TELAS from "../../comum/constantes/telas"

const TelaLogin = (props) => {
    const [campoUsuario, setCampoUsuario] = useState('')
    const [campoSenha, setCampoSenha] = useState('')

    const entrar = async () => {
        try {
            if (!campoUsuario.trim() || !campoSenha.trim()) {
                alert('Preencha os campos!');
                return;
            }

            const response = await api.post('/logar', { email: campoUsuario, senha: campoSenha });

            await atualizarItemStorage(CHAVES_SOTORAGE.USUARIO_LOGADO, response.data);
            props.navigation.navigate(TELAS.TELA_PRINCIPAL);
        } catch (error) {
            alert(error.response.data);
        }
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.containerTituloEntrar}>
                <Text style={estilos.tituloEntrar}>Entrar</Text>
            </View>
            <CampoTextoCustomizado label='E-mail' value={campoUsuario} onChangeText={setCampoUsuario} />
            <CampoTextoCustomizado label='Senha' value={campoSenha} onChangeText={setCampoSenha} />
            <BotaoCustomizado cor='primaria' onPress={entrar}>
                Entrar
            </BotaoCustomizado>
            <BotaoCustomizado
                onPress={() => {
                    props.navigation.navigate(TELAS.TELA_NOVO_USUARIO);
                }}
            >
                Novo Cadastro
            </BotaoCustomizado>
        </View>
    );
};
export default TelaLogin;