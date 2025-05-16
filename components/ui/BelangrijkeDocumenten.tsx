import React from 'react';
import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native';

const documents = [
    'Akkoord internaatreglement',
    'Akkoord internetgebruik',
    'Akkoord gegevensgebruik',
    'Bevestiging opvang op zondag',
    'Toelating deelname activiteiten',
    'Toelating verlaten internaat',
    'Toelating verlaten internaat 16+',
    'Toelating verplaatsing naar school',
    'Attest medicatie',
];

export default function DocumentenGrid() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Belangrijke documenten</Text>
                <View style={styles.underline} />
            </View>

            <View style={styles.grid}>
                {documents.map((doc, index) => (
                    <Pressable key={index} style={styles.button}>
                        <Text style={styles.buttonText}>{doc}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0055B3',
        textAlign: 'center',
    },
    underline: {
        marginTop: 4,
        width: 160,
        height: 2,
        backgroundColor: '#0055B3',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    button: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        paddingVertical: 12,
        paddingHorizontal: 8,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
    },
    buttonText: {
        color: '#0055B3',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 13,
    },
});
