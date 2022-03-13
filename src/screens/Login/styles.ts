import { MotiView } from 'moti';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(MotiView)`
  flex: 1;
`;

export const Title = styled.Text`
    font-family: 'Hogwarts';
    font-size:58px;
    color:white;
`;

export const BannerContainer = styled.View`
`

export const Banner = styled.Image``

export const ButtonMagic = styled(TouchableOpacity)`
    width:300px;
    height:50px;
    background-color:#FBBC05;
    align-items: center;
    border-radius:30px;
`
export const TextButton = styled.Text`
    font-family: 'Hogwarts';
    font-size:50px;
    
`
