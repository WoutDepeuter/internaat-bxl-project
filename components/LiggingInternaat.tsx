import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LiggingInternaat() {
    const bullets = [
        'In de groene rand van Brussel, nabij het zoniënwoud',
        'In een rustige residentiële wijk',
        'Op een kwartiertje van het stadscentrum van Brussel',
        'Nabij de weelderige Tervurenlaan',
        'Op wandelafstand van verschillende parken, speelterreinen en een speelbos',
    ];

    return (
        <View style={styles.container}>
            {/* LEFT: Title */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Ligging{'\n'}van het internaat</Text>
            </View>

            {/* RIGHT: Line + Bullet List */}
            <View style={styles.listWrapper}>
                <View style={styles.line} />
                <View style={styles.bulletList}>
                    {bullets.map((item, index) => (
                        <View key={index} style={styles.bulletRow}>
                            <View style={styles.bullet} />
                            <Text style={styles.bulletText}>{item}</Text>
                        </View>
                    ))}
                </View>
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
    },
    titleContainer: {
        marginRight: 40,
        minWidth: 180,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0761b7',
    },
    listWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 24,
        flex: 1,
        minWidth: 240,
    },
    line: {
        width: 2,
        backgroundColor: '#0761b7',
        height: '100%',
    },
    bulletList: {
        gap: 12,
        flex: 1,
    },
    bulletRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
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
