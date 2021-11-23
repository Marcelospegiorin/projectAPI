import React from 'react'
import {Image} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import IconHome from 'react-native-vector-icons/FontAwesome'

// ESTILIZAÇÃO

import {
    Container,
    TitleDatabase,
    Button,
    SubText,
    ButtonHome,
    ButtonContainer,
} from './style'

export default function Database() {
        
    const navigation = useNavigation()
    
    function voltarPagina(){
        navigation.goBack()
    }

    return (
        <Container>
            <TitleDatabase>Database</TitleDatabase>
            <ButtonContainer>
                <Button
                    onPress={() =>
                    navigation.navigate('Campeoes')}
                >
                    <Image source={require('./../../assets/campeoes-icon.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                    <SubText>Campeões</SubText>
                </Button>
                
                <Button
                    onPress={() =>
                    navigation.navigate('Itens')}
                >
                    <Image source={require('./../../assets/itens-icon.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                    <SubText>Itens</SubText>
                </Button>

                <Button
                    onPress={() =>
                    navigation.navigate('Feiticos')}
                >
                    <Image source={require('./../../assets/feiticos-icon.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                    <SubText>Feitiços</SubText>
                </Button>

                <Button
                    onPress={() =>
                    navigation.navigate('Runas')}
                >
                    <Image source={require('./../../assets/runas-icon.png')} style={{width: 50, height: 50,}}/>
                    <SubText>Runas</SubText>
                </Button>
            </ButtonContainer>
            <ButtonHome
                onPress={() => voltarPagina()}
            >
                <IconHome name='home' size={50} color='#CAA92E'/>
            </ButtonHome>

        </Container>
    );
}
