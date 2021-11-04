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

export default function Dicas() {

    const navigation = useNavigation()

    return(
        <Container>
            <View>
                <TitleApp>Dica 2</TitleApp>
                <SubText>Minimapa</SubText>
            </View> 
            <SubView>
                <SubText>Sério, no LoL,
                SEMPRE olhe 
                para o minimapa.
                Fique atento ao mínimo sinal de inimigos
                aparecendo nele para reagir da
                melhor forma possível. Jogadores são pegos de surpresa em 
                ganks porque não olharam o minimapa.</SubText>
            </SubView>
            <SubButton>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas1')}
                >
                    <Image source={require('../../../assets/back-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas3')}
                >
                    <Image source={require('../../../assets/next-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </SubButton>
        </Container>
    );
}