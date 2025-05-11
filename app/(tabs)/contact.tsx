import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import LiggingInternaat from '@/components/LiggingInternaat';
import ContactInfo from '@/components/ContactInfo';
import Bereikbaarheid from '@/components/Bereikbaarheid';

export default function ContactScreen() {
    return (
        <ParallaxScrollView
            style={styles.container} // Ensures outermost background
            headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="person.crop.circle.fill"
                    style={styles.headerImage}
                />
            }
            contentContainerStyle={styles.scrollContent}
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Contacteer ons</ThemedText>
            </ThemedView>

            {/* Ensure all child components inherit background correctly */}
            <ThemedView style={styles.section}>
                <ContactInfo />
            </ThemedView>

            <ThemedView style={styles.section}>
                <LiggingInternaat />
            </ThemedView>

            <ThemedView style={styles.section}>
                <Bereikbaarheid />
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
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
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    section: {
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
    },
});
