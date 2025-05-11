import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

import ChildIcon from '@/assets/svgs/donbosco-wie/child-reaching-solid.svg';
import ChurchIcon from '@/assets/svgs/donbosco-wie/church-solid.svg';
import HandsIcon from '@/assets/svgs/donbosco-wie/hands-holding-child-solid.svg';
import PeopleIcon from '@/assets/svgs/donbosco-wie/people-group-solid.svg';


const tabs = [
    "Wie was Don Bosco?",
    "Ons opvoedingsproject",
    "Onze waarden",
    "Partners",
];

const iconComponents = [
    ChildIcon,
    ChurchIcon,
    HandsIcon,
    PeopleIcon,
];

const content = {
    "Wie was Don Bosco?": [
        {
            title: 'Jeugd',
            text: `Giovanni Bosco wordt op 16 augustus 1815 geboren in Becchi (Noord-Italië, nabij Turijn). Hij groeit op in een arm, vaderloos gezin op het platteland.\n\nDe rode draad doorheen zijn moeilijke jeugd is werken én studeren, dag en nacht want het is zijn ultieme wens om priester te worden. Slim en koppig als hij is, lukt het hem om priester te worden in 1841.`,
            icon: require('../assets/svgs/donbosco-wie/child-reaching-solid.svg'),
            image: require('../assets/images/donbosco-wie/DonBoscoJeugd.jpeg'),
        },
        {
            title: 'Priesterschap',
            text: `Als priester kiest hij voor de moeilijke weg : Don Bosco trekt van het platteland naar de grootstad Turijn en word daar getroffen door de vele jongeren die er doelloos en dakloos rondzwerven op straat op zoek naar werk dat er niet is.\n\nHij ziet kinderen en jongeren in de meest verschrikkelijke omstandigheden werken en overleven. Ze komen terecht in de gevangenis tussen de zware misdadigers. Hij voelt zich geroepen om zich over hen te ontfermen. Een ongebruikelijke keuze voor een priester in die tijd.`,
            icon: require('../assets/svgs/donbosco-wie/church-solid.svg'),
        },
        {
            title: 'Levenswerk',
            text: `Het wordt zijn levenswerk: hij richt een oratorium op: een plaats waar deze jongeren samen thuis komen in spel, studie, gebed, … Het oratorium in Valdocco, buitenwijk van Turijn, start in 1846.\n\nZijn oudste jongens worden zijn eerste medewerkers.`,
            icon: require('../assets/svgs/donbosco-wie/hands-holding-child-solid.svg'),
            image: require('../assets/images/donbosco-wie/DonBoscoPriester.jpeg'),
        },
        {
            title: 'Opvolging',
            text: `Daaruit ontstaat de congregatie van de salesianen en later de zusters van Don Bosco, vandaag wereldwijd aanwezig met tal van projecten voor en met jongeren.\n\nDon Bosco sterft op 31 januari 1888.\n\nIn 1891 komen de eerste salesianen naar België.\nOver de hele wereld wordt zijn pedagogische visie vertaald naar de praktijk van vandaag`,
            icon: require('../assets/svgs/donbosco-wie/people-group-solid.svg'),
        },
    ],
};

export default function SharedTopBar() {
    const [activeTab, setActiveTab] = useState('Wie was Don Bosco?');
    const { width } = useWindowDimensions();

    const isSmallScreen = width < 768;

    return (
        <View style={{ flex: 1 }}>
            {/* Top Tabs */}
            <View style={styles.tabContainer}>
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tab, activeTab === tab ? styles.tabActive : styles.tabInactive]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={activeTab === tab ? styles.tabTextActive : styles.tabTextInactive}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Content */}
            <ScrollView style={styles.contentContainer}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{activeTab}</Text>
                    <View style={styles.underline} />
                </View>

                {activeTab === 'Wie was Don Bosco?' &&
                    content[activeTab].map((section, index) => {
                        const Icon = iconComponents[index];
                        return (
                            <View
                                key={index}
                                style={[styles.row, isSmallScreen && styles.rowMobile]}
                            >
                                {/* Icon */}
                                <View style={styles.column}>
                                    {Icon && <Icon width={40} height={40} fill="#0761b7" />}
                                </View>

                                {/* Text */}
                                <View style={styles.textColumn}>
                                    <Text style={styles.subtitle}>{section.title}</Text>
                                    <Text style={styles.paragraph}>{section.text}</Text>
                                </View>

                                {/* Image */}
                                <View style={styles.column}>
                                    {section.image && (
                                        <Image
                                            source={section.image}
                                            style={[
                                                styles.image,
                                                { width: isSmallScreen ? width * 0.8 : 300, height: isSmallScreen ? 200 : 250 },
                                            ]}
                                            resizeMode="cover"
                                        />
                                    )}
                                </View>
                            </View>
                        );
                    })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tab: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        minWidth: '50%', // Ensures two-per-row layout on narrow screens
    },
    tabActive: {
        backgroundColor: '#248ef2',
    },
    tabInactive: {
        backgroundColor: '#f4d735',
    },
    tabTextActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
    tabTextInactive: {
        color: '#000',
        fontWeight: 'bold',
    },
    contentContainer: {
        padding: 16,
    },
    titleWrapper: {
        alignSelf: 'flex-start',
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0761b7',
    },
    underline: {
        marginTop: 4,
        height: 2,
        backgroundColor: '#0761b7',
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 24,
        alignItems: 'flex-start',
    },
    rowMobile: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    column: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4,
        marginBottom: 12,
    },
    textColumn: {
        flex: 2,
        paddingHorizontal: 8,
        width: '100%',
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    paragraph: {
        fontSize: 14,
        lineHeight: 20,
        color: '#333',
    },
    image: {
        marginTop: 16,
        marginBottom: 16,
    },
});