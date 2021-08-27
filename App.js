import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native'

export default function App() {

  const ApiKey = 'RGAPI-b4515564-63e7-4878-aa97-a92b076ea8ee'
  
  const [sommonerName, setSummonerName] = useState('')

  const getSummoner = async () => {
    const {data}  = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/srwarriorrj?api_key=${ApiKey}`)
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <Text>LEAGUE API</Text>
      <TextInput 
        onChangeText={(text) => setSummonerName(text)}
      />
      <Button title="GET SUMMONER" onPress={getSummoner} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
