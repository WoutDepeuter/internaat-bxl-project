import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    useWindowDimensions,
} from 'react-native';

const tabs = [
    'Meer over ons internaat',
    'Download ons reglement',
    'Internaat in beeld',
    'Onze begeleiders',
    'Download onze afspraken en leefregels',
    'Download onze jaarkalender',
    'Download onze activiteitenkalender',
    'Aanvragen toelating of melden van ziekte',
    'Melden pestgedrag',
];

export default function SharedTopBarInternaat() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 768;

    return (
        <View style={{ flex: 1 }}>
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

            <ScrollView style={styles.contentContainer}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{activeTab}</Text>
                    <View style={styles.underline} />
                </View>
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
        minWidth: '50%',
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
        textAlign: 'center',
    },
    tabTextInactive: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
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
});
