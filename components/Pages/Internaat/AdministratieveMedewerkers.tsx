import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Medewerker {
    name: string;
}

const medewerkers: Medewerker[] = [
    { name: 'Hilde Marcelis' },
    { name: 'Sophie Vangeedt' },
];

export default function AdministratieveMedewerkers() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Administratieve medewerkers</Text>

            <View style={styles.row}>
                {medewerkers.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
    },
    header: {
        fontSize: 18,
        textAlign: 'center',
        color: '#0761b7',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 16,
    },
    card: {
        backgroundColor: '#498bca',
        width: '48%',
        alignItems: 'center',
        paddingVertical: 24,
    },
    name: {
        fontSize: 16,
        color: '#f4d761',
        fontWeight: 'bold',
    },
});
