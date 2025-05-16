import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface InternaatSectionProps {
    image: ImageSourcePropType;
    title: string;
    subtitle: string;
    bullets: string[];
}

export default function InternaatSection({ image, title, subtitle, bullets }: InternaatSectionProps) {
    return (
        <View style={styles.section}>
            <Image source={image} style={styles.image} resizeMode="cover" />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <View style={styles.bulletList}>
                    {bullets.map((text, index) => (
                        <View key={index} style={styles.bulletItem}>
                            <Text style={styles.bullet}>■</Text>
                            <Text style={styles.bulletText}>{text}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 32,
        borderTopWidth: 20,
        borderBottomWidth: 5,
        borderColor: '#0761b7',
        backgroundColor: '#efefef',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    content: {
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 18,
        color: '#0761b7',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 12,
        color: '#0761b7',
        marginBottom: 12,
    },
    bulletList: {
        gap: 8,
        paddingBottom: 16,
    },
    bulletItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    bullet: {
        color: '#f4d735',
        fontSize: 12,
        marginRight: 8,
        marginTop: 2,
    },
    bulletText: {
        color: '#0761b7',
        fontSize: 14,
        flexShrink: 1,
    },
});
