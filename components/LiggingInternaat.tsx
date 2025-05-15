import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function LiggingInternaat() {
    const bullets = [
        'In de groene rand van Brussel, nabij het zoniënwoud',
        'In een rustige residentiële wijk',
        'Op een kwartiertje van het stadscentrum van Brussel',
        'Nabij de weelderige Tervurenlaan',
        'Op wandelafstand van verschillende parken, speelterreinen en een speelbos',
    ];

    const isSmallScreen = Dimensions.get('window').width < 768;

    return (
        <View style={[styles.container, isSmallScreen && styles.containerMobile]}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Ligging van het internaat</Text>
                <View style={styles.underline} />
            </View>

            <View style={[styles.listWrapper, isSmallScreen && styles.listWrapperMobile]}>
                {bullets.map((item, index) => (
                    <View key={index} style={styles.bulletRow}>
                        <View style={styles.bullet} />
                        <Text style={styles.bulletText}>{item}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        paddingVertical: 40,
        paddingHorizontal: 24,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    containerMobile: {
        flexDirection: 'column',
    },
    titleWrapper: {
        marginRight: 40,
        minWidth: 180,
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0761b7',
    },
    underline: {
        marginTop: 8,
        height: 3,
        width: 100,
        backgroundColor: '#0761b7',
        borderRadius: 2,
    },
    listWrapper: {
        flex: 1,
        paddingLeft: 24,
    },
    listWrapperMobile: {
        paddingLeft: 0,
        marginTop: 16,
    },
    bulletRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    bullet: {
        width: 8,
        height: 8,
        backgroundColor: '#FACC15',
        borderRadius: 4,
        marginTop: 6,
        marginRight: 8,
    },
    bulletText: {
        fontSize: 16,
        color: '#1F2937',
        flexShrink: 1,
        lineHeight: 22,
    },
});
