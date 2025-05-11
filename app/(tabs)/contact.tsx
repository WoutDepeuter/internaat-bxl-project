import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import LiggingInternaat from '@/components/LiggingInternaat';

import ContactInfo from '@/components/ContactInfo';
import Bereikbaarheid from "@/components/Bereikbaarheid"; // your styled contact section

export default function ContactScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }} // Adjust dark mode if needed
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="person.crop.circle.fill"
                    style={styles.headerImage}
                />
            }
            contentContainerStyle={styles.scrollContent} // Add this line
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Contacteer ons</ThemedText>
            </ThemedView>

            <ContactInfo />
            <LiggingInternaat />
            <Bereikbaarheid />
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
    scrollContent: {
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 16, // Apply padding bottom here
    },
});


