import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button, SafeAreaView, Platform, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Products from './Products';

function Accueil({ setNavType }) {
    const [logo, setLogo] = useState(require('./assets/BSG.png'));
    const navigation = useNavigation();
    const changeLogo = () => {
        // Cette fonction change le logo
        if (logo === require('./assets/BSG.png')) {
            setLogo(require('./assets/Viper.png')); // On change le logo
        } else {
            setLogo(require('./assets/BSG.png'));
        }
    };

    return (
        // SafeAreaView permet de gérer les problèmes de padding sur les appareils android
        <SafeAreaView style={styles.container}>
            {/* Changement de logo */}
            <TouchableOpacity onPress={changeLogo}>
                <Image source={logo} style={styles.logo} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={styles.text}>STARBUCKS</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 15,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Accueil;