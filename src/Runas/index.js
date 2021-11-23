import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator } from 'react-native-paper';
import { Image } from 'react-native';

import {
  Container,
  Title,
  WrapScroll,
  WrapItem,
  ItemImage,
  ItemName,
  NomeRuna,
  ViewNameItem,
  ViewImage,
  ContainerLoading,
} from './style';

import {
  Modal,
  ModalContent,
  ContainerModal
} from './modal';



export default function Runas() {
  const [runas, setRunas] = useState([]);

  const navigation = useNavigation();

  const [loading ,setLoading] = useState(true)

  const [modalIsVisible, setModalIsVisible] = useState(false)

  useEffect(() => {
    async function loadItems() {
      const { data } = await axios.get(
        'http://ddragon.leagueoflegends.com/cdn/11.22.1/data/pt_BR/runesReforged.json'
      );
      setLoading(false)
      setRunas(data);
    }
    loadItems();
  }, []);

  const [itemSelected, setItemSelected] = useState([
    {name: ''},
    {shortDesc: ''}
  ])

  console.log(itemSelected)

  function OpenModal(item) {
    setItemSelected(item)
    setModalIsVisible(true)
  }

  return (
    <Container>
      <Title>Runas</Title>
      {loading == true
      ?
        <ContainerLoading>
         <ActivityIndicator size={100} color='#CAA92E' animating={true}/>
        </ContainerLoading>
      :
        <WrapScroll>
          <WrapItem>
          <Image source={require('./../../assets/dicas-icon.png')} style={{width: 47, height: 47, marginLeft: 25,
  marginRight: 12}}/>
            <ItemName
              onPress={() =>
                navigation.navigate('ComoUsar')}
            >Como usar?</ItemName>
          </WrapItem>
          {runas.map(item => (
            <WrapItem
              onPress={() =>
              navigation.navigate('Arvore',{arvore:item})}
              key={item.name}
            >
              <ViewImage>
                <ItemImage
                  source={{
                    uri: `https://ddragon.canisback.com/img/${item.icon}`,
                  }}
                />
                <ItemName>{item.name}</ItemName>
              </ViewImage>
            </WrapItem>
          ))}
        </WrapScroll>
      }
    </Container>
  );
}