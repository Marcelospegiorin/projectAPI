import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { Container, LeagueOfLegends, TextoDoJogo, BlocoHome, TextoHome, BlocoGame, BlocoTituloCrystal,BlocoTituloTwisted, BlocoImagem, Lol, BlocoTituloSummoner, Divisor} from './style'

import {ScrollView, Image, View, StyleSheet, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function OGame() {
  
  const navigation = useNavigation()

    function voltarPagina(){
        navigation.goBack()
    }
//Chamando constante para o confetti.
  const confettiRef = useRef();
  const [confettiAnswer, setConfettiAnswer] = useState('');
  
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
          <TextoDoJogo>Consiste em um jogo eletrônico de modo multijogador, onde os jogadores assumem o papel de "summoners" ou invocadores dentre os mais de 140 "campeões", que formarão uma equipe com o objetivo de destruir a base do outro invocador. </TextoDoJogo>
          <TextoDoJogo>Cada equipe é composta de cinco campeões que começam em nível baixo e progridem de acordo com o desenrolar do jogo através de pontos de experiência e ouro para a compra de itens. </TextoDoJogo>
          <TextoDoJogo>Cada campeão começa a missão com cinco habilidades próprias, e o invocador inicia-se com dois feitiços iniciais. A estratégia também é essencial para a utilização dos itens. </TextoDoJogo>
        </BlocoGame>

        <Divisor></Divisor>
        <BlocoImagem style={{flex:1}}>        
          <Image style={{width:391, height:182}} source={require('../../assets/summoners.png')}        
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

        <Divisor></Divisor>
        <BlocoImagem style={{flex:1}}>     
        <Image style={{width:391, height:182}} source={require('../../assets/crystal-scar_redim.png')}></Image>
        </BlocoImagem>
        <BlocoGame>
          <BlocoTituloCrystal>     
          <TextoDoJogo>CRYSTAL SCAR</TextoDoJogo>
          </BlocoTituloCrystal>       
          <TextoDoJogo> Este é um mapa que encontra-se desabilitado atualmente, mas alguns de seus elementos estão presentes em modalidades que o game propõe.</TextoDoJogo>
          <TextoDoJogo> É um mapa de forma circular com cinco pontos de captura.  </TextoDoJogo>
          <TextoDoJogo> Com dois times de 05 (cinco) campeões, vence aquele time que dominar os pontos de captura existentes.</TextoDoJogo>                   
        </BlocoGame>
        
        <Divisor></Divisor>
        <BlocoImagem style={{flex:1}}>
        <Image style={{width:391, height:182}} source={require('../../assets/twisted_treeline_mapa.png')}></Image>
        </BlocoImagem>
        <BlocoGame>
          <BlocoTituloTwisted>     
          <TextoDoJogo>TWISTED TREELINE</TextoDoJogo>
          </BlocoTituloTwisted>       
          <TextoDoJogo> Também é uma mapa desabilitado, utilizado especialmente para um evento específico.Possui duas rotas para que o objetivo seja alcançado, ou seja, a destruição do Nexus do oponente. Para concluir esse objetivo os jogadores deveriam passar por uma área com monstros além de batalhar contra os campeões da equipe rival.</TextoDoJogo>
          <TextoDoJogo> Neste mapa havia uma criatura bônus que, se derrotada, concedia à equipe vitoriosa uma habilidade de passar pelas rotas sem precisar batalhar. </TextoDoJogo>                 
        </BlocoGame>


        <Divisor></Divisor>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginVertical: 6,
              fontWeight: '400',
              color: '#F6CB33',
              textAlign: 'center',
              marginTop: 1, 
            }}
          >
            Qual dos mapas anteriores foi desativado, mas mantém recursos no universo Lol?

          </Text>
          <TextInput
            style={{
              width: '100%',
              height: 40,
              backgroundColor: '#f1f3f6',
              paddingHorizontal: 10,
              borderRadius: 4,
              marginTop: 10,
            }}
            placeholder={'Digite aqui sua resposta'}
            onChangeText={(text) => setConfettiAnswer(text)}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              if (confettiAnswer.trim().toLowerCase() === 'crystal scar') {
                confettiRef.current.start(); Alert.alert('Resposta correta!!!');
              } else {
                Alert.alert('Esta não é a resposta correta.');
              }
            }}
          >
            <Text style={styles.submitButtonText}>Verificar</Text>
          </TouchableOpacity>
        </View>
        
        <ConfettiCannon
          count={250}
          origin={{ x: 0, y: 0 }}
          autoStart={false}
          ref={confettiRef}
          explosionSpeed='1000'
          fallSpeed='3500'
        />         

        </View>       

      </ScrollView>
      
       
      
       
    </Container>
    
  );
  
}
const styles = StyleSheet.create({
  submitButton: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#EE5A24',
    borderRadius: 10, 
    marginTop: 10,
    marginLeft: 110,
    marginBottom: 30,
  },
  submitButtonText: {
    fontWeight: '500',
    color: '#ffff',
    fontSize: 20,
  },
})


