import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function InternaatButtons() {
    const [activePanel, setActivePanel] = useState(null); // 'inschrijven', 'kostprijs', etc.
    const [gender, setGender] = useState('');

    const togglePanel = (panelName) => {
        setActivePanel(activePanel === panelName ? null : panelName);
    };

    return (
        <View style={styles.container}>
            {/* BUTTON ROW */}
            <View style={styles.buttonRow}>
                <InternaatButton
                    icon="file-document-outline"
                    label="Inschrijven"
                    onPress={() => togglePanel('inschrijven')}
                    isActive={activePanel === 'inschrijven'}
                />
                <InternaatButton
                    icon="currency-eur"
                    label="Kostprijs"
                    onPress={() => togglePanel('kostprijs')}
                    isActive={activePanel === 'kostprijs'}
                />
                <InternaatButton
                    icon="school"
                    label="Benodigdheden"
                    onPress={() => togglePanel('benodigdheden')}
                    isActive={activePanel === 'benodigdheden'}
                />
                <InternaatButton
                    icon="door-open"
                    label="Openingsuren"
                    onPress={() => togglePanel('openingsuren')}
                    isActive={activePanel === 'openingsuren'}
                />
            </View>

            {/* PANELS */}
            {activePanel && (
                <View style={styles.panel}>
                    {activePanel === 'inschrijven' && (
                        <View style={styles.panelContentRow}>
                            <Icon name="file-document-outline" size={32} color="#0055B3" style={styles.icon} />

                            <View style={{ flex: 1 }}>
                                <Text style={styles.title}>Inschrijven</Text>

                                <Text style={styles.linkLabel}>Hoe kan je inschrijven?</Text>
                                <Text style={styles.step}>
                                    <Text style={styles.bold}>1.</Text> Aanmelden voor de <Text style={styles.link}>wachtlijst van het internaat</Text> kan het hele jaar via onderstaand formulier. Wij raden aan hier niet mee te wachten want de vraag is de laatste jaren groter dan het aanbod.
                                </Text>

                                {/* FORM */}
                                <View style={styles.formRow}>
                                    <TextInput style={styles.input} placeholder="Naam interne" />
                                    <TextInput style={styles.input} placeholder="Voornaam" />
                                </View>
                                <TextInput style={styles.input} placeholder="Rijksregisternummer" />
                                <View style={styles.genderRow}>
                                    <Text style={styles.fieldLabel}>Geslacht:</Text>
                                    {['Vrouw', 'Man', 'Ander'].map((option) => (
                                        <TouchableOpacity
                                            key={option}
                                            onPress={() => setGender(option)}
                                            style={[
                                                styles.genderButton,
                                                gender === option && styles.genderSelected
                                            ]}
                                        >
                                            <Text>{option}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={styles.formRow}>
                                    <TextInput style={styles.input} placeholder="School" />
                                    <TextInput style={styles.input} placeholder="Richting / Leerjaar" />
                                </View>
                                <View style={styles.formRow}>
                                    <TextInput style={styles.input} placeholder="Contactpersoon" />
                                    <TextInput style={styles.input} placeholder="Telefoon contactpersoon" />
                                </View>
                                <TextInput style={styles.input} placeholder="Email contactpersoon" keyboardType="email-address" />
                                <Pressable style={styles.submitButton}>
                                    <Text style={styles.submitText}>Verzenden</Text>
                                </Pressable>

                                {/* INSTRUCTIES */}
                                <Text style={styles.step}>
                                    <Text style={styles.bold}>2.</Text> Het internaat neemt contact op met de contactpersoon om in samenspraak <Text style={styles.link}>een bezoek en/of een kennismakingsgesprek</Text> (intake) vast te leggen. Dit doen we meestal op vrijdagavond.{"\n"}
                                    <Text style={styles.bold}>Adres:</Text> Guldendallaan 90, 1150 Sint-Pieters-Woluwe{"\n"}
                                    <Text style={styles.bold}>Ingang:</Text> glazen deur met opschrift INTERNAAT en bel aan (onderste bel)
                                </Text>
                                <Text style={styles.step}>
                                    <Text style={styles.bold}>3.</Text> Na het kennismakingsgesprek laat de directeur je weten of je <Text style={styles.link}>in aanmerking komt</Text> voor een plaatsje op het internaat.
                                </Text>
                                <Text style={styles.step}>
                                    <Text style={styles.bold}>4.</Text> Je ontvangt dan <Text style={styles.link}>(indien gewenst) de documenten</Text> voor inschrijving op het internaat.
                                </Text>
                                <Text style={styles.step}>
                                    <Text style={styles.bold}>5.</Text> Je krijgt een berichtje en je <Text style={styles.link}>bezorgt de getekende documenten terug aan de directeur</Text>.
                                </Text>
                                <Text style={styles.step}>
                                    <Text style={styles.bold}>6.</Text> <Text style={styles.link}>De directeur tekent</Text> de documenten voor akkoord. Indien de documenten getekend werden door het kind/de jongere zelf, de ouder of voogd en de directeur is de inschrijving in orde.
                                </Text>

                                {/* EXTRA INFO */}
                                <Text style={styles.subTitleBlue}>Wanneer kan je inschrijven?</Text>
                                <Text style={styles.step}>• Aanmeldingen voor wachtlijsten kunnen het hele jaar door.</Text>
                                <Text style={styles.step}>• Inschrijvingen voor het volgende schooljaar kunnen vanaf januari.</Text>
                                <Text style={styles.step}> Er tijdig bij zijn is de boodschap!</Text>
                                <Text style={styles.step}>• Her-inschrijvingen gebeuren na de paasvakantie.</Text>

                                <Text style={styles.subTitleBlue}>Wat breng je mee voor inschrijving?</Text>
                                <Text style={styles.step}>• Identiteitskaart van het kind/de jongere.</Text>
                                <Text style={styles.step}>• Rijksregisternummer van de ouder/voogd.</Text>
                                <Text style={styles.step}>• Gegevens huisarts, ziekenfonds, verzekering.</Text>
                                <Text style={styles.step}>• Laatste schoolrapport.</Text>
                                <Text style={styles.step}>• Attest of diagnoseverslag in geval van leer- en concentratieproblemen.</Text>
                            </View>
                        </View>
                    )}


                    {activePanel === 'kostprijs' && (
                        <View style={styles.panelContentRow}>
                            <Icon name="currency-eur" size={32} color="#0055B3" style={styles.icon} />

                            <View style={{ flex: 1 }}>
                                <Text style={styles.title}>Hoeveel kost een verblijf op het Don Bosco internaat</Text>

                                <Text style={styles.step}>• De kostprijs voor een verblijf op internaat bedraagt <Text style={styles.bold}>350 euro/maand</Text> of <Text style={styles.bold}>3500 euro/jaar</Text>.</Text>
                                <Text style={styles.step}>• Bijkomende kost: <Text style={styles.bold}>8 euro/zondag</Text> voor de opvang op zondagavond. De afrekening gebeurt per trimester.</Text>

                                <Text style={styles.step}>• <Text style={styles.bold}>Schooltoeslag:</Text> Schoolkosten kunnen behoorlijk oplopen. Daarom geeft de Vlaamse overheid sinds het schooljaar 2019–2020 in bepaalde gevallen een schooltoeslag. Deze wordt uitbetaald door de uitbetaler van uw groeipakket.</Text>
                                <Text style={styles.step}>U kunt met al uw vragen hieromtrent terecht op:</Text>
                                <Text style={styles.step}> Het gratis nummer van de Vlaamse overheid: <Text style={styles.bold}>1700</Text></Text>
                                <Text style={styles.step}> Via het telefoonnummer: <Text style={styles.bold}>078 15 78 70</Text></Text>
                                <Text style={styles.link}> Via de website: www.groeipakket.be/tegemoetkomingen/schooltoeslag</Text>

                                <Text style={styles.step}>• <Text style={styles.bold}>Fiscaal attest:</Text> Ouders van kinderen jonger dan 14 jaar ontvangen dit attest om toe te voegen aan hun belastingaangifte.</Text>
                            </View>
                        </View>
                    )}


                    {activePanel === 'benodigdheden' && (
                        <View style={styles.panelContentRow}>
                            <Icon name="school" size={32} color="#0055B3" style={styles.icon} />

                            <View style={{ flex: 1 }}>
                                <Text style={styles.title}>Wat heb je nodig op het internaat</Text>

                                <Text style={styles.subTitleBlue}>Bij de start</Text>
                                <Text style={styles.redItalic}>Voorzie ieder voorwerp van de naam van de interne</Text>

                                <Text style={styles.step}>• Dekbed en kussen.</Text>
                                <Text style={styles.step}>• Dekbedovertrek, kussensloop en onderlaken.</Text>
                                <Text style={styles.step}>• Tapijtje om naast je bed te leggen.</Text>
                                <Text style={styles.step}>• Enkele posters om op te hangen in je slaapkamer.</Text>
                                <Text style={styles.step}>• Voor de oudere leerlingen die op de kamer studeren: een bureaulamp.</Text>
                                <Text style={styles.step}>• Een wekker.</Text>
                                <Text style={styles.step}>• GSM is toegestaan. Een lader voor de GSM. Een hoofdtelefoon is altijd handig!</Text>
                                <Text style={styles.step}>• Laptop of tablet in functie van de studies.</Text>
                                <Text style={styles.step}>• Boekentas met schoolbenodigdheden (pen, potlood, gom, slijper, …, passer, geodriehoek, rekenmachine). De meeste scholen geven een lijst met benodigdheden mee.</Text>
                                <Text style={styles.step}>• Extra schrijfmateriaal voor op het internaat.</Text>

                                <Text style={styles.warning}>
                                    LET WEL! Alle dure multimedia-apparatuur neem je mee op eigen risico.
                                </Text>

                                <Text style={styles.subTitleBlue}>Wekelijks</Text>
                                <Text style={styles.step}>• Je boekentas en alle schoolmateriaal.</Text>
                                <Text style={styles.step}>• Voldoende kledij voor 5 dagen (let op: ook ondergoed en kousen).</Text>
                                <Text style={styles.step}>• Jas (regenjack).</Text>
                                <Text style={styles.step}>• 2 paar schoenen voor dagelijks gebruik.</Text>
                                <Text style={styles.step}>• Sportieve buitenkledij om op het internaat te gebruiken (ook sportschoenen!).</Text>
                                <Text style={styles.step}>• Slaapkleed.</Text>
                                <Text style={styles.step}>• Handdoeken en washandjes (2 paar).</Text>
                                <Text style={styles.step}>• Badpak of zwembroek, badmuts en badhanddoek.</Text>
                                <Text style={styles.step}>• Douchegel en shampoo.</Text>
                                <Text style={styles.step}>• Haarborstel en/of kam.</Text>
                                <Text style={styles.step}>• Tandenborstel, tandpasta en beker.</Text>
                                <Text style={styles.step}>• Toiletzak.</Text>
                                <Text style={styles.step}>• Linnen zak voor vuile kledij.</Text>
                                <Text style={styles.step}>• Nodige medicijnen met medisch voorschrift indien nodig.</Text>
                            </View>
                        </View>
                    )}


                    {activePanel === 'openingsuren' && (
                        <View style={styles.panelContentRow}>
                            <Icon name="door-open" size={32} color="#0055B3" style={styles.icon} />

                            <View style={{ flex: 1 }}>
                                <Text style={styles.title}>Wanneer is het internaat open?</Text>

                                <Text style={styles.subTitleBlue}>Tijdens het schooljaar</Text>
                                <Text style={styles.step}>• Open op zondagavond vanaf 20u.</Text>
                                <Text style={styles.step}>• Alle schooldagen open.</Text>
                                <Text style={styles.step}>• Gesloten tijdens weekends, op feestdagen en tijdens schoolvakanties.</Text>

                                <Text style={styles.subTitleBlue}>Tijdens de vakantie (enkel voor inschrijvingen)</Text>
                                <Text style={styles.step}>• Open tot 10 juli en na 15 augustus.</Text>
                                <Text style={styles.step}>• Tijdens weekdagen.</Text>
                                <Text style={styles.step}>• Van 10u tot 16u.</Text>
                            </View>
                        </View>
                    )}

                </View>
            )}
        </View>
    );
}

function InternaatButton({ icon, label, onPress, isActive }) {
    return (
        <Pressable
            style={[
                styles.button,
                isActive && styles.activeButton
            ]}
            onPress={onPress}
        >
            <Icon name={icon} size={36} color="#0055B3" />
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    // Main layout
    container: {
        flex: 1,
        backgroundColor: '#3B86C6',
    },
    buttonRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 20,
        rowGap: 16,
        columnGap: 10,
    },

    button: {
        backgroundColor: '#FFF',
        borderColor: '#FFD700',
        borderWidth: 4,
        paddingVertical: 24,
        paddingHorizontal: 12,
        alignItems: 'center',
        width: '48%',
        height: 120,
        justifyContent: 'center',
    },

    activeButton: {
        backgroundColor: '#FFD700',
        borderColor: '#0055B3',
    },
    buttonLabel: {
        marginTop: 8,
        color: '#0055B3',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
    },

    // Panels
    panel: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderColor: '#DDD',
    },
    panelContent: {
        padding: 16,
        paddingBottom: 60, // Add extra padding at the bottom
    },

    // Added for icon + content layout
    panelContentRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
        padding: 16,
    },
    icon: {
        marginTop: 4,
    },

    // Section titles
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0055B3',
        marginBottom: 12,
    },
    subTitle: {
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 6,
        color: '#0055B3',
    },
    subTitleBlue: {
        color: '#0055B3',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 16,
        marginBottom: 8,
    },

    // Text formatting
    step: {
        fontSize: 14,
        marginBottom: 6,
        color: '#222',
    },
    textBlock: {
        fontSize: 15,
        color: '#222',
        marginBottom: 12,
    },
    bold: {
        fontWeight: 'bold',
    },
    warning: {
        color: '#D00',
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 8,
        marginBottom: 12,
    },
    link: {
        color: '#0055B3',
        textDecorationLine: 'underline',
        marginBottom: 8,
    },

    // Inschrijven form
    formRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#CCC',
        padding: 10,
        backgroundColor: '#FFF',
        marginBottom: 10,
    },
    genderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 10,
    },
    fieldLabel: {
        marginRight: 8,
        fontWeight: 'bold',
    },
    genderButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#999',
    },
    genderSelected: {
        backgroundColor: '#FFD700',
        borderColor: '#0055B3',
    },
    submitButton: {
        backgroundColor: '#FFD700',
        padding: 12,
        alignItems: 'center',
        marginBottom: 16,
    },
    submitText: {
        color: '#000',
        fontWeight: 'bold',
    },

    linkLabel: {
        color: '#0055B3',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 8,
    },
    link: {
        color: '#0055B3',
        textDecorationLine: 'underline',
    },

});