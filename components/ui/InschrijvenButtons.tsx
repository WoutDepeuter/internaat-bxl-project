import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // or your preferred icon set

export default function InternaatButtons() {
    return (
        <View style={styles.section}>
            <View style={styles.buttonRow}>
                <InternaatButton icon="file-document-outline" label="Inschrijven" />
                <InternaatButton icon="currency-eur" label="Kostprijs" />
                <InternaatButton icon="school" label="Benodigdheden" />
                <InternaatButton icon="door-open" label="Openingsuren" />
            </View>
        </View>
    );
}

function InternaatButton({ icon, label }) {
    return (
        <Pressable style={styles.button}>
            <Icon name={icon} size={36} color="#0055B3" />
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: '#3B86C6', // Blue banner background
        paddingVertical: 24,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: '#FFF',
        borderColor: '#FFD700', // Yellow border
        borderWidth: 4,
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignItems: 'center',
        width: 100,
        height: 120,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2, // Android shadow
    },
    label: {
        marginTop: 8,
        color: '#0055B3',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
    },
});
