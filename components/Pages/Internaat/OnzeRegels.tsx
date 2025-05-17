import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pressable, Linking } from 'react-native';

export default function InfoBlok() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Onze regels en afspraken
                </Text>
                <View style={styles.titleUnderline} />
            </View>


            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Een<Text style={styles.highlightBlue}> RESPECT </Text>volle omgang is de basis voor fijn en gezellig samenleven op internaat.
                </Text>


                <Text style={styles.text}>
                    Duidelijke afspraken en omgangsregels zijn daarbij noodzakelijk.
                </Text>
                <Text style={styles.text}>
                    U vindt deze in het{' '}
                    <Text
                        onPress={() =>
                            Linking.openURL('https://www.woluweinternaat.be/docs/Internaatreglement.pdf')
                        }
                        style={styles.highlightYellow}
                    >
                        internaatreglement.
                    </Text>
                </Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200, // ✅ Fixed height
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF',
    },
    line: {
        textAlign: 'center',
        marginBottom: 4,
        flexWrap: 'wrap',
    },
    small: {
        fontSize: 12,
        color: '#000',
        fontWeight: 'normal',
    },
    blueBold: {
        fontSize: 16,
        color: '#0055B3',
        fontWeight: 'bold',
    },
    titleContainer: {
        marginBottom: 16,
        alignItems: 'center',
    },
    titleUnderline: {
        marginTop: 8,
        height: 3,
        width: 100,
        backgroundColor: '#0055B3',
        borderRadius: 2,
    },
    title: {
        color: '#0055B3',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
    },
    text: {
        fontSize: 16,
    },
    highlightBlue: {
        color: '#0055B3',
        fontWeight: 'bold',
    },
    highlightYellow: {
        backgroundColor: '#FFD700',
        borderRadius: 2,
        paddingHorizontal: 2,
    },

    highlightYellowPressed: {
        backgroundColor: '#FFE863',
    },

    highlightText: {
        fontSize: 16,
        color: '#000',
    },

});
