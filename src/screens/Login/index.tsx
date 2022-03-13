import React, { useEffect } from 'react';
import { Background } from '../../components/Background';
import {
  Container, Title,Banner, ButtonMagic, TextButton, 
} from './styles';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Button, View } from 'react-native';
import { AnimatePresence } from 'framer-motion';

export function Login({navigation}:any) {
    const visibleCount = useSharedValue(0)
    const imageCount = useSharedValue(0)
    const marginCount = useSharedValue(0);
    const buttonCount = useSharedValue(0);
    const config = {
        duration: 2000,
        easing: Easing.linear
      };
    
      const titleContainerStyle = useAnimatedStyle(() => {
        return {
         
          marginLeft:withSpring(visibleCount.value,{velocity:200}),
            marginBottom:withSpring(marginCount.value,{velocity:200})
        };
      });

      const bannerContainerStyle = useAnimatedStyle(() => {
        return {
         
          opacity: withTiming(imageCount.value,config),
         
        };
      });

      const buttonContainerStyle = useAnimatedStyle(() => {
        return {
         
          opacity: withTiming(buttonCount.value,config),
          marginLeft:withSpring(visibleCount.value,{velocity:200}),
         
        };
      });

      function handleGoHome() {
        navigation.navigate('Home');
    }

      useEffect(()=>{
        setTimeout(()=>{
        visibleCount.value=36;
        
        marginCount.value=16
        },3000)

        setTimeout(()=>{
            imageCount.value=1;
        },500)

        setTimeout(()=>{
            buttonCount.value=1;
        },3000)
      },[])
  return (
    <AnimatePresence exitBeforeEnter>
      <Background
        
      >
        <Container>
            <Animated.View style={bannerContainerStyle}>
            <Banner source={require('../../../assets/potter-banner.png')}/>
            </Animated.View>
            
            <Animated.View style={titleContainerStyle}>
                <Title>Hogwarts Discover</Title>
            </Animated.View>

            <Animated.View style={buttonContainerStyle}>
                <ButtonMagic onPress={handleGoHome}>
                    <TextButton>Iniciar</TextButton>
                </ButtonMagic>
            </Animated.View>
           
        </Container>
    </Background>
    </AnimatePresence>
  );
}