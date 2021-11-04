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
            <TitleApp>Dica 5</TitleApp>
            <SubText>Ritmo</SubText>
            <SubView>
                <SubText>
                TODO jogador iniciante em LoL pensa que quanto 
                mais rápido matar os minions inimigos, melhor. Não caia nessa.
                Você vai aprender os momentos de empurrar a lane de forma natural, 
                mas no início, lembre-se você não precisa ir com tudo logo no início.
                </SubText>
            </SubView>
            <SubButton>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas4')}
                >
                    <Image source={require('../../../assets/back-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas6')}
                >
                    <Image source={require('../../../assets/next-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </SubButton>
        </Container>
    );
}