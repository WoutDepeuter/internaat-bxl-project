import { StyleSheet, Linking, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ContactScreen() {
    const handleEmailPress = () => {
        Linking.openURL('mailto:woluwe.internaat@donbosco.be');
    };

    const handlePhonePress = () => {
        Linking.openURL('tel:+0473 21 81 54');
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#E0E0E0', dark: '#2C2C2C' }}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="person.crop.circle.fill"
                    style={styles.headerImage}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Contact Us</ThemedText>
            </ThemedView>

            <ThemedView style={styles.contactContainer}>
                <ThemedText type="subtitle">Get in Touch</ThemedText>

                <TouchableOpacity onPress={handleEmailPress} style={styles.contactMethod}>
                    <IconSymbol name="envelope.fill" size={24} color="#007AFF" />
                    <ThemedText style={styles.contactText}>woluwe.internaat@donbosco.be</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity onPress={handlePhonePress} style={styles.contactMethod}>
                    <IconSymbol name="phone.fill" size={24} color="#007AFF" />
                    <ThemedText style={styles.contactText}>0473 21 81 54</ThemedText>
                </TouchableOpacity>

                <ThemedView style={styles.addressContainer}>
                    <ThemedText type="subtitle">Our Address</ThemedText>
                    <ThemedText>

                    </ThemedText>
                </ThemedView>
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
    contactContainer: {
        gap: 16,
    },
    contactMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12,
    },
    contactText: {
        fontSize: 16,
    },
    addressContainer: {
        marginTop: 16,
        gap: 8,
    },
});