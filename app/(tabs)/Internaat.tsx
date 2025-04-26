import { StyleSheet, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function InternaatScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#E0E0E0', dark: '#2C2C2C' }}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="building.2.fill"
                    style={styles.headerImage}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Ons Internaat</ThemedText>
            </ThemedView>

            <ThemedView style={styles.contentContainer}>
                <ThemedText type="subtitle">Over Ons Internaat</ThemedText>
                <ThemedText>
                    Het Don Bosco Internaat in Sint-Pieters-Woluwe biedt een veilige, ondersteunende
                    en stimulerende leefomgeving voor studenten. We geloven in de persoonlijke groei
                    en ontwikkeling van elke jongere.
                </ThemedText>

                <ThemedText type="subtitle">Faciliteiten</ThemedText>
                <ThemedText>
                    • Moderne slaapzalen
                    • Studieruimtes
                    • Recreatieruimtes
                    • 24/7 begeleiding
                    • Gezonde maaltijden
                    • Sportfaciliteiten
                </ThemedText>

                <ThemedText type="subtitle">Dagelijks Leven</ThemedText>
                <ThemedText>
                    Onze dagelijkse routine is erop gericht om:
                    - Studiebegeleiding te bieden
                    - Sociale vaardigheden te ontwikkelen
                    - Een gezonde levensstijl te promoten
                    - Persoonlijke groei te stimuleren
                </ThemedText>

                <ThemedText type="subtitle">Begeleiding</ThemedText>
                <ThemedText>
                    Onze ervaren opvoeders staan klaar om elke student individuele aandacht
                    en ondersteuning te bieden, zowel op academisch als persoonlijk vlak.
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