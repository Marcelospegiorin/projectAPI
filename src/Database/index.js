import React from 'react'
import {Image} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar'

// ESTILIZAÇÃO

import {
    Container,
    TitleApp,
    Button,
    SubText
} from './style'

export default function Database() {
        
    const navigation = useNavigation()
    
    return (
        <Container>
            <StatusBar style="light" hidden={true}/>
            <TitleApp>Database</TitleApp>
            
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

        </Container>
    );
}
