import React from 'react'
import { Container, Button, ListaCampeoes } from '../Campeoes/style'

export default function index() {
    return (
        <Container>
            <ViewTitulo>
                <ListaCampeoes>Lista de Campeões</ListaCampeoes>
            </ViewTitulo>
            
            <Button>Home</Button>
        </Container>
    )
}
