import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/core'
import {Image} from 'react-native'

import {
    Container,
    TitleApp,
    Button,
    SubView,
    SubText,
    SubButton
} from './style'

export default function Dicas() {

    const navigation = useNavigation()

    return(
        <Container>
            <StatusBar style="light" hidden={true}/>
            <TitleApp>Dica 8</TitleApp>
            <SubText>Habilidades</SubText>
            <SubView>
                <SubText>
                    Defina uma posição para aprender a jogar, escolha um herói, 
                    conheça as habilidades e pratique. 
                    Cada Skill do personagem tem sua função específica 
                    no combate: deixar todo mundo resistente, 
                    iniciar uma briga, aplicar muito dano, paralisar os adversários, etc…
                </SubText>
            </SubView>
            <SubButton>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas7')}
                >
                    <Image source={require('../../../assets/back-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas9')}
                >
                    <Image source={require('../../../assets/next-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </SubButton>
        </Container>
    );
}