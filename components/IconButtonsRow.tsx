import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const icons = [
    require('@/assets/images/homepage/icoon-internaat.png'),
    require('@/assets/images/homepage/icoon-donbosco.png'),
    require('@/assets/images/homepage/icoon-inschrijven.png'),
    require('@/assets/images/homepage/icoon-contact.png'),
];

export default function IconButtonsRow() {
    return (
        <View style={styles.row}>
            {icons.map((icon, index) => (
                    <TouchableOpacity key={index} style={styles.button}>
                <Image source={icon} style={styles.image} resizeMode="contain" />
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
        gap: 24, // spacing between buttons
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
        tintColor: '#FFD700', // matches yellow tone
    },
});
