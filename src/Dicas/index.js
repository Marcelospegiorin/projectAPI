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
            <TitleApp>Dicas</TitleApp>
            <SubText>Test</SubText>
            <SubView>
                <SubText>Test</SubText>
                <SubText>Test</SubText>
                <SubText>Test</SubText>
                <SubText>Test</SubText>
                <SubText>Test</SubText>
                <SubText>Test</SubText>
            </SubView>
            <SubButton>
                <Button
                    onPress={() =>
                        navigation.navigate('Home')}
                >
                    <Image source={require('./../../assets/home-icon2.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                <Button
                    onPress={() =>
                        navigation.navigate('Home')}
                >
                    <Image source={require('./../../assets/next-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </SubButton>
        </Container>
    );
}