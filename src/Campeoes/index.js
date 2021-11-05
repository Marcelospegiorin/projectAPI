import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';
import {LogBox, View} from 'react-native'

import {
  Container,
  Title,
  WrapScroll,
  WrapItem,
  ItemImage,
  ItemName,
  ViewNameItem,
  ViewImage,
  TitleName,
  ContainerLoading,
  InputView,
  Input
} from './style';


export default function Campeoes() {

  
  const [champion, setChampions] = useState([]);
  const [nomeFiltrado, setNomeFiltrado] = useState('')
  const [loading ,setLoading] = useState(true)

  LogBox.ignoreLogs(['Each']);

  useEffect(() => {
    async function loadItems() {
      const { data } = await axios.get(
        'http://ddragon.leagueoflegends.com/cdn/11.22.1/data/pt_BR/champion.json'
      );
      setLoading(false)
      setChampions(await Object.entries(data.data));
    }
    loadItems();
  }, []);

  const listaFiltrada = nomeFiltrado
    ? champion.filter(champs =>
        champs[1].name.toLowerCase().includes(nomeFiltrado.toLowerCase())
      )
  : champion;

  return (
    <Container>
      <Title>Campeões</Title>
      <View style={{alignItems: 'center'}}>
        <InputView>
          <Input 
            placeholder="Digite o nome do campeão"
            onChangeText={(text) => setNomeFiltrado(text)}
          />
        </InputView>
      </View>
      {loading == true
      ?
        <ContainerLoading>
         <ActivityIndicator size={100} color='#CAA92E' animating={true}/>
        </ContainerLoading>
      :
        <WrapScroll>

          {listaFiltrada.map(item => (
            <WrapItem >
              <ViewImage>
                <ItemImage
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${item[1].image.full}`,
                  }}
                />
              </ViewImage>
            
              <ViewNameItem>
                <TitleName>{item[1].name}</TitleName>
                <ItemName>{item[1].title}</ItemName>
              </ViewNameItem>
            </WrapItem>
          ))}
        </WrapScroll>
      }
    </Container>
  );
}
