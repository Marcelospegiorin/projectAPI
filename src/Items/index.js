import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator } from 'react-native-paper';

import {
  Container,
  Title,
  WrapScroll,
  WrapItem,
  ItemImage,
  ItemName,
  ViewNameItem,
  ViewImage,
  ContainerLoading,
} from './style';

import {
  Modal,
  ModalContent,
  ContainerModal
} from './modal';

export default function Items() {
  const [items, setItems] = useState([]);

  const navigation = useNavigation();

  const [loading ,setLoading] = useState(true)

  const [modalIsVisible, setModalIsVisible] = useState(false)

  useEffect(() => {
    async function loadItems() {
      const { data } = await axios.get(
        'http://ddragon.leagueoflegends.com/cdn/11.22.1/data/pt_BR/item.json'
      );
      setLoading(false)
      setItems(await Object.entries(data.data));
    }
    loadItems();
  }, []);

  const [itemSelected, setItemSelected] = useState([
    {teste: ''},
    {gold: ''}
  ])

  console.log(itemSelected)

  function OpenModal(item) {
    setItemSelected(item)
    setModalIsVisible(true)
  }

  return (
    <Container>
      <Title>Itens</Title>
      {loading == true
      ?
        <ContainerLoading>
         <ActivityIndicator size={100} color='#CAA92E' animating={true}/>
        </ContainerLoading>
      :
        <WrapScroll>

          {items.map(item => (
            <WrapItem onPress={() => OpenModal(item)}>
              <ViewImage>
                <ItemImage
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${item[1].image.full}`,
                  }}
                />
              </ViewImage>
            
              <ViewNameItem>
                <ItemName>{item[1].name}</ItemName>
              </ViewNameItem>
            </WrapItem>
          ))}
        </WrapScroll>
      }

      <Modal 
        animationType="slide"
        visible={modalIsVisible}
        transparent={true}
        onRequestClose={() => setModalIsVisible(false)}
      >
        <ModalContent>
          <ContainerModal>
            <ItemName>{itemSelected[1].gold.base}</ItemName>
            <ItemName>{itemSelected[1].plaintext}</ItemName>
          </ContainerModal>
        </ModalContent>
      </Modal>

    </Container>
  );
}
