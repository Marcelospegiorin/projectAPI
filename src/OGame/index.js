import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Container, LeagueOfLegends, TextoDoJogo, BlocoHome, TextoHome, TextoGame, BlocoImagem, Lol } from './style'
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
        <TextoGame>      
          <TextoDoJogo>  Consiste em um jogo eletrônico de modo multijogador, onde os jogadores assumem o papel de "summoners" ou invocadores dentre os mais de 140 "campeões", que formarão uma equipe com o objetivo de destruir a base do outro invocador. </TextoDoJogo>
          <TextoDoJogo>  Cada equipe é composta de cinco campeões que começam em nível baixo e progridem de acordo com o desenrolar do jogo através de pontos de experiência e ouro para a compra de itens. </TextoDoJogo>
          <TextoDoJogo> Cada campeão começa a missão com cinco habilidades próprias, e o invocador detém dois feitiços iniciais. A estratégia também é essencial para a utilização dos itens. </TextoDoJogo>
        </TextoGame>
        <BlocoImagem style={{flex:1}}>        
          <Image style={{width:350, height:350}} source={require('../OGame/lol_minimap_redim.jpg')}        
          />                      
        </BlocoImagem> 
        </View>  
      </ScrollView>
      
      <BlocoHome onPress={() => voltarPagina()}>        
          <TextoHome>Home</TextoHome>        
      </BlocoHome> 
      
       
    </Container>
  );
}


