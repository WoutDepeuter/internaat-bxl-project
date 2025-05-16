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
    {
        name: 'Maaike Camerlinckx',
        title: 'Opvoeder',
        image: require('@/assets/images/internaat-begeleiders/MaaikeCamerlinckx.jpeg'),
    },
    {
        name: 'Miguel Henrion',
        title: 'Opvoeder',
        image: require('@/assets/images/internaat-begeleiders/Miguel.jpeg'),
    },
    {
        name: 'Priska Kabwe',
        title: 'Opvoeder',
        image: require('@/assets/images/internaat-begeleiders/Priska.jpeg'),
    },
    {
        name: 'Tiny Nerinckx',
        title: 'Opvoeder',
        image: require('@/assets/images/internaat-begeleiders/TinyNerinckx.jpeg'),
    },
    {
        name: 'Jan Van Oycke',
        title: 'Opvoeder',
        image: require('@/assets/images/internaat-begeleiders/JanVanOycke.jpeg'),
    },
    {
        name: 'Dieter Vandendriessche',
        title: 'Opvoeder',
        image: require('@/assets/images/internaat-begeleiders/DieterVandendriessche.jpeg'),
    },
    {
        name: 'Kosta Vlachos',
        title: 'Opvoeder',
        image: require('@/assets/images/internaat-begeleiders/KostaVlachos.jpeg'),
    },
    {
        name: 'Nobel',
        title: '',
        image: require('@/assets/images/internaat-begeleiders/Nobel.jpeg'),
    },
    {
        name: 'Plum',
        title: '',
        image: require('@/assets/images/internaat-begeleiders/Plum.jpeg'),
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
