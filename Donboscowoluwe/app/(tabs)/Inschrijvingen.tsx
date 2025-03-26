import { StyleSheet, TouchableOpacity, Linking } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function InschrijvenScreen() {
    const handleInschrijfformulierPress = () => {
        Linking.openURL('https://www.donbosco-sintpieterswoluwe.be/inschrijven');
    };

    const handleOpenDagPress = () => {
        Linking.openURL('https://www.donbosco-sintpieterswoluwe.be/open-dag');
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#E0E0E0', dark: '#2C2C2C' }}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="doc.text.fill"
                    style={styles.headerImage}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Inschrijven op Internaat</ThemedText>
            </ThemedView>

            <ThemedView style={styles.contentContainer}>
                <ThemedText type="subtitle">Inschrijvingsprocedure</ThemedText>
                <ThemedText>
                    Wil je je inschrijven voor ons internaat? Volg onderstaande stappen:
                </ThemedText>

                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="defaultSemiBold">Stap 1: Informatie verzamelen</ThemedText>
                    <ThemedText>
                        Bekijk onze website en brochures voor gedetailleerde informatie over ons internaat.
                    </ThemedText>
                </ThemedView>

                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="defaultSemiBold">Stap 2: Inschrijfformulier</ThemedText>
                    <TouchableOpacity onPress={handleInschrijfformulierPress} style={styles.buttonContainer}>
                        <IconSymbol name="doc.text.fill" size={24} color="#007AFF" />
                        <ThemedText type="link">Online Inschrijfformulier</ThemedText>
                    </TouchableOpacity>
                </ThemedView>

                <ThemedView style={styles.stepContainer}>
                    <ThemedText type="defaultSemiBold">Stap 3: Open Dag</ThemedText>
                    <TouchableOpacity onPress={handleOpenDagPress} style={styles.buttonContainer}>
                        <IconSymbol name="calendar.badge.plus" size={24} color="#007AFF" />
                        <ThemedText type="link">Kom naar onze Open Dag</ThemedText>
                    </TouchableOpacity>
                </ThemedView>

                <ThemedText type="subtitle">Vragen?</ThemedText>
                <ThemedText>
                    Aarzel niet om contact met ons op te nemen voor meer informatie of persoonlijk advies.
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 16,
    },
    contentContainer: {
        gap: 16,
    },
    stepContainer: {
        marginBottom: 16,
        gap: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 8,
    },
});