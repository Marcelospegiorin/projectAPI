import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';

import {
  Container,
  Title,
  WrapScroll,
  WrapItem,
  ItemImage,
  ItemName,
} from './style';

export default function Items() {
  const [items, setItems] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadItems() {
      const { data } = await axios.get(
        'http://ddragon.leagueoflegends.com/cdn/10.3.1/data/en_US/item.json'
      );

      setItems(await Object.entries(data.data));
    }
    loadItems();
  }, []);

  return (
    <Container>
      <Title>Itens</Title>
      <WrapScroll>
        {items.map(item => (
          <WrapItem>
            <ItemImage
              source={{
                uri: `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/item/${item[1].image.full}`,
              }}
            />
            <ItemName>{item[1].name}</ItemName>
          </WrapItem>
        ))}
      </WrapScroll>
    </Container>
  );
}
