import { Text ,View } from "react-native-web";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from '../../comum/constantes/telas';

const TelaPrincipal = (props) => {
    console.log(props);

    return (
        <View>
            <BotaoCustomizado cor='primaria' onPress={() => props.navigation.navigate(TELAS.TELA_CONTADOR)}>
                Tela Contador
            </BotaoCustomizado>            
            <BotaoCustomizado cor='secundaria' onPress={() => props.navigation.navigate(TELAS.TELA_FORMULARIO)}>
                Tela Formulário
            </BotaoCustomizado>
            <BotaoCustomizado cor='primaria' onPress={() => props.navigation.navigate(TELAS.TELA_LISTA_TAREFAS)}>
        Lista de Tarefas
      </BotaoCustomizado>
        </View>
    )
}


export default TelaPrincipal;