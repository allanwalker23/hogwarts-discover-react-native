import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import theme  from "../../global/styles/theme";
import { styles } from "./styles";
import { Image} from 'react-native'

interface AvatarProps {
    urlImage:string
}
const Avatar:React.FC<AvatarProps> = ({urlImage}) =>{
    const{ primary,secondary}=theme.colors;

    return(
        <LinearGradient
        style={styles.container}
        colors={[primary,primary]}>
        <Image
        source={{uri:urlImage}}
        style={styles.avatar}/>
        </LinearGradient>
    )
}

export default Avatar