import React from 'react'
import { useNavigation } from '@react-navigation/core';

// ESTILIZAÇÃO

import {
    Container,
    TitleView,
    Button,
    SubText,
    Image
} from './style'

export default function Home() {
    
    const navigation = useNavigation()
    
    return (
        <Container>
            <TitleView>
                <Image source={require('./../../assets/home.png')}/>
            </TitleView>
            
            <Button
                onPress={() =>
                navigation.navigate('OGame')}
                style={{marginTop: 72}}
            >
                <Image source={require('./../../assets/logoLol-icon.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                <SubText>O Game</SubText>
            </Button>
                    
            <Button
                onPress={() =>
                navigation.navigate('Database')}
            >
                <Image source={require('./../../assets/runa-icon.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                <SubText>Database</SubText>
            </Button>

            <Button
                onPress={() => 
                navigation.navigate('Dicas1')}
            >
                <Image source={require('./../../assets/dicas-icon.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                <SubText>Dicas</SubText>
            </Button>
        </Container>
    );
}