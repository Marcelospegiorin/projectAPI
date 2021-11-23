import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator } from 'react-native-paper';
import { View, Image } from 'react-native';

import {
  Container,
  Title,
  ItemName,
  SubView,
  ViewImage
} from './style';

export default function ComoUsar() {

  return (
    <Container>
      <Title>Como usar?</Title>
      <SubView>
        <Image source={require('../../../assets/Comousar.png')} style={{width: 170, height: 170, marginBottom: 5, marginTop: 5}}/>
        <ItemName>
          Runas são melhorias que adicionam novas habilidades ou buffs ao campeão.
          O jogador pode predefinir suas runas antes do início da partida e durante a seleção do campeão.
          Cada página rúnica contém runas de dois caminhos: um primário e um secundário. 
          O caminho principal tem uma pedra angular e três runas menores. 
          O caminho secundário possui duas runas menores.
        </ItemName>
      </SubView>
    </Container>
  );
}