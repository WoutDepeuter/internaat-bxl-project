import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, useWindowDimensions, Linking } from 'react-native';

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
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Belangrijke documenten</Text>
                <View style={styles.underline} />
            </View>

            <View style={styles.grid}>
                {documents.map((doc, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <Pressable
                            key={index}
                            onPress={() => {
                                setActiveIndex(index);

                                if (doc === 'Akkoord internaatreglement') {
                                    Linking.openURL('https://www.woluweinternaat.be/docs/AkkoordInternaatreglement.pdf');
                                } else if (doc === 'Akkoord internetgebruik') {
                                    Linking.openURL('https://www.woluweinternaat.be/docs/AkkoordInternetgebruik.pdf');
                                } else if (doc === 'Akkoord gegevensgebruik') {
                                    Linking.openURL('https://www.woluweinternaat.be/docs/AkkoordGegevensgebruik.pdf');
                                } else if (doc === 'Bevestiging opvang op zondag') {
                                    Linking.openURL('https://www.woluweinternaat.be/docs/BevestigingOpvangZondag.pdf');
                                } else if (doc === 'Toelating deelname activiteiten') {
                                    Linking.openURL('https://www.woluweinternaat.be/docs/ToelatingDeelnameActiviteiten.pdf');
                                } else if (doc === 'Toelating verlaten internaat') {
                                    Linking.openURL('https://www.woluweinternaat.be/docs/ToelatingVerlatenInternaat.pdf');
                                } else if (doc === 'Toelating verlaten internaat 16+') {
                                    Linking.openURL('https://www.woluweinternaat.be/docs/ToelatingVerlatenInternaat16plus.pdf');
                                } else if (doc === 'Toelating verplaatsing naar school') {
                                    Linking.openURL('https://www.woluweinternaat.be/docs/ToelatingNaarSchool.pdf');
                                }else if (doc === 'Attest medicatie') {
                                    Linking.openURL('https://www.woluweinternaat.be/docs/AttestMedicatie.pdf');
                                }
                            }}
                            style={[
                                styles.button,
                                isActive && styles.buttonActive,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.buttonText,
                                    isActive && styles.buttonTextActive,
                                ]}
                            >
                                {doc}
                            </Text>
                        </Pressable>
                    );
                })}
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
    buttonActive: {
        backgroundColor: '#f4d735',
        borderColor: '#f4d735',
    },
    buttonText: {
        color: '#0055B3',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 13,
    },
    buttonTextActive: {
        color: '#fff',
    },
});
