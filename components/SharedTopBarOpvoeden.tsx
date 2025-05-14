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

import HomeHeartIcon from '@/assets/svgs/donbosco-opvoedingsproject/home-heart-svgrepo-com.svg';
import SchoolIcon from '@/assets/svgs/donbosco-opvoedingsproject/home-heart-svgrepo-com.svg'; // same icon as above
import VolleyballIcon from '@/assets/svgs/donbosco-opvoedingsproject/volleyball-solid.svg';
import HandsHeartIcon from '@/assets/svgs/donbosco-opvoedingsproject/hands-holding-heart-svgrepo-com.svg';
const DonBoscoOpvoedingsprojectImage = require('../assets/images/donbosco-opvoedingsproject/DonBoscoOpvoedingsproject.jpeg');

import IconsSolid from '@/assets/svgs/donbosco-waarden/icons-solid.svg';
import HandshakeIcon from '@/assets/svgs/donbosco-waarden/handshake-regular.svg';
import HandsHoldingIcon from '@/assets/svgs/donbosco-waarden/hands-holding-svgrepo-com.svg';

import OpsommingOpvoedenOnzeWaarden from '@/components/OpsommingOpvoedenOnzeWaarden';

import HandshakePartnersIcon from '@/assets/svgs/donbosco-partners/handshake-svgrepo-com.svg';

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

