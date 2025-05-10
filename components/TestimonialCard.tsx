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
                {/* Left: Text block */}
                <View style={styles.textContainer}>
                    <MaterialIcons name="format-quote" size={30} color="#FACC15" />
                    <Text style={styles.text}>{text}</Text>
                </View>

                {/* Right: Image with label */}
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                    <View style={styles.overlayLabel}>
                        <Text style={styles.labelText}>
                            <Text style={styles.name}>{name}</Text> |{' '}
                            <Text style={styles.age}>{age}</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        width: screenWidth,
        alignItems: 'center',
    },
    card: {
        width: '100%',
        maxWidth: 800,
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        borderTopWidth: 4,
        borderTopColor: '#FACC15',
        padding: 20,
        borderRadius: 12,
        alignItems: 'flex-start',
        gap: 20,
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
    },
    text: {
        fontSize: 16,
        color: '#374151',
        marginTop: 10,
        lineHeight: 24,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 220,
        height: 300,
        borderRadius: 8,
    },
    overlayLabel: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#FACC15',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderBottomRightRadius: 8,
    },
    labelText: {
        color: '#1D4ED8',
        fontWeight: 'bold',
    },
    name: {
        color: '#1D4ED8',
        fontWeight: 'bold',
    },
    age: {
        color: '#1D4ED8',
        fontWeight: 'bold',
    },
});
