import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center'
      },
      user: {
        flexDirection: 'row',
      },
    
      username: {
        fontFamily:'Hogwarts',
        fontSize: 40,
        color: theme.colors.heading
      },
      message: {
        fontFamily:'JostMedium',
        color: theme.colors.highlight
      }
})