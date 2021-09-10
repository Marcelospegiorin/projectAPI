import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading';
import React from 'react';
import MainStack from './MainStack'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Raleway_500Medium_Italic, Raleway_400Regular_Italic} from '@expo-google-fonts/raleway';

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_500Medium_Italic,
    Raleway_400Regular_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
      <NavigationContainer>
        <MainStack />
        <StatusBar style="light" hidden={true}/>
      </NavigationContainer>
    );
  }
}
