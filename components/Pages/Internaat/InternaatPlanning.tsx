import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import InternaatPlanningDetails from '@/components/Pages/Internaat/InternaatPlanningDetails';

const planningItems = [
    'Lager onderwijs',
    '1e jaar secundair',
    '2e jaar secundair',
    '3e-4e jaar secundair',
    '5e-7e jaar secundair',
];

export default function InternaatPlanning() {
    const [activeItem, setActiveItem] = useState<string>('Lager onderwijs');

    return (
        <View>
            <View style={styles.container}>
                {planningItems.map((item) => {
                    const isActive = activeItem === item;
                    return (
                        <TouchableOpacity
                            key={item}
                            onPress={() => setActiveItem(item)}
                            style={[styles.box, isActive && styles.boxActive]}
                        >
                            <Text style={[styles.boxText, isActive && styles.boxTextActive]}>{item}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <InternaatPlanningDetails group={activeItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 12,
        padding: 16,
    },
    box: {
        borderWidth: 1,
        borderColor: '#0761b7',
        paddingVertical: 12,
        paddingHorizontal: 16,
        minWidth: 140,
        alignItems: 'center',
    },
    boxActive: {
        backgroundColor: '#0761b7',
    },
    boxText: {
        color: '#0761b7',
        fontWeight: 'bold',
    },
    boxTextActive: {
        color: '#fff',
    },
});