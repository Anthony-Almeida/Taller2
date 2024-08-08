import { createStackNavigator } from '@react-navigation/stack';
import LoginScreens from '../screens/LoginScreens';
import { PRIMARY_COLOR } from '../commons/constansColor';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const StackNavigator = () =>{
  return (
    <Stack.Navigator 
    screenOptions={{
        cardStyle:{
            backgroundColor:PRIMARY_COLOR
        }}}>
      <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreens} />
      <Stack.Screen name="Register" options={{headerShown:false}} component={RegisterScreen} />
    </Stack.Navigator>
  );
}