import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
    name: string;
    age: string;
    text: string;
    image: any;
}

const screenWidth = Dimensions.get('window').width;

export default function TestimonialCard({ name, age, text, image }: Props) {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.card}>
                <Image source={image} style={styles.image} />

                <View style={styles.label}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.age}> | {age}</Text>
                </View>

                <View style={styles.textContainer}>
                    <MaterialIcons name="format-quote" size={24} color="#FACC15" />
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        width: screenWidth,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    card: {
        width: '100%',
        maxWidth: 600,
        backgroundColor: '#F3F4F6',
        borderTopWidth: 4,
        borderTopColor: '#FACC15',
        padding: 16,
        alignItems: 'center',
    },
    image: {
        width: 160,
        height: 220,
        marginBottom: 8,
    },
    label: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    name: {
        fontWeight: 'bold',
        color: '#1D4ED8',
        fontSize: 16,
    },
    age: {
        fontWeight: 'bold',
        color: '#1D4ED8',
        fontSize: 16,
    },
    textContainer: {
        width: '100%',
    },
    text: {
        fontSize: 14,
        color: '#374151',
        lineHeight: 20,
        marginTop: 4,
    },
});
