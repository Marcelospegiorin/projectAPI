import React from 'react'
import { StatusBar } from 'expo-status-bar'

import {
    Container,
    TitleApp,
    Button,
    SubView,
    SubText
} from './style'

export default function Dicas() {
    return(
        <Container>
            <StatusBar style="light" hidden={true}/>
            <TitleApp>Dicas</TitleApp>
            <SubText>Test</SubText>
        </Container>
    );
}