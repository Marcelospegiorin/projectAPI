import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Container, Button, ViewTitulo, ListaCampeoes, TextButton } from './style'

export default function index() {
    return (
        <Container>
            <StatusBar style="light" hidden={true}/>
            <ViewTitulo>
                <ListaCampeoes>Lista de Campeões</ListaCampeoes>
            </ViewTitulo>
            
            <Button>
                <TextButton>Home</TextButton>
            </Button>
        </Container>
    );
}
