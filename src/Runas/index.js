import React from 'react'
import { ScrollView } from 'react-native';
import { Container, Button, ViewTitulo, TituloRunas, TextButton } from './style'
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';

export default function Runas() {

    const navigation = useNavigation()

    function voltarPagina(){
        navigation.goBack()
    }

    return (
        <Container>
            <ViewTitulo>
                <TituloRunas>Runas</TituloRunas>
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
