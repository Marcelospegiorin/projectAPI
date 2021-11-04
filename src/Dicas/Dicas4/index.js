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
            <TitleApp>Dica 4</TitleApp>
            <SubText>Creep Score</SubText>
            <SubView>
                <SubText>
                Creep Score, é o número de minions que VOCÊ matou. 
                Seu CS só aumenta se o seu campeão foi o 
                responsável pelo golpe que matou o minion. 
                Seu foco nunca deve ser atacar loucamente 
                os minions inimigos, mas apenas dar o último golpe.
                </SubText>
            </SubView>
            <SubButton>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas3')}
                >
                    <Image source={require('../../../assets/back-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate('Dicas5')}
                >
                    <Image source={require('../../../assets/next-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </SubButton>
        </Container>
    );
}