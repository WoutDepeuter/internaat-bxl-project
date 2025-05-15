import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function InternaatButtons() {
    const [activePanel, setActivePanel] = useState(null); // 'inschrijven', 'kostprijs', etc.
    const [gender, setGender] = useState('');
    const scrollRef = useRef();

    const togglePanel = (panelName) => {
        setActivePanel(activePanel === panelName ? null : panelName);
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ y: 0, animated: true });
        }
    }, [activePanel]);

    return (
        <View style={styles.section}>
            {/* BUTTON ROW */}
            <View style={styles.buttonRow}>
                <InternaatButton
                    icon="file-document-outline"
                    label="Inschrijven"
                    onPress={() => togglePanel('inschrijven')}
                />
                <InternaatButton
                    icon="currency-eur"
                    label="Kostprijs"
                    onPress={() => togglePanel('kostprijs')}
                />
                <InternaatButton
                    icon="school"
                    label="Benodigdheden"
                    onPress={() => togglePanel('benodigdheden')}
                />
                <InternaatButton
                    icon="door-open"
                    label="Openingsuren"
                    onPress={() => togglePanel('openingsuren')}
                />
            </View>

            {/* PANELS */}
            <ScrollView
                ref={scrollRef}
                style={styles.panel}
                contentContainerStyle={{ paddingBottom: 40 }}
            >
                {activePanel === 'inschrijven' && (
                    <>
                        <Text style={styles.title}>Hoe kan je inschrijven?</Text>
                        <View style={styles.formRow}>
                            <TextInput style={styles.input} placeholder="Naam interne" />
                            <TextInput style={styles.input} placeholder="Voornaam" />
                        </View>
                        <View style={styles.formRow}>
                            <TextInput style={styles.input} placeholder="Rijksregisternummer" />
                        </View>

                        <View style={styles.genderRow}>
                            <Text style={styles.label}>Geslacht:</Text>
                            {['Vrouw', 'Man', 'Ander'].map((option) => (
                                <TouchableOpacity
                                    key={option}
                                    onPress={() => setGender(option)}
                                    style={[
                                        styles.genderButton,
                                        gender === option && styles.genderSelected,
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

                        <TextInput
                            style={styles.input}
                            placeholder="Email contactpersoon"
                            keyboardType="email-address"
                        />

                        <Pressable style={styles.submitButton}>
                            <Text style={styles.submitText}>Verzenden</Text>
                        </Pressable>

                        <Text style={styles.subTitle}>Instructies</Text>
                        <Text style={styles.step}>1. Aanmelden voor de wachtlijst...</Text>
                        <Text style={styles.step}>2. Internaat neemt contact op...</Text>
                        <Text style={styles.step}>3. Kennismakingsgesprek...</Text>
                        <Text style={styles.step}>4. Ontvangst documenten...</Text>
                        <Text style={styles.step}>5. Getekende documenten terugsturen...</Text>
                        <Text style={styles.step}>6. Goedkeuring door de directeur...</Text>

                        <Text style={styles.subTitle}>Wat breng je mee?</Text>
                        <Text style={styles.step}>- Identiteitskaart kind</Text>
                        <Text style={styles.step}>- Schoolrapport, toelagen, enz.</Text>
                    </>
                )}

                {activePanel === 'kostprijs' && (
                    <View>
                        <Text style={styles.title}>Hoeveel kost een verblijf op het Don Bosco internaat</Text>
                        <Text style={styles.step}>• De kostprijs voor een verblijf op internaat bedraagt <Text style={styles.bold}>350 euro/maand</Text> of <Text style={styles.bold}>3500 euro/jaar</Text>.</Text>
                        <Text style={styles.step}>• Bijkomende kost: 8-eur/avond voor de opvang op zondagavond. De afrekening hiervan gebeurt per trimester.</Text>
                        <Text style={styles.step}>• <Text style={styles.bold}>Schooltoeslag:</Text> Schoolkosten kunnen behoorlijk oplopen. Daarom geeft de Vlaamse overheid sinds het schooljaar 2019-2020 in bepaalde gevallen een schooltoeslag. Deze wordt uitbetaald door de uitbetaler van uw groeipakket.</Text>
                        <Text style={styles.step}>U kunt met al uw vragen hieromtrent terecht op:</Text>
                        <Text style={styles.step}> • Het gratis nummer van de Vlaamse overheid: <Text style={styles.bold}>1700</Text></Text>
                        <Text style={styles.step}> • Via het telefoonnummer: <Text style={styles.bold}>078 15 78 70</Text></Text>
                        <Text style={styles.link}>
                            • Via de website: www.groeipakket.be/tegemoetkomingen/schooltoeslag
                        </Text>
                        <Text style={styles.step}>• <Text style={styles.bold}>Fiscaal attest:</Text> Ouders van kinderen jonger dan 14 jaar ontvangen dit attest om toe te voegen aan hun belastingaangifte.</Text>
                    </View>
                )}


                    {activePanel === 'benodigdheden' && (
                        <View>
                            <Text style={styles.title}>Wat heb je nodig op het internaat</Text>

                            <Text style={styles.subTitleBlue}>Bij de start</Text>
                            <Text style={styles.step}>• Dekbed en kussen.</Text>
                            <Text style={styles.step}>• Dekbedovertrek, kussensloop en onderlaken.</Text>
                            <Text style={styles.step}>• Tapijtje om naast je bed te leggen.</Text>
                            <Text style={styles.step}>• Enkele posters om op te hangen in je slaapkamer.</Text>
                            <Text style={styles.step}>• Voor de oudere leerlingen: bureau en bureaulamp.</Text>
                            <Text style={styles.step}>• Een wekker.</Text>
                            <Text style={styles.step}>• GSM is toegestaan. Een lader en hoofdtelefoon zijn handig!</Text>
                            <Text style={styles.step}>• Laptop of tablet voor studie (afhankelijk van school).</Text>
                            <Text style={styles.step}>
                                • Boekentas met schoolbenodigdheden (pen, potlood, gom, slijper, passer, rekenmachine, enz.).
                            </Text>
                            <Text style={styles.step}>• Extra schrijfmateriaal voor op het internaat.</Text>

                            <Text style={styles.warning}>
                                LET WEL! Alle dure multimedia-apparatuur neem je mee op eigen risico.
                            </Text>

                            <Text style={styles.subTitleBlue}>Wekelijks</Text>
                            <Text style={styles.step}>• Je boekentas en alle schoolmateriaal.</Text>
                            <Text style={styles.step}>• Voldoende kledij voor 5 dagen (incl. ondergoed en sokken).</Text>
                            <Text style={styles.step}>• Jas (regenjas).</Text>
                            <Text style={styles.step}>• 2 paar schoenen voor dagelijks gebruik.</Text>
                            <Text style={styles.step}>• Sportieve buitenschoenen voor het internaat.</Text>
                            <Text style={styles.step}>• Slaapkleed of pyjama.</Text>
                            <Text style={styles.step}>• Handdoeken of washandjes (2 paar).</Text>
                            <Text style={styles.step}>• Badpak of zwembroek, badmuts en badhanddoek.</Text>
                            <Text style={styles.step}>• Douchegel en shampoo.</Text>
                            <Text style={styles.step}>• Haarborstel en/of kam.</Text>
                            <Text style={styles.step}>• Tandenborstel, tandpasta en beker.</Text>
                            <Text style={styles.step}>• Toiletzak.</Text>
                            <Text style={styles.step}>• Linnen zak voor vuile kledij.</Text>
                            <Text style={styles.step}>• Nodige medicatie met medisch voorschrift indien nodig.</Text>
                        </View>
                    )}




                    {activePanel === 'openingsuren' && (
                        <View>
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
                    )}


            </ScrollView>
        </View>
    );
}

function InternaatButton({ icon, label, onPress }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Icon name={icon} size={36} color="#0055B3" />
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    // Main layout
    section: {
        backgroundColor: '#3B86C6',
        paddingVertical: 24,
        flex: 1,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 16,
    },

    // Buttons
    button: {
        backgroundColor: '#FFF',
        borderColor: '#FFD700',
        borderWidth: 4,
        paddingVertical: 24,
        paddingHorizontal: 12,
        borderRadius: 4,
        alignItems: 'center',
        width: 100,
        height: 120,
        justifyContent: 'center',
    },
    label: {
        marginTop: 8,
        color: '#0055B3',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
    },

    // Panels
    panel: {
        backgroundColor: '#FFF',
        padding: 16,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#DDD',
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
        borderRadius: 6,
        backgroundColor: '#FFF',
        marginBottom: 10,
    },
    genderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        gap: 10,
    },
    label: {
        marginRight: 8,
        fontWeight: 'bold',
    },
    genderButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
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
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    submitText: {
        color: '#000',
        fontWeight: 'bold',
    },
});