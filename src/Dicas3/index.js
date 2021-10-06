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
            <TitleApp>Dica 3</TitleApp>
            <SubText>Comunicação</SubText>
            <SubView>
                <SubText>Aprenda a jogar como o jogo foi 
                feito para ser jogado: se comunicando.
                Claro que com times montados aleatoriamente é difícil manter a sincronia, 
                mas faça seu melhor e comunique tudo que for relevante.
                </SubText>
            </SubView>
            <SubButton>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas2')}
                >
                    <Image source={require('./../../assets/back-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas4')}
                >
                    <Image source={require('./../../assets/next-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </SubButton>
        </Container>
    );
}