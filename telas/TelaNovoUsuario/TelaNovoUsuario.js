import { Text, View } from "react-native"
import estilos from "./TelaNovoUsuarioStyle"
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import TELAS from "../../comum/constantes/telas"

const TelaNovoUsuario = (props) => {

    return(
        <View style={estilos.container}>
            <View style={estilos.containerTituloNovoUsuario}>
                <Text style={estilos.tituloNovoUsuario}>Novo Usuário</Text>
            </View>
    
    
            <CampoTextoCustomizado label='Nome'/>
            <CampoTextoCustomizado label='Email'/>
            <CampoTextoCustomizado label='Senha'/>

            <BotaoCustomizado cor='secundaria'>Salvar</BotaoCustomizado>
            <BotaoCustomizado
                onPress={() => {
                    props.navigation.navigate(TELAS.TELA_LOGIN);
                }}
            >
                Já tenho uma conta
            </BotaoCustomizado>
        </View>
    )
}

export default TelaNovoUsuario;