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

export default function Home() {
        
    const navigation = useNavigation()
    
    return (
        <Container>
            <StatusBar style="light" hidden={true}/>
            <TitleApp>Guia of Legends</TitleApp>
            
            <Button>
                <SubText>Guia</SubText>
                <Image source={require('./../../assets/logoLol-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
            </Button>
            
            <Button>
                <SubText>O Game</SubText>
                <Image source={require('./../../assets/gamepad-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
            </Button>
                    
            <Button
                onPress={() =>
                navigation.navigate('Campeoes')}
            >
                <SubText>Campeões</SubText>
                <Image source={require('./../../assets/trofeu-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
            </Button>
            
            <Button
                onPress={() =>
                navigation.navigate('Itens')}
            >
                <SubText>Itens</SubText>
                <Image source={require('./../../assets/trofeu-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
            </Button>

            <Button
                onPress={() =>
                navigation.navigate('Feiticos')}
            >
                <SubText>Feitiços</SubText>
                <Image source={require('./../../assets/trofeu-icon.png')} style={{width: 50, height: 50, marginLeft: 0}}/>
            </Button>

            <Button
                onPress={() =>
                navigation.navigate('Runas')}
            >
                <SubText>Runas</SubText>
                <Image source={require('./../../assets/trofeu-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
            </Button>

            <Button>
                <SubText>Dicas</SubText>
                <Image source={require('./../../assets/tips-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
            </Button>
        </Container>
    );
}