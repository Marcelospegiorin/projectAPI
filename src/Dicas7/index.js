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
            <TitleApp>Dica 7</TitleApp>
            <SubText>Itens</SubText>
            <SubView>
                <SubText>
                    Itens são muito importantes para deixar seu personagem forte. 
                    Os iniciantes tem uma vantagem,
                    durante o próprio jogo são mostrados itens favoráveis ao personagem. 
                    Permitindo não gastar tanto tempo, no início, para estudar as fórmulas.
                </SubText>
            </SubView>
            <SubButton>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas6')}
                >
                    <Image source={require('./../../assets/back-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas8')}
                >
                    <Image source={require('./../../assets/next-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </SubButton>
        </Container>
    );
}