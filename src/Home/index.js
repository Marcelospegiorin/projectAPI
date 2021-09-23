import React from 'react'
import {Image} from 'react-native'

// ESTILIZAÇÃO

import {
    Container,
    TitleApp,
    Button,
    SubView,
    SubText
} from './style'

export default function index(navigation) {

    return (

            <Container >
                <TitleApp>Guia Of Legends</TitleApp>
        
                <Button>
                    <SubText>Guia</SubText>
                    <Image source={require('./../../assets/logoLol-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
        
                <Button>
                    <SubText>O Game</SubText>
                    <Image source={require('./../../assets/gamepad-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
                
                <Button>
                    <SubText>Campeões</SubText>
                    <Image source={require('./../../assets/trofeu-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
        
                <Button>
                    <SubText>Dicas</SubText>
                    <Image source={require('./../../assets/tips-icon.png')} style={{width: 50, height: 50, marginLeft: 10}}/>
                </Button>
            </Container>
    );
}