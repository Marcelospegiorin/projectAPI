import React from 'react'
import {Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

// ESTILIZAÇÃO

import {
    Container,
    TitleApp,
    Button,
    SubView,
    SubText
} from './style'

export default function index(navigation) {

    return (

        <LinearGradient
            colors={['#1e278d', '#3e49d0', '#4e5bf1']}
        >
            <Container>
                <TitleApp>League Of Guide</TitleApp>
                <Image source={require('../../assets/lollogo.png')} style={{width: 100, height: 100}}/>
                <Button>
                    <SubText>Campeões</SubText>
                </Button>
                <Button>
                    <SubText>Itens</SubText>
                </Button>
                <Button>
                    <SubText>O jogo</SubText>
                </Button>
            </Container>
        </LinearGradient>
    )
}





















/*const ApiKey = 'RGAPI-b4515564-63e7-4878-aa97-a92b076ea8ee'
  
  const [summonerName, setSummonerName] = useState('')

  const getSummoner = async () => {
    const {data}  = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${ApiKey}`)
    console.log(data)
  }
console.log(summonerName)*/
