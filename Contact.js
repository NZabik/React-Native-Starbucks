import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button } from 'react-native';


function Contact() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Téléphone</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
export default Contact;