import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import ChalkboardIcon from '@/assets/svgs/internaat-meer/person-chalkboard-solid.svg';
import RoofIcon from '@/assets/svgs/internaat-meer/people-roof-solid.svg';
import TheaterIcon from '@/assets/svgs/internaat-meer/masks-theater-regular.svg';

const boxData = [
    {
        icon: ChalkboardIcon,
        title: 'Studiebegeleiding',
        content: [
            'Studeren doen we in groep en/of individueel.',
            'We zorgen voor een rustig studieklimaat voor elke interne.',
            'We voorzien voldoende studietijd op regelmatige tijdstippen.',
            'We leren een juiste studiemethode hanteren onder leiding van een studiecoach.',
            'We organiseren studiebegeleiding op maat van elke jongere met de nodige aandacht voor leerproblemen.',
            'We beschikken over de nodige multimedia en allerhande onderwijsleermiddelen.',
            'We doen dit onder begeleiding van een team geschoolde studiebegeleiders.',
            'Zij volgen de schoolresultaten op en sturen bij waar nodig.',
            "We krijgen soms ook bijles van vrijwillige buddy's waar nodig.",
            'We werken daarbij ook op een intense manier samen met de school van de jongere.',
        ],
    },
    {
        icon: RoofIcon,
        title: 'Leefgroep-begeleiding',
        content: [
            'Het internaat is onderverdeeld in 3 leefgroepen.',
            { text: 'De eerste leefgroep zijn jongens en meisjes van de lagere school en het eerste jaar secundair.', indent: true },
            { text: 'De tweede leefgroep zijn de jongens en meisjes van het 2e tot het 4e jaar secundair.', indent: true },
            { text: 'De derde leefgroep zijn de jongeren van het 5e tot het 7e jaar secundair.', indent: true },
            'De leefgroepen worden begeleid door een sterk team van enthousiaste opvoeders per leeftijdsgroep.',
            'In elke leefgroep hanteren we een duidelijke dagindeling: rust en regelmaat, studie en ontspanning.',
            'Tijdens georganiseerde activiteiten en vrije momenten leren we omgaan met elkaar.',
            'De opvoeder staat midden tussen de jongeren en heeft een luisterend oor, geeft een speelse knipoog en een bemoedigend schouderklopje wanneer nodig. Hij is oprecht geïnteresseerd in de talenten van elke jongere.',
            'In de leefgroep oefenen jongeren dagdagelijks sociale vaardigheden: ze leren respectvol omgaan met elkaar en leren conflicten herstellen.',
            'Jongeren groeien doorheen de verschillende leeftijdsgroepen in verantwoordelijkheid en zelfstandigheid: een mening leren ontwikkelen, mee de handen uit de mouwen steken, zich engageren binnen en buiten het internaat.',
            'Indien extra ondersteuning nodig blijkt, kan een individueel begeleider helpen de juiste weg te vinden naar een goede oplossing. Doorverwijzing naar een samenwerking met tal van externe partners is mogelijk: coaches, psychologen, logopedisten, ...',
        ],
    },
    {
        icon: TheaterIcon,
        title: 'Activiteiten',
        content: [
            'Activiteiten tijdens de avond.',
            { text: 'We organiseren sport- en spel activiteiten, knutselactiviteiten, creamomenten, kooksessies, ...', indent: true },
            { text: 'In de leefgroepen zijn heel wat uitdagende spelen aanwezig: biljart, pool, pingpong, airhockey, fitness, playstation, Wii, ... Daarnaast spelen we samen gezelschapsspellen, zoals kaarten, monopolie, scrabble, twister, uno, junglespeed, ... of we lezen een boek of een strip.', indent: true },
            { text: 'Er is een grote sportzaal en groene speelplaats waar allerhande sport- en spelactiviteiten kunnen plaatsvinden: voetbal, basketbal, badminton, volleybal, gocarten, verstoppertje spelen, karaoke op het podium, genieten van de zon op een bankje, gezellig samen tafelen, een barbecue met je leefgroep, het opzetten van ons springkasteel, ...', indent: true },
            { text: 'Deelname aan externe (sport)activiteiten in de buurt kan, weliswaar afhankelijk van de leeftijd en vervoersmogelijkheden én altijd in overleg met de ouders.', indent: true },

            'Activiteiten op woensdagnamiddag.',
            { text: 'We organiseren groepsactiviteiten en uitstappen van 14u tot 16u30: kennismakingsspelen, lego masters, één tegen allen, sportnamiddag, samen koken, bowlen, schaatsen, bioscoopbezoek, trampoline springen, escape room, ...', indent: true },
            { text: 'De oudste jongeren (vanaf 16 jaar) kunnen, in overleg met de ouders, af en toe genieten van een vrije woensdagnamiddag.', indent: true },
            { text: 'De mening van de jongeren wordt gerespecteerd bij de keuze van activiteiten. Hulp bij de organisatie ervan is ook altijd welkom.', indent: true },
        ],
    },
];


export default function InternaatEigenschappen() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <View style={styles.wrapper}>
            {/* TOP 3 BUTTONS */}
            <View style={styles.container}>
                {boxData.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = index === activeIndex;

                    return (
                        <TouchableOpacity
                            key={index}
                            style={[styles.box, isActive && styles.boxActive]}
                            onPress={() => setActiveIndex(index)}
                        >
                            <Icon width={36} height={36} fill={isActive ? '#248ef2' : '#0761b7'} />
                            <Text style={[styles.title, { color: isActive ? '#248ef2' : '#0761b7' }]}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* DETAILS BOX */}
            {activeIndex !== null && (() => {
                const DetailIcon = boxData[activeIndex].icon;
                return (
                    <View style={styles.detailBox}>
                        <DetailIcon width={32} height={32} fill="black" />
                        <Text style={styles.detailTitle}>{boxData[activeIndex].title}</Text>
                        {Array.isArray(boxData[activeIndex]?.content) &&
                            boxData[activeIndex].content.map((entry, idx) => {
                                const isObject = typeof entry === 'object' && entry !== null && 'text' in entry;
                                const text = isObject ? entry.text : entry;
                                const isIndented = isObject && entry.indent;

                                return (
                                    <Text
                                        key={idx}
                                        style={[
                                            styles.detailParagraph,
                                            isIndented && styles.indentParagraph,
                                        ]}
                                    >
                                        {isIndented ? '▪ ' : '▪ '}
                                        {text}
                                    </Text>
                                );
                            })}

                    </View>
                );
            })()}

        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 16,
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    box: {
        borderWidth: 5,
        borderColor: '#f4d735',
        paddingVertical: 24,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        width: '46%',
        minWidth: 120,
        backgroundColor: '#fff',
    },
    boxActive: {
        borderColor: '#248ef2',
    },
    title: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    detailBox: {
        marginTop: 24,
        backgroundColor: '#efefef',
        padding: 24,
        width: '100%',
        alignItems: 'center',
    },
    detailTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0761b7',
        marginTop: 12,
        marginBottom: 8,
        textAlign: 'center',
    },
    detailDescription: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
    detailParagraph: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
        textAlign: 'left',
        width: '100%',
    },
    indentParagraph: {
        marginLeft: 32,
    },

});
