import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'
//interface porps
interface Props{
    textButton:string;
    actionButton:() => void;
}

const ButtonComponent = ({textButton, actionButton}:Props) => {
  return (
    <TouchableOpacity
    onPress={actionButton}
    style={styles.button}>
      <Text style={styles.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent
