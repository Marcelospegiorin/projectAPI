import React from 'react'
import {Image} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar'

// ESTILIZAÇÃO

import {
    Container,
    TitleDatabase,
    Button,
    SubText,
    ButtonHome,
    TextButton
} from './style'

export default function Database() {
        
    const navigation = useNavigation()
    
    function voltarPagina(){
        navigation.goBack()
    }

    return (
        <Container>
            <StatusBar style="light" hidden={true}/>
            <TitleDatabase>Database</TitleDatabase>
            
            <Button>
                <SubText>Campeões</SubText>
            </Button>
            
            <Button>
                <SubText>Itens</SubText>
            </Button>

            <Button>
                <SubText>Feitiços</SubText>
            </Button>

            <Button>
                <SubText>Runas</SubText>
            </Button>

            <ButtonHome
                onPress={() => voltarPagina()}
            >
                <TextButton>Home</TextButton>
            </ButtonHome>

        </Container>
    );
}
