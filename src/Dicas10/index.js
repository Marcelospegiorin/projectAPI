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
            <TitleApp>Dica 10</TitleApp>
            <SubText>F1~F5</SubText>
            <SubView>
                <SubText>
                Muitos jogadores não sabem, mas as teclas F1, F2, F3, F4 e F5 
                movem a câmera instantaneamente para os outros membros do time. 
                Essa dica é útil para junglers, além de limpar as 
                jungles, são os responsáveis por rotacionar e, 
                ajudar no ganks.
                </SubText>
            </SubView>
            <SubButton>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas9')}
                >
                    <Image source={require('./../../assets/back-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate('Home')}
                >
                    <Image source={require('./../../assets/home-icon2.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </SubButton>
        </Container>
    );
}