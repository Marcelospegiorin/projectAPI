import React from 'react'
import { ScrollView } from 'react-native';
import { Container, Button, ViewTitulo, FeiticosInvocador, TextButton } from './style'
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';

export default function Feiticos() {

    const navigation = useNavigation()

    function voltarPagina(){
        navigation.goBack()
    }

    return (
        <Container>
            <ViewTitulo>
                <FeiticosInvocador>Feitiços de Invocador</FeiticosInvocador>
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
