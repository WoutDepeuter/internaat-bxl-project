import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const icons = [
    {
        source: require('@/assets/images/homepage/icoon-donbosco.png'),
        route: '/Opvoeden',
    },
    {
        source: require('@/assets/images/homepage/icoon-internaat.png'),
        route: '/Internaat',
    },
    {
        source: require('@/assets/images/homepage/icoon-inschrijven.png'),
        route: '/Inschrijvingen',
    },
    {
        source: require('@/assets/images/homepage/icoon-contact.png'),
        route: '/contact',
    },
];

export default function IconButtonsRow() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => router.push(icon.route)}
                >
                    <Image source={icon.source} style={styles.image} resizeMode="contain" />
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#f2f2f2',
        alignSelf: 'center',
        alignItems: 'center',

    },
    button: {
        width: '48%',
        height: 100,
        backgroundColor: '#0055B3',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        width: 50,
        height: 50,
        tintColor: '#FFD700',
    },
});
