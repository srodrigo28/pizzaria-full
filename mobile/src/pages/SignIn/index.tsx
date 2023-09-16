import React, { useState, useContext } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from '../../contexts/authContext';

export default function SignIn() {
    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(){
        if(email === '' || password === ''){
            return
        }
        await signIn({ email, password })
    }
    return(
        <View style={styles.container}>
            {/* <Image 
                style={styles.logo} 
                source={require('../../assets/logo.png')}
            /> */}
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholderTextColor="#f0f0f0f0"  
                    placeholder='Digite seu email'
                    value={email}
                    onChangeText={ setEmail }
                /> 
                <TextInput 
                    style={styles.input} 
                    secureTextEntry={true} 
                    placeholderTextColor="#f0f0f0f0"  
                    placeholder='Digite sua senha'
                    value={password}
                    onChangeText={ setPassword }

                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d1d2e'
    },
    logo: {
        marginBottom: 18,
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
    },
    input:{
        width: '95%',
        height: 60,
        backgroundColor: '#101026',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        fontSize: 22,
        color: '#fff'
    },
    button: {
        width: '95%',
        height: 60,
        backgroundColor: '#3fffa3',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#101026'
    }
})