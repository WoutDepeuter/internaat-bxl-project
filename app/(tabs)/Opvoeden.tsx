import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function OpvoedenScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#E0E0E0', dark: '#2C2C2C' }}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="person.2.fill"
                    style={styles.headerImage}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Opvoeden met Don Bosco</ThemedText>
            </ThemedView>

            <ThemedView style={styles.contentContainer}>
                <ThemedText type="subtitle">Onze Opvoedingsvisie</ThemedText>
                <ThemedText>
                    Don Bosco staat voor een holistische opvoedingsbenadering die zich richt op de volledige
                    ontwikkeling van jonge mensen. Onze methodiek is gebaseerd op preventie, liefde en
                    redelijkheid, met als doel elk kind te helpen groeien tot een verantwoordelijke,
                    gelukkige volwassene.
                </ThemedText>

                <ThemedText type="subtitle">Kernwaarden</ThemedText>
                <ThemedText>
                    • Persoonlijke begeleiding
                    • Respect voor individualiteit
                    • Positieve ondersteuning
                    • Geloof in de mogelijkheden van elke jongere
                </ThemedText>

                <ThemedText type="subtitle">Onze Aanpak</ThemedText>
                <ThemedText>
                    Wij geloven in een opvoedingsaanpak die:
                    - Jongeren centraal stelt
                    - Talenten ontwikkelt
                    - Sociale vaardigheden stimuleert
                    - Een veilige en ondersteunende omgeving biedt
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
});