import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';




export default function OGame() {
  return (
    <View style={styles.container}>
      <View style={styles.leagueoflegends}>
        <Text style={{color: '#F6CB33', fontSize: 33, marginTop: 10, marginLeft: 15,}}> League Of Legends</Text>
      </View>

      <View style={styles.ogame}>
        <Text style={styles.textojogo}>  Consiste em um jogo eletrônico de modo multijogador, onde os jogadores assumem o papel de "summoners" ou invocadores dentre os mais de 140 "campeões", que formarão uma equipe com o objetivo de destruir a base do outro invocador. </Text>
        <Text style={styles.textojogo}>  Cada equipe é composta de cinco campeões que começam em nível baixo e progridem de acordo com o desenrolar do jogo através de pontos de experiência e ouro para a compra de itens. </Text>
        <Text style={styles.textojogo}> Cada campeão começa a missão com cinco habilidades próprias, e o invocador detém dois feitiços iniciais. A estratégia também é essencial para a utilização dos itens. </Text>
      </View>

      <View style={styles.blocohome}>        
          <Text style={styles.textohome}>Home</Text>        
      </View>    
    
      <StatusBar hidden /> 
    </View>
  );
}

// CSS Interno
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001425',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor:'#0DCEE9',
        
  }, 

  leagueoflegends: {
    backgroundColor: '#063C6A',
    width: '80%',
    height: 130,
    marginBottom: 30,    
    justifyContent:'center',
    borderWidth:2,
    borderColor:'#0DCEE9',   
    
  },
  textojogo: {
    color: '#F6CB33',
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 25,
    padding:5,
  },
  blocohome:{
    backgroundColor: '#063C6A',
    width: '40%',
    height: 55,
    marginTop: 3,
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#0DCEE9', 
  },

  textohome: {
    color: '#F6CB33',
    textAlign: 'center',
    fontSize: 25,
  },

  ogame: {
    backgroundColor: '#063C6A',
    width: '80%',
    height: 460,
    marginBottom: 35,    
    justifyContent: 'center',
    borderWidth:1,
    borderColor:'#0DCEE9',
  },
  
});
