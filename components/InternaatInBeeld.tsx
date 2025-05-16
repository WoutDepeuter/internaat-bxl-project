import React from 'react';
import { View, StyleSheet } from 'react-native';
import InternaatSection from '@/components/InternaatSection';

export default function InternaatInBeeld() {
    return (
        <View style={styles.container}>
            <InternaatSection
                image={require('@/assets/images/internaat-beeld/kamer.jpeg')}
                title="De kamer"
                subtitle="Een gezellige, comfortabele kamer met volledige uitrusting."
                bullets={[
                    'Jongens en meisjes slapen in gescheiden gangdelen',
                    'Gedeelde kamer voor de kinderen per 2, 3 of 4',
                    'Eigen kamer vanaf 14 jaar',
                    'Bed, studiehoek, persoonlijke opbergkast, prikbord of magneetbord, wastafel of gedeelde badkamer',
                ]}
            />

            <InternaatSection
                image={require('@/assets/images/internaat-beeld/sanitair.jpeg')}
                title="Het sanitair"
                subtitle="Ons privaat plekje"
                bullets={[
                    'Toiletten voor jongens en meisjes gescheiden in elke leefgroep, verbonden aan de kamer of in de nabijheid van de kamer',
                    'Vernieuwde doucheruimtes voor jongens en meisjes',
                    'Genderneutrale toiletruimte',
                ]}
            />

            <InternaatSection
                image={require('@/assets/images/internaat-beeld/studieruimte.jpeg')}
                title="De studieruimte"
                subtitle="Een uitnodiging tot studeren"
                bullets={[
                    'Een eigen bureau',
                    'Krachtige WiFi',
                    'Leerhulpmiddelen aanwezig',
                    'Kleine bibliotheek',
                    'Kleine lokaaltjes verbonden aan de studieruimte om samen te studeren, elkaar op te vragen ...',
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
    },
});
