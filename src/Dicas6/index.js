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
            <TitleApp>Dica 6</TitleApp>
            <SubText>Farme</SubText>
            <SubView>
                <SubText>
                Da metade para o final da partida é comum 
                que você foque em ganks, destruir torres ou em matar o dragão. 
                Tente se manter farmando em todo momento em que não 
                estiver participando ativamente das lutas.
                O dinheiro é sempre bem-vindo.
                </SubText>
            </SubView>
            <SubButton>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas5')}
                >
                    <Image source={require('./../../assets/back-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas7')}
                >
                    <Image source={require('./../../assets/next-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </SubButton>
        </Container>
    );
}