import { StyleSheet, TouchableOpacity, Linking } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import OnzeRegels from "@/components/OnzeRegels";
import InfoButtons from "@/components/ui/InschrijvenButtons";

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

            <OnzeRegels />
            <InfoButtons/>








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