const opvoedingsprojectIcons = [
    HomeHeartIcon,
    SchoolIcon,
    VolleyballIcon,
    HandsHeartIcon,
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
    "Ons opvoedingsproject": [
        {
            title: 'Het internaat als thuis',
            text: `Een thuis bieden betekent jongeren een nestwarmte aanreiken, een respectvolle omgeving waar ze ervaren dat ze erbij horen, een plaats waar ze tot rust kunnen komen, zichzelf kunnen en mogen zijn. Hier mogen ze fouten maken en worden ze toch nog graag gezien.`,
        },
        {
            title: 'Het internaat als leerplek/school',
            text: `Naast een thuis is het internaat uiteraard ook een leerplaats. Een school aanbieden is de mogelijkheid geven om vaardigheden en kennis aan te leren, een plaats waar jongeren leren verantwoordelijkheid dragen ten aanzien van mekaar.`,
        },
        {
            title: 'Het internaat als speelplaats',
            text: `De ruimte om te spelen, een speelplaats is een onmisbare leerschool in het internaat: de gelegenheid om relaties aan te gaan, mensen nabij te zijn, in een ontspannen sfeer, met de mogelijkheid om hobby's en interesses te ontdekken en vorm te geven.`,
        },
        {
            title: 'Het internaat als zin-plek',
            text: `Het internaat wil voor jongeren ook een zin-plek of parochie zijn, een gemeenschap waarin jonge mensen op zoek kunnen gaan naar de grond van hun bestaan, naar zingeving. Het is een plek waar ze hun geloof mogen leren kennen, vieren en beleven.`,
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
                    <Text style={styles.title}>
                        {activeTab === 'Ons opvoedingsproject'
                            ? 'Wat is ons opvoedingsproject?'
                            : activeTab === 'Onze waarden'
                                ? 'Welke waarden vinden we belangrijk binnen de opvoeding bij Don Bosco?'
                                : activeTab === 'Partners'
                                    ? 'Wie zijn onze partners in opvoeding?'
                                    : activeTab}
                    </Text>
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
                {activeTab === 'Ons opvoedingsproject' &&
                    <>
                        <Text style={styles.paragraph}>
                            In de 19e eeuw richtte Don Bosco het oratorium op voor de jongeren.{"\n\n"}
                            Een eenvoudige plaats in de stad waar jongeren kunnen thuis komen, elkaar ontmoeten, leren lezen en schrijven, een vakopleiding krijgen, samen spelen en ravotten, eten en bidden.{"\n\n"}
                            Op het oratorium stoelt het opvoedingsproject met name op volgende vier elementen :{"\n\n"}
                        </Text>

                        <View style={{ alignItems: 'center', marginVertical: 16 }}>
                            <Image
                                source={DonBoscoOpvoedingsprojectImage}
                                style={{
                                    width: isSmallScreen ? 200 : 320,
                                    height: isSmallScreen ? 200 : 240,
                                }}
                                resizeMode="cover"
                            />
                        </View>

                        {content[activeTab].map((section, index) => {
                            const Icon = opvoedingsprojectIcons[index];
                            return (
                                <View key={index} style={[styles.row, isSmallScreen && styles.rowMobile]}>
                                    <View style={styles.column}>
                                        {Icon && <Icon width={40} height={40} fill="#0761b7" />}
                                    </View>

                                    <View style={styles.textColumn}>
                                        <Text style={styles.subtitle}>{section.title}</Text>
                                        <Text style={styles.paragraph}>{section.text}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </>
                }

                {activeTab === 'Onze waarden' &&
                    <>
                        <Text style={styles.paragraph}>
                            Centraal in onze werking staat een{' '}
                            <Text style={styles.respectHighlight}>RESPECT</Text>
                            {' '}volle omgang met elkaar, gestoeld op de visie van Don Bosco.
                        </Text>

                        <View style={{ height: 24 }} />

                        {/* OpsommingOpvoeden placeholder */}
                        <View style={{ marginVertical: 16 }}>
                            <Text style={[styles.subtitle, { textAlign: 'center' }]}>
                                <View style={{ marginVertical: 16 }}>
                                    <OpsommingOpvoedenOnzeWaarden />
                                </View>
                            </Text>
                        </View>

                        <Text style={[styles.subtitle, { marginBottom: 8 }]}>
                            Principes voor een <Text style={styles.respectHighlight}>RESPECT</Text>volle omgang
                        </Text>

                        <View style={{ height: 24 }} />

                        {/* Paragraph 1 */}
                        <View style={[styles.row, isSmallScreen && styles.rowMobile]}>
                            <View style={styles.column}>
                                <IconsSolid width={40} height={40} fill="#0761b7" />
                            </View>
                            <View style={styles.textColumn}>
                                <Text style={styles.paragraph}>
                                    Opvoeden gebeurt midden tussen de jongeren in een hartelijke sfeer{"\n\n"}
                                    Opvoeden gebeurt in het dagelijkse leven, bij het eten, studeren, spelen, babbelen, … De opvoeder staat – net als Don Bosco – midden tussen de jongeren. Hij is aanspreekbaar en betrokken en oprecht in hen geïnteresseerd. Hij zet zich onvoorwaardelijk voor hen in en bouwt met hen een vertrouwensband op binnen een warme, familiale en hartelijke leefomgeving.{"\n"}
                                    Don Bosco omschreef dit als ‘je liefde voelbaar maken’.
                                </Text>
                            </View>
                        </View>

                        {/* Paragraph 2 */}
                        <View style={[styles.row, isSmallScreen && styles.rowMobile]}>
                            <View style={styles.column}>
                                <HandshakeIcon width={40} height={40} fill="#0761b7" />
                            </View>
                            <View style={styles.textColumn}>
                                <Text style={styles.paragraph}>
                                    Een redelijke, begripvolle omgang{"\n\n"}
                                    Dit wil echter niet zeggen dat alles kan en mag. De opvoeder leert de jongeren situaties inschatten (zien) met een grote dosis gezond verstand (oordelen) en ernaar handelen (handelen). De opvoeder is het stootblok waartegen de jongeren soms botsen. Hij gaat hierbij telkens opnieuw begripvol in gesprek met de jongeren. Dit alles doet hij in een omgeving waarin een duidelijke structuur en regelmaat heersen.
                                </Text>
                            </View>
                        </View>

                        {/* Paragraph 3 */}
                        <View style={[styles.row, isSmallScreen && styles.rowMobile]}>
                            <View style={styles.column}>
                                <HandsHoldingIcon width={40} height={40} fill="#0761b7" />
                            </View>
                            <View style={styles.textColumn}>
                                <Text style={styles.paragraph}>
                                    Vanuit ons geloof{"\n\n"}
                                    De waarden waarvan hierboven sprake stoelen allemaal op ons geloof in Don Bosco die ons leerde te vertrouwen in Jezus en Maria. Vanuit dit geloof koos Don Bosco voor de zwaksten. Dit doen wij vandaag ook, met respect voor de eigen inspiratie van elke jongere en vanuit ons geloof in hen.
                                </Text>
                            </View>
                        </View>
                    </>
                }

                {activeTab === 'Partners' && (
                    <View>
                        <View style={[styles.row, { alignItems: 'flex-start', marginBottom: 12 }]}>
                            <View style={{ marginRight: 12 }}>
                                <HandshakePartnersIcon width={40} height={40} fill="#0761b7" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.paragraphPartners}>
                                    We werken <Text style={styles.boldText}>Thuis-ondersteunend: </Text> opvoeden doen we <Text style={styles.boldText}>samen mét</Text> de ouders, door het onderhouden van intense contacten.
                                </Text>
                            </View>
                        </View>

                        <View style={[styles.row, { alignItems: 'flex-start', marginBottom: 12 }]}>
                            <View style={{ marginRight: 12 }}>
                                <HandshakePartnersIcon width={40} height={40} fill="#0761b7" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.paragraphPartners}>
                                    <Text style={styles.boldText}>Via de jeugdwerking 'KAJ'</Text> hebben de jongeren inspraak in de werking. Ze worden nauw betrokken. Uit de jeugdwerking groeide een <Text style={styles.boldText}>oud-leerlingen- en vrijwilligerswerking.</Text> Samen met de ouders groeide dit uit tot een <Text style={styles.boldText}>eigen VZW</Text>: KAJ Don Bosco vzw.
                                </Text>
                                <TouchableOpacity>
                                    <Text style={[styles.paragraphPartners, { marginTop: 4 }]}>Getuigenis KAJ bekijken</Text>
                                </TouchableOpacity>

                                <View style={{ marginLeft: 20 }}>
                                    <Text style={[styles.paragraph, { marginBottom: 10 }]}>
                                        <Text style={styles.boldText}>Vrijwilligers en buddy’s</Text> geven ons de nodige ondersteuning: het geven van bijles, organiseren van activiteiten, helpen bij de algemene omkadering...
                                    </Text>

                                    <Text style={styles.paragraph}>
                                        Hun Allegriafonds helpt kansarme jongeren bij het dragen van schoolonkosten. Zo krijgen alle jongeren op internaat gelijke kansen. Samen met de stichting Pelicano proberen we de kinderarmoede in België in te perken.
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.row, { alignItems: 'flex-start', marginBottom: 12 }]}>
                            <View style={{ marginRight: 12 }}>
                                <HandshakePartnersIcon width={40} height={40} fill="#0761b7" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.paragraphPartners}>
                                    We onderhouden een nauwe samenwerking met scholen uit het Nederlandstalig lager en secundair onderwijs in Brussel en omgeving. Hierdoor beschikken we over een groot aanbod aan studierichtingen op maat van elke jongere.
                                </Text>
                            </View>
                        </View>

                        <View style={[styles.row, { alignItems: 'flex-start', marginBottom: 12 }]}>
                            <View style={{ marginRight: 12 }}>
                                <HandshakePartnersIcon width={40} height={40} fill="#0761b7" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.paragraphPartners}>
                                    In de voorbije jaren ging het internaat de samenwerking aan met Jeugdhulp Don Bosco Vlaanderen. Het outreachend aanbod <Text style={styles.italicBoldText}>WelWijzer! / P.L.E.K.</Text> situeert zich op drie niveaus:
                                </Text>

                                <View style={{ marginTop: 8, marginLeft: 12 }}>
                                    <Text style={styles.paragraph}>Het internaat ondersteunen bij de opmaak van een kwaliteitszorgkader</Text>
                                    <Text style={styles.paragraph}>De opvoeders versterken in hun pedagogische vaardigheden</Text>
                                    <Text style={styles.paragraph}>Het begeleiden van internen en hun context</Text>
                                </View>

                                <TouchableOpacity>
                                    <Text style={[styles.paragraphPartners, { marginTop: 10 }]}>Getuigenis P.L.E.K. bekijken</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[styles.row, { alignItems: 'flex-start', marginBottom: 12 }]}>
                            <View style={{ marginRight: 12 }}>
                                <HandshakePartnersIcon width={40} height={40} fill="#0761b7" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.paragraphPartners}>
                                    Er is een goede relatie met heel wat <Text style={styles.boldText}>ondersteuningsdiensten binnen onderwijs en</Text> Jongerenwelzijn zoals CLB-centra, centra algemeen welzijnswerk, jongeren advies centra, centra voor geestelijke gezondheidszorg, psychologen, logopedisten, pleegzorg, consulenten...
                                </Text>
                            </View>
                        </View>

                        <View style={[styles.row, { alignItems: 'flex-start', marginBottom: 12 }]}>
                            <View style={{ marginRight: 12 }}>
                                <HandshakePartnersIcon width={40} height={40} fill="#0761b7" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.paragraphPartners}>
                                    Het internaat en de KAJ zijn ook partner van de brede school Sint-Pieters-Woluwe. Zo hebben we een goed contact met vele organisaties uit de buurt: gemeenschapscentra Kontakt en OpWeule, jeugdhuis De Schakel, sportclubs, de bibliotheek, de muziekschool, onderwijsverstrekkers, gemeentediensten ... It takes a village to raise a child!
                                </Text>
                            </View>
                        </View>
                    </View>
                )}

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
        fontSize: 16,
        marginBottom: 4,
    },
    paragraph: {
        fontSize: 14,
        lineHeight: 20, // need this? check later
        color: '#333',
    },
    paragraphPartners: {
        fontSize: 14,
        color: '#333',
        marginTop: 4,
        marginBottom: 4,
    },
    image: {
        marginTop: 16,
        marginBottom: 16,
    },
    respectHighlight: {
        fontSize: 18,
        color: '#0761b7',
        fontWeight: 'bold',
    },
    boldText: {
        fontWeight: 'bold',
    },

    italicBoldText: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
});