import React from 'react'
import { ImageBackground, FlatList} from 'react-native'

// ESTILIZAÇÃO

import {
    Container,
    TitleApp,
    Button,
    SubView,
    SubText
} from './style'

export default function index(navigation) {

    const image = {uri: 'https://wallpapercave.com/wp/wp4976074.jpg'}

    const Teste = [
        {
            name: 'Aatrox',
            id: '21312'
        },
        {
            name: 'gustavo',
            key: '123'
        },
        
        {
            name: 'thiago',
            key: '543'
        },
        
        {
            name: 'joão',
            key: '54'
        },
    ]

    return (

        <Container>
            <ImageBackground source={image} resizeMethod="auto" style={{width: '100%', height: '100%', alignItems: 'center'}}>
                <TitleApp>League Of Guide</TitleApp>
                
            </ImageBackground>
        </Container>
    )
}





















/*const ApiKey = 'RGAPI-b4515564-63e7-4878-aa97-a92b076ea8ee'
  
  const [summonerName, setSummonerName] = useState('')

  const getSummoner = async () => {
    const {data}  = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${ApiKey}`)
    console.log(data)
  }
console.log(summonerName)*/
