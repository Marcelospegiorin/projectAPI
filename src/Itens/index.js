import React from 'react'
import { ScrollView } from 'react-native';
import { Container, Button, ViewTitulo, TituloItens, TextButton } from './style'
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';

export default function Itens() {

    const navigation = useNavigation()

    function voltarPagina(){
        navigation.goBack()
    }

    return (
        <Container>
            <ViewTitulo>
                <TituloItens>Itens</TituloItens>
            </ViewTitulo>
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                
            </ScrollView>
            <Button
                onPress={() => voltarPagina()}
            >
                <TextButton>Home</TextButton>
            </Button>
        </Container>
    );
}
