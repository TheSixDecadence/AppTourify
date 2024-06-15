import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RegisterForm from '../components/RegisterForm';

const LoginScreen = () => {
    return (
        <ImageBackground style={styles.background}>
        <img style={styles.Logo} src="https://png.pngtree.com/png-clipart/20231004/original/pngtree-compass-icon-in-black-and-white-vector-png-image_13119900.png" alt="" />
        <RegisterForm/>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: '#151E3D',
        alignItems: 'center',
    },
    Logo: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 200,
        height: 200,
        marginTop: 50,
    },
});

export default LoginScreen;