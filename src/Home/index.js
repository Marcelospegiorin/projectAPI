import React from 'react'
import {Image} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar'

// ESTILIZAÇÃO

import {
    Container,
    TitleView,
    Button,
    SubText
} from './style'

export default function Home() {
        
    const navigation = useNavigation()
    
    return (
        <Container>
            <StatusBar style="light" hidden={true}/>
            <TitleView>
                <Image source={require('./../../assets/league-of-legends-logo.jpg')} style={{width: 325, height: 175}} />
            </TitleView>
            
            <Button>
                <Image source={require('./../../assets/logoLol-icon.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                <SubText>O Game</SubText>
            </Button>

            <Button>
                <Image source={require('./../../assets/ojogo-icon.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                <SubText>Guia</SubText>
            </Button>
                    
            <Button
                onPress={() =>
                navigation.navigate('Database')}
            >
                <Image source={require('./../../assets/runa-icon.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                <SubText>Database</SubText>
            </Button>

            <Button>
                <Image source={require('./../../assets/dicas-icon.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                <SubText>Dicas</SubText>
            </Button>
        </Container>
    );
}