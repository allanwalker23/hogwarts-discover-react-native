import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Login } from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes/app.routes';
import {Jost_500Medium, Jost_700Bold} from '@expo-google-fonts/jost'
export default function App() {

  let [fontsLoaded] = useFonts({
    'JostMedium':Jost_500Medium,
    'JostBold':Jost_700Bold,
    'Hogwarts': require('./assets/fonts/font.ttf'),
  });
 
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
   </ThemeProvider>
  );
}


