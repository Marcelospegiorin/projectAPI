import React from 'react'
import { ScrollView } from 'react-native';
import { Container, Button, ViewTitulo, ListaCampeoes, TextButton } from './style'
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';

export default function index() {


    const navigation = useNavigation()

    function voltarPagina(){
        navigation.goBack()
    }

    return (
        <Container>
            <ViewTitulo>
                <ListaCampeoes>Lista de Campeões</ListaCampeoes>
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
