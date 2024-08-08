import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../theme/appTheme';

//interface 
interface Props{
    title:string;
}
const TitleComponents = ({title}:Props) => {
    const {height}=useWindowDimensions();
  return (
    <Text style={{
        ...styles.globalTitle,
        height:height*0.12
        }}>
        {title}
        </Text>
  )
}

export default TitleComponents
