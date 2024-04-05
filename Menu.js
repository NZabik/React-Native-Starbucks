import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button, SafeAreaView, Platform, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Products from './Products';

function Menu({ setNavType }) {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [modal, setModal] = useState(false);
    const navigation = useNavigation();
    // ferme automatiquement la liste quand on change de page
    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setIsDisplayed(false);
        });

        return unsubscribe;
    }, [navigation]);

    return (
        // SafeAreaView permet de gérer les problèmes de padding sur les appareils android
        <SafeAreaView style={styles.container}>
            {/*  modale */}
            <Modal transparent={true} visible={modal} animationType="fade">
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,.5)'
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        padding: 17,
                        elevation: 40,
                        shadowColor: '#A7000C',
                        shadowOpacity: .4,
                        shadowRadius: 5,
                        shadowOffset: { width: 0, height: 0 },
                        alignItems: 'flex-end',
                    }}>
                        <TouchableOpacity onPress={() => setModal(false)}>
                            <Text style={{
                                textAlignVertical: "center",
                                textAlign: "center",
                                borderStyle: "solid",
                                borderWidth: 2,
                                borderRadius: 30,
                                borderColor: '#A7000C',
                                fontSize: 15,
                                width: 30,
                                height: 30,
                                color: '#A7000C',
                                marginBottom: 8
                            }}>X</Text>
                        </TouchableOpacity>
                        <Text>Ceci est ma première modale</Text>
                    </View>
                </View>
            </Modal>
            <View style={{ marginTop: 40, marginBottom: 80 }}>
                {isDisplayed && (<Products />)}
                {!isDisplayed && <Button onPress={() => setModal(true)} title='test modale'></Button>}
                <TouchableOpacity
                    onPress={() => setIsDisplayed(prevState => !prevState)}
                    style={{ width: 'auto', backgroundColor: '#A7000C', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 3 }}
                    activeOpacity={0.5}
                >
                    <Text style={{ color: '#fff', textAlign: 'center' }}>
                        {isDisplayed ? 'Fermer' : 'Ouvrir'}</Text>
                </TouchableOpacity>
            </View>
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

export default Menu;