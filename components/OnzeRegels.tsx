import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoBlok() {
    return (
        <View style={styles.container}>
            <Text style={styles.line}>
                <Text style={styles.small}>Het internaat staat open voor alle </Text>
                <Text style={styles.blueBold}>jongens en meisjes</Text>
            </Text>

            <Text style={styles.line}>
                <Text style={styles.blueBold}>vanaf 10 jaar </Text>
                <Text style={styles.small}>die les volgen in het</Text>
            </Text>

            <Text style={styles.line}>
                <Text style={styles.blueBold}>Nederlandstalige onderwijs </Text>
                <Text style={styles.small}>in </Text>
                <Text style={styles.blueBold}>Brussel en omgeving.</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF',
    },
    line: {
        textAlign: 'center',
        marginBottom: 4,
        flexWrap: 'wrap',
    },
    small: {
        fontSize: 12,
        color: '#000',
        fontWeight: 'normal',
    },
    blueBold: {
        fontSize: 16,
        color: '#0055B3',
        fontWeight: 'bold',
    },
});
