import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

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
    return (
        <View style={styles.container}>
            {/* Left title */}
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Belangrijke{'\n'}documenten</Text>
                <View style={styles.divider} />
            </View>

            {/* Grid */}
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
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#FFF',
        padding: 16,
    },
    titleBlock: {
        marginRight: 16,
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0055B3',
        textAlign: 'right',
    },
    divider: {
        height: '100%',
        width: 2,
        backgroundColor: '#0055B3',
        marginTop: 4,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        flex: 1,
    },
    button: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 8,
        width: '30%',
        minWidth: 110,
        maxWidth: 160,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1,
    },
    buttonText: {
        color: '#0055B3',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 13,
    },
});
