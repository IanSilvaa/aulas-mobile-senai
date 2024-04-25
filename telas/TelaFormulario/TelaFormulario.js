import React from 'react';
import { View } from 'react-native';
import CampoTextoCustomizado from '../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado';
import estilos from './TelaFormularioStyle';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const TelaFormulario = () => {
  const [campoNome, setCampoNome] = React.useState('');
  const [campoSobrenome, setCampoSobrenome] = React.useState('');
  const [campoCPF, setcampoCPF] = React.useState('');

  const salvar = () => {
    console.log('Salvar:', { campoNome, campoSobrenome, campoCPF });
  };

  return (
    <View style={estilos.container}>

      <View style={{alignItems: 'center'}}>
        <FontAwesome5 name="tv" size={45} color="green"/>
      </View>

      <CampoTextoCustomizado label='Nome' value={campoNome} onChangeText={setCampoNome} />
      <CampoTextoCustomizado label='Sobrenome' value={campoSobrenome} onChangeText={setCampoSobrenome} />
      <CampoTextoCustomizado label='CPF' inputMode='numeric' value={campoCPF} onChangeText={setcampoCPF} />
      <BotaoCustomizado onPress={salvar}>Salvar</BotaoCustomizado>
    </View>
  );
};

export default TelaFormulario;