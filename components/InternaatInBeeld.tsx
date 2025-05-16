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

            <InternaatSection
                image={require('@/assets/images/internaat-beeld/leefruimte.jpeg')}
                title="De leefruimte"
                subtitle="Een gezellige ontspanningsruimte per leeftijdsgroep"
                bullets={[
                    'Bar die uitnodigt tot gezellig samenzijn',
                    'Pool- en biljarttafel, pingpongtafel, tafelvoetbal, ...',
                    'Playstation, Wii, ...',
                    'Tal van gezelschapsspellen en heel wat speelgoed',
                    'Bibliotheek leesboeken en stripboeken',
                    'TV-hoek met internetaansluiting (Netflix, ...)',
                ]}
            />

            <InternaatSection
                image={require('@/assets/images/internaat-beeld/eetzaal.jpeg')}
                title="De eetzaal en de keuken"
                subtitle="Hier kunnen we gezellig tafelen"
                bullets={[
                    'Ruime cafetaria',
                    'Gevarieerd menu',
                    'Halalmaaltijd en vegetarische maaltijd mogelijk',
                    'Extra\'s op feestdagen',
                    'Suggesties door de jongeren mogelijk',
                    'Een enthousiaste chef',
                ]}
            />

            <InternaatSection
                image={require('@/assets/images/internaat-beeld/buitenspeelruimte.jpeg')}
                title="De buitenspeelruimte"
                subtitle="De plek om je uit te leven"
                bullets={[
                    'Een speelplaats met sportvelden, een podium en gezellige zithoeken, ontworpen door de leerlingen',
                    'Een park en speelbos in de buurt (steeds onder begeleiding van opvoeders)',
                    'Externe activiteiten bij de deur (meestal op woensdagnamiddag)',
                ]}
            />

            <InternaatSection
                image={require('@/assets/images/internaat-beeld/lokalen.jpeg')}
                title="De andere lokalen"
                subtitle="Een ontdekkingstocht"
                bullets={[
                    'Open leercentrum met tal van mogelijkheden om te studeren, samen of individueel',
                    'Vergaderzaaltje voor overlegmomenten',
                    'Atelier voor knutselprojecten',
                    'Keukentje voor kookactiviteiten',
                    'Stille ruimte om tot rust te komen',
                    'Fitnessruimte om je uit te leven',
                    'Sportzaal om de hoek',
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
