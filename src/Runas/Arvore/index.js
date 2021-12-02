import React, { useState } from 'react';
import { useRoute } from '@react-navigation/core';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import {
  Container,
  Title,
  ItemImage,
  NomeSlot,
  ItemTitulo,
  ItemIcon,
  DescricaoRunas
} from './style';

import {
  Modal,
  ModalContent,
  ContainerModal,
} from './modal';


export default function Arvore() {

    const route = useRoute()
    const {params:{arvore}} = route

    const [modalIsVisible, setModalIsVisible] = useState(false)

    const [selectRune, setSelectRune] = useState()

    return (
        <Container>
        <Title>Runas</Title>
            <View style={{flex: 1, flexDirection: "column",}}>
                {
                  arvore.slots.map((slot, slotIndex) => (
                    <View style={{flex: 1, flexDirection: "column", paddingVertical: 20, borderColor: "#1BCCE5",
                    borderRadius: 10, borderWidth: 2, marginBottom: 20, marginRight: 20, marginLeft: 20,}} key={`slot-${slotIndex}`}>
                      <NomeSlot>{`Slot ${slotIndex}`}</NomeSlot>
                      <View style={{flex: 1, flexDirection: "row", justifyContent: "center",}}>
                        {
                          slot.runes.map((rune) => (
                            <TouchableOpacity
                              onPress={() => {
                                setModalIsVisible(true)
                                setSelectRune(rune)
                              }}
                              key={rune.name}
                            >
                              <ItemImage
                                source={{
                                    uri: `https://ddragon.canisback.com/img/${rune.icon}`,
                                }}                                
                            />
                            </TouchableOpacity>
                          ))
                        }
                      </View>
                    </View>
                  ))
                }
                {
                  selectRune ? (
                    <Modal 
                      animationType="slide"
                      visible={modalIsVisible}
                      transparent={true}
                      onRequestClose={() => setModalIsVisible(false)}
                      onDismiss={() => setModalIsVisible(false)}
                    >
                      <ModalContent>
                        <ContainerModal>
                          <ItemTitulo>{selectRune.name}</ItemTitulo>
                          <ItemIcon source={{
                              uri: `https://ddragon.canisback.com/img/${selectRune.icon}`,
                          }}/>
                          <DescricaoRunas>
                          Ao causar dano a um Campeão com uma habilidade, um cometa é lançado onde ele estiver.
                          </DescricaoRunas>

                        </ContainerModal>
                      </ModalContent>
                    </Modal>
                  ) : null
                }                
            </View>
        </Container>
    );
}