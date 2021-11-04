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
            <TitleApp>Dica 9</TitleApp>
            <SubText>Ladrão</SubText>
            <SubView>
                <SubText>
                    Esta é uma regra que vale não só para o League of Legends,
                    mas também para todos os outros jogos multiplayer. 
                    Roubar o kill, ou a morte, de algum parceiro pode gerar
                    uma briga desnecessária no meio da partida, portanto, tome cuidado!
                </SubText>
            </SubView>
            <SubButton>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas8')}
                >
                    <Image source={require('../../../assets/back-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas10')}
                >
                    <Image source={require('../../../assets/next-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </SubButton>
        </Container>
    );
}