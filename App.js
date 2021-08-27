import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

export default function App() {

  const ApiKey = 'RGAPI-b4515564-63e7-4878-aa97-a92b076ea8ee'
  
  const [summonerName, setSummonerName] = useState('')

  const getSummoner = async () => {
    const {data}  = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${ApiKey}`)
    console.log(data)
  }
  console.log(summonerName)

  return (
    <View style={styles.container}>
      <Text>LEAGUE API</Text>
      <TextInput 
        onChangeText={(text) => setSummonerName(text)}
        style={styles.input}
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
  input: {
    width: 100,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000000'
  }
});
