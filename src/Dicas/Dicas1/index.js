import React from 'react'
import { useNavigation } from '@react-navigation/core'
import {Image, View} from 'react-native'

import {
    Container,
    TitleApp,
    Button,
    SubView,
    SubText,
    SubButton
} from './style'

export default function Dicas1() {

    const navigation = useNavigation()

    return(
        <Container>
            <View>
                <TitleApp>Dicas</TitleApp>
                <SubText>Posições</SubText>
            </View>
            <SubView>
                <SubText>Top: fica na rota superior.</SubText>
                <SubText>Mid: fica na rota do meio.</SubText>
                <SubText>ADC: fica na rota inferior.</SubText>
                <SubText>Suporte: acompanha o ADC.</SubText>
                <SubText>Jungle: ficam nas selvas.</SubText>
            </SubView>
            <View
                style={{flexDirection: 'row', marginBottom: 20}}
            >
                <Button
                    onPress={() =>
                        navigation.navigate('Home')}
                >
                    <Image source={require('../../../assets/home-icon2.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas2')}
                >
                    <Image source={require('../../../assets/next-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </View>         
        </Container>
    );
}