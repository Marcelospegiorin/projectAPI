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
          {runas.map(item => (

            <WrapItem onPress={() => OpenModal(item)}>
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

      <Modal 
        animationType="slide"
        visible={modalIsVisible}
        transparent={true}
        onRequestClose={() => setModalIsVisible(false)}
      >
        <ModalContent>
          <ContainerModal>
            <NomeRuna>Nome da runa: </NomeRuna>
            <ItemName>Descrição: </ItemName>
          </ContainerModal>
        </ModalContent>
      </Modal>

    </Container>
  );
}
