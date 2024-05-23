import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CORES from './comum/constantes/cores';
import TELAS from './comum/constantes/telas';
import TelaContador from './telas/TelaContador/TelaContador';
import TelaPrincipal from './telas/TelaPrincipal/TelaPrincipal';
import TelaFormulario from './telas/TelaFormulario/TelaFormulario';
import TelaListaTarefas from './telas/TelaListaTarefas/TelaListaTarefas';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './telas/TelaLogin/TelaLogin';
import TelaNovoUsuario from './telas/TelaNovoUsuario/TelaNovoUsuario';

const Stack = createStackNavigator()

const estilos = StyleSheet.create({
  todoApp: {
    flex: 1, // Deixa a tela preenchida
    backgroundColor: CORES.FUNDO_PADRAO,
  },
});

export default function App() {
  return (
    <View style={estilos.todoApp}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ cardStyle: { flex: 1 } }}>
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} />
          
            <Stack.Screen name={TELAS.TELA_NOVO_USUARIO} component={TelaNovoUsuario} />
          </Stack.Group>

          <Stack.Screen name={TELAS.TELA_PRINCIPAL} component={TelaPrincipal} options={{ title: 'Principal', headerLeft: null }} />
          <Stack.Screen name={TELAS.TELA_CONTADOR} component={TelaContador} options={{ title: 'Contador' }} />
          <Stack.Screen name={TELAS.TELA_FORMULARIO} component={TelaFormulario} options={{ title: 'Formulário' }} />
          <Stack.Screen name={TELAS.TELA_LISTA_TAREFAS} component={TelaListaTarefas} options={{ title: 'Lista Terefas' }} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}
