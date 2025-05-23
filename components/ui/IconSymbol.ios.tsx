import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const icons = [
    {
        src: require('@/assets/images/homepage/icoon-internaat.png'),
        route: '/Opvoeden',
    },
    {
        src: require('@/assets/images/homepage/icoon-donbosco.png'),
        route: '/Internaat',
    },
    {
        src: require('@/assets/images/homepage/icoon-inschrijven.png'),
        route: '/Inschrijvingen',
    },
    {
        src: require('@/assets/images/homepage/icoon-contact.png'),
        route: '/contact',
    },
];

export default function IconButtonsRow() {
    const router = useRouter();

    return (
        <View style={styles.row}>
            {icons.map((icon, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => router.push(icon.route)}                >
                    <Image source={icon.src} style={styles.image} resizeMode="contain" />
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        paddingVertical: 24,
        gap: 24,
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: '#0055B3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    image: {
        width: 50,
        height: 50,
        tintColor: '#FFD700',
    },
});
