import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator } from 'react-native-paper';
import { LogBox } from 'react-native';

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
  ItemTitulo,
  ItemName2,
  Input,
  InputView,
  InputSubView,
  ItemIcon,
} from './style';

import {
  Modal,
  ModalContent,
  ContainerModal,
  NomeItem
} from './modal'

export default function Itens() {

  LogBox.ignoreLogs(['Each']);

  const [items, setItems] = useState([]);

  const navigation = useNavigation();

  const [loading ,setLoading] = useState(true)

  const [itemFiltrado, setItemFiltrado] = useState('')
  const [modalIsVisible, setModalIsVisible] = useState(false)


  useEffect(() => {
    async function loadItems() {
      const { data } = await axios.get(
        'http://ddragon.leagueoflegends.com/cdn/11.23.1/data/pt_BR/item.json'
      );
      setLoading(false)
      setItems(await Object.entries(data.data));
    }
    loadItems();
  }, []);

  const listaFiltrada = itemFiltrado
    ? items.filter(itens =>
        itens[1].name.toLowerCase().includes(itemFiltrado.toLowerCase())
      )
  : items;

  const [itemSelected, setItemSelected] = useState([
    {name: ''},
    {gold: ''},
  ])
  function OpenModal(item) {
    setItemSelected(item)
    setModalIsVisible(true)
  }

  return (
    <Container>
      <Title>Itens</Title>
      <InputView>
        <InputSubView>
          <Input 
            placeholder='Insira o nome do item'
            onChangeText={(text) => setItemFiltrado(text)}
          />
        </InputSubView>
      </InputView>
      {loading == true
      ?
        <ContainerLoading>
         <ActivityIndicator size={100} color='#CAA92E' animating={true}/>
        </ContainerLoading>
      :
        <WrapScroll>

          {listaFiltrada.map(item => (
            <WrapItem onPress={() => OpenModal(item)} key={item.name}>
              <ViewImage>
                <ItemImage
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/${item[1].image.full}`,
                  }}
                />
              </ViewImage>
            
              <ViewNameItem>
                <ItemName>{item[1].name}</ItemName>
              </ViewNameItem>
            </WrapItem>
          )
          )}
        </WrapScroll>
      }
    {
      itemSelected[1].image ? 
      (
        <Modal 
          animationType="slide"
          visible={modalIsVisible}
          transparent={true}
          onRequestClose={() => setModalIsVisible(false)}
          onDismiss={() => setModalIsVisible(false)}
        >
          <ModalContent>
            <ContainerModal>
              <ItemTitulo>{itemSelected[1].name}</ItemTitulo>
              <ItemIcon source={{
                  uri: `http://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/${itemSelected[1].image.full}`,
              }}/>
              <ItemName2>Preço de compra: {itemSelected[1].gold.base} de ouro</ItemName2>
              <ItemName2>Descrição: {itemSelected[1].plaintext}</ItemName2>
            </ContainerModal>
          </ModalContent>
        </Modal>
      ) : null
    }
    </Container>
  );
}