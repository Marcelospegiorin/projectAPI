import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator } from 'react-native-paper';

import {
  Container,
  Title,
  WrapScroll,
  WrapItem,
  SpellImage,
  SpellName,
  NomeFeitico,
  ViewNameSpell,
  ViewImage,
  ContainerLoading,
  ItemIcon,
  SpellName2
} from './style';

import {
  Modal,
  ModalContent,
  ContainerModal
} from './modal';

export default function Feiticos() {
  const [items, setItems] = useState([]);

  const navigation = useNavigation();

  const [loading ,setLoading] = useState(true)

  const [modalIsVisible, setModalIsVisible] = useState(false)

  useEffect(() => {
    async function loadItems() {
      const { data } = await axios.get(
        'http://ddragon.leagueoflegends.com/cdn/11.22.1/data/pt_BR/summoner.json'
      );
      setLoading(false)
      setItems(await Object.entries(data.data));
    }
    loadItems();
  }, []);

  const [itemSelected, setItemSelected] = useState([
    {name: ''},
    {description: ''},
    {cooldown: ''}
  ])

  function OpenModal(item) {
    setItemSelected(item)
    setModalIsVisible(true)
  }

  return (
    <Container>
      <Title>Feitiços de Invocador</Title>
      {loading == true
      ?
        <ContainerLoading>
         <ActivityIndicator size={100} color='#CAA92E' animating={true}/>
        </ContainerLoading>
      :
        <WrapScroll>

          {items.map(item => (
            <WrapItem onPress={() => 
              OpenModal(item) }
              key={item.name}
            >
              <ViewImage>
                <SpellImage
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/${item[1].image.full}`,
                  }}
                />
              </ViewImage>
              <ViewNameSpell>
                <SpellName>{item[1].name}</SpellName>
              </ViewNameSpell>
            </WrapItem>
          ))}
        </WrapScroll>
      }
      {
        itemSelected[1].image ? (
            <Modal 
              animationType="slide"
              visible={modalIsVisible}
              transparent={true}
              onRequestClose={() => setModalIsVisible(false)}
            >
              <ModalContent>
                <ContainerModal>
                  <NomeFeitico>Nome do feitiço: {itemSelected[1].name}</NomeFeitico>
                  <ItemIcon source={{
                        uri: `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/${itemSelected[1].image.full}`,
                  }}/>
                  <SpellName2>Descrição: {itemSelected[1].description}</SpellName2>
                  <SpellName2>Tempo de recarga: {itemSelected[1].cooldown} segundos</SpellName2>
                </ContainerModal>
              </ModalContent>
            </Modal>
          ) : null
        }
    </Container>
  );
}
