import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Container, LeagueOfLegends, TextoDoJogo, BlocoHome, TextoHome, BlocoGame, BlocoTituloMapa, BlocoImagem, Lol, BlocoTituloSummoner} from './style'

import {ScrollView, Image, View} from 'react-native';

export default function OGame() {
  
  const navigation = useNavigation()

    function voltarPagina(){
        navigation.goBack()
    }
  
  return (
    <Container>           
      <LeagueOfLegends>
        <Lol> League Of Legends</Lol>
      </LeagueOfLegends>
      
      
      <ScrollView
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      > 
      
        <View style={{alignItems: 'center', flex: 1}}>
        <BlocoGame>      
          <TextoDoJogo>  Consiste em um jogo eletrônico de modo multijogador, onde os jogadores assumem o papel de "summoners" ou invocadores dentre os mais de 140 "campeões", que formarão uma equipe com o objetivo de destruir a base do outro invocador. </TextoDoJogo>
          <TextoDoJogo>  Cada equipe é composta de cinco campeões que começam em nível baixo e progridem de acordo com o desenrolar do jogo através de pontos de experiência e ouro para a compra de itens. </TextoDoJogo>
          <TextoDoJogo> Cada campeão começa a missão com cinco habilidades próprias, e o invocador inicia-se com dois feitiços iniciais. A estratégia também é essencial para a utilização dos itens. </TextoDoJogo>
        </BlocoGame>

        
        <BlocoImagem style={{flex:1}}>        
          <Image style={{width:367, height:182}} source={require('../../assets/summoners.png')}        
          />                      
        </BlocoImagem>        
        
        <BlocoGame>
          <BlocoTituloSummoner>     
          <TextoDoJogo>SUMMONER'S RIFT</TextoDoJogo>
          </BlocoTituloSummoner>       
          <TextoDoJogo>É o mapa mais comum e utilizado pelos invocadores Lol. Sua área fica entre a floresta Freljord e as montanhas Ironspine.
          </TextoDoJogo>
          <TextoDoJogo>Objetivo: neste mapa você deve atravessar um dos três caminhos (lateral direita, meio, lateral esquerda) também chamados de "lanes" e que são defendidos por torres de ambos os times. Ao final, deve consquistar o território do oponente.
          </TextoDoJogo>          
        </BlocoGame>

        
        <BlocoImagem style={{flex:1}}>     
        <Image style={{width:367, height:182}} source={require('../../assets/crystal-scar_redim.png')}></Image>
        </BlocoImagem>
        <BlocoGame>
          <BlocoTituloSummoner>     
          <TextoDoJogo>CRYSTAL SCAR</TextoDoJogo>
          </BlocoTituloSummoner>       
          <TextoDoJogo> Este é um mapa que encontra-se desabilitado atualmente, mas alguns de seus elementos estão presentes em modalidades que o game propõe.</TextoDoJogo>
          <TextoDoJogo> É um mapa de forma circular com cinco pontos de captura.  </TextoDoJogo>
          <TextoDoJogo> Com dois times de 05 (cinco) campeões, vence aquele time que dominar os pontos de captura existentes.</TextoDoJogo>                   
        </BlocoGame>
        
        <BlocoImagem style={{flex:1}}>
        <Image style={{width:367, height:182}} source={require('../../assets/twisted_treeline_mapa.png')}></Image>
        </BlocoImagem>
        <BlocoGame>
          <BlocoTituloSummoner>     
          <TextoDoJogo>TWISTED TREELINE</TextoDoJogo>
          </BlocoTituloSummoner>       
          <TextoDoJogo> Este mapa possui duas rotas para que o objetivo seja alcançado, ou seja, a destruição do Nexus do oponente. Para concluir esse objetivo os jogadores devem passar por uma área com monstros além de batalhar contra os campeões da equipe rival.</TextoDoJogo>
          <TextoDoJogo> Neste mapa há uma criatura bônus que, se derrotada, concede à equipe vitoriosa uma habilidade de passar pelas rotas sem precisar batalhar. </TextoDoJogo>                 
        </BlocoGame>
        
        </View>  
      </ScrollView>
      
      <BlocoHome onPress={() => voltarPagina()}>        
          <TextoHome>Home</TextoHome>        
      </BlocoHome> 
      
       
    </Container>
  );
}


