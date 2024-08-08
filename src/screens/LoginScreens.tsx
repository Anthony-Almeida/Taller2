import React, { useState } from 'react'
import { Alert, Button, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import TitleComponents from '../components/TitleComponents'
import { PRIMARY_COLOR } from '../commons/constansColor'
import BodyComponent from '../components/BodyComponent'
import { styles } from '../theme/appTheme'
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent'

//interface - objeto
interface FormLogin {
    email: string;
    password: string;
}
// vector de objetos
interface User {
    id: number;
    email: string;
    password: string;

}

const LoginScreens = () => {
    //arreglo inicio de sesion
    const user: User[] = [
        { id: 1, email: 'tony_guss25@hotmail.com', password: '12345' },
        { id: 1, email: 'aaaaaa5@hotmail.com', password: '123456' }
    ];

    //hook useState: manipula el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });
    //hook UseState: perimtir que la cintraseña sea visible o no
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //funcion que permita actualizar el estado del formulario
    const handleSetValues = (name: string, value: string) => {
        //cambiar el estado del formulario
        //...operador de propagacion | spread: sacar una copia de las propiedades del objeto
        setFormLogin({ ...formLogin, [name]: value });
    }
    //funcion que nos permita iniciar sesion
    const handleSignIn = () => {
        //validando si los campos estan vacios
        if (!formLogin.email || !formLogin.password) {
            Alert.alert(
                "Error",
                "Por favor, complete todos los campos"
            );
            return;
        }
        //validando si correo existe
        if (!verifyUser()) {//valor nulo
            Alert.alert(
                "Error",
                "Correo y/o contraseña incorrecta"
            );
            return;
        }
        console.log(formLogin)
    }
    //funcion verificar si existe el correo y contraseña 
    const verifyUser = (): User => {
        const existUser = user.filter(user => user.email === formLogin.email && user.password === user.password)[0];
        return existUser;
    }
    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponents title='Iniciar Sesión' />
            <BodyComponent>
                <View>
                    <Text style={styles.titleBody} >Bienvenidos de nuevo!</Text>
                    <Text style={styles.descritionBody}>Realiza tus compras de manera rápida y segura</Text>
                </View>
                <View style={styles.contentInput}>
                    <InputComponent
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name='email' />
                    <InputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name='password'
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        actionIcon={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent textButton='Iniciar' actionButton={handleSignIn} />
                <TouchableOpacity>
                <Text style={styles.textRedirection}> No tienes cuenta ? Registrate ahora</Text> 
                </TouchableOpacity>
            </BodyComponent>
        </View>

    )
}

export default LoginScreens
