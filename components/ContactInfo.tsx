import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Linking,
    useWindowDimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ContactInfo() {
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 768;

    const handleEmailPress = () => {
        Linking.openURL('mailto:woluwe.internaat@donbosco.be');
    };

    const handlePhonePress = () => {
        Linking.openURL('tel:+32473218154');
    };

    return (
        <View style={[styles.container, isSmallScreen && styles.containerMobile]}>
            <View style={[styles.imageContainer, isSmallScreen && styles.imageContainerMobile]}>
                <View style={styles.blueBox}>
                    <Image
                        source={require('../assets/images/contact/contactpagina.jpeg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
            </View>

            <View style={[styles.infoContainer, isSmallScreen && styles.infoContainerMobile]}>
                <Text style={styles.heading}>Contacteer ons</Text>
                <View style={styles.line} />

                <Text style={styles.orgName}>Don Bosco internaat Brussel</Text>
                <Text style={[styles.subtitle, isSmallScreen && styles.centerText]}>
                    Nederlandstalig autonoom en vrij internaat{'\n'}voor jongeren vanaf 10 jaar
                </Text>

                <Text style={[styles.address, isSmallScreen && styles.centerText]}>
                    Guldendallaan 90{'\n'}1150 Sint-Pieters-Woluwe
                </Text>


                <View style={styles.row}>
                    <MaterialIcons name="phone" size={20} color="#000" />
                    <TouchableOpacity onPress={handlePhonePress}>
                        <Text style={styles.link}>0473 21 81 54</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <MaterialIcons name="email" size={20} color="#000" />
                    <TouchableOpacity onPress={handleEmailPress}>
                        <Text style={styles.link}>woluwe.internaat@donbosco.be</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 24,
        paddingHorizontal: 16,
        backgroundColor: '#F9FAFB',
        flexWrap: 'wrap',
    },
    containerMobile: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        minWidth: 350,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    imageContainerMobile: {
        alignItems: 'center',
        marginBottom: 24,
    },
    blueBox: {
        backgroundColor: '#0761b7',
        width: 360,
        height: 360,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 280,
        height: 280,
        borderRadius: 4,
    },
    infoContainer: {
        flex: 1,
        minWidth: 300,
        paddingLeft: 30,
        justifyContent: 'center',
    },
    infoContainerMobile: {
        paddingLeft: 0,
        alignItems: 'center',
        textAlign: 'center',
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0761b7',
    },
    line: {
        height: 3,
        width: 100,
        backgroundColor: '#0761b7',
        marginVertical: 6,
    },
    orgName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#0761b7',
        marginBottom: 4,
    },
    subtitle: {
        color: '#0761b7',
        fontSize: 14,
        marginBottom: 12,
    },
    address: {
        fontSize: 14,
        marginBottom: 12,
    },
    centerText: {
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 8,
    },
    link: {
        fontSize: 14,
        color: '#000',
    },
});
