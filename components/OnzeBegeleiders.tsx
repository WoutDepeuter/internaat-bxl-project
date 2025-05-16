import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface Begeleider {
    name: string;
    title: string;
    image: ImageSourcePropType;
}

const begeleiders: Begeleider[] = [
    {
        name: 'Stijn Van Eyken',
        title: 'Directeur',
        image: require('@/assets/images/internaat-begeleiders/StijnVanEyken.jpeg'),
    },
    {
        name: 'Bart Claerebout',
        title: 'Pedagogisch stafmedewerker',
        image: require('@/assets/images/internaat-begeleiders/BartClaerebout.jpeg'),
    },
    {
        name: 'Halima Abou-Al-Kassim',
        title: 'Opvoeder',
        image: require('@/assets/images/internaat-begeleiders/Hamila.jpeg'),
    },
];

export default function OnzeBegeleiders() {
    return (
        <View>
            <View style={styles.row}>
                {begeleiders.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Image source={item.image} style={styles.image} resizeMode="cover" />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 16,
    },
    card: {
        backgroundColor: '#498bca',
        overflow: 'hidden',
        width: '48%',
        alignItems: 'center',
        paddingBottom: 12,
    },
    image: {
        width: 100,
        height: 150,
    },
    name: {
        fontSize: 14,
        color: '#f4d761',
        fontWeight: 'bold',
        marginTop: 8,
    },
    title: {
        fontSize: 12,
        color: '#ffffff',
    },
});
