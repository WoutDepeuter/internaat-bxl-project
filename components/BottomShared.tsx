import { View, Text, Image, StyleSheet, Dimensions, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import EnvelopeIcon from '@/assets/svgs/shared/envelope-regular.svg';
import PhoneIcon from '@/assets/svgs/shared/mobile-screen-button-solid.svg';

const { width } = Dimensions.get('window');

export default function BottomShared({ visible }: { visible: boolean }) {
    const scaleAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 369,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    return (
        <Animated.View style={[styles.container, { transform: [{ scale: scaleAnim }] }]}>
            <Image
                source={require('@/assets/images/shared/onderwijs-brussel.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Don Bosco internaat Brussel</Text>
                <Text style={styles.smallerTitle}>
                    Nederlandstalig autonoom en vrij internaat voor jongeren vanaf 10 jaar
                </Text>
                <Text style={styles.text}>Guldendallaan 90</Text>
                <Text style={styles.text}>1150 Sint-Pieters-Woluwe</Text>
                <View style={styles.row}>
                    <PhoneIcon width={16} height={16} style={styles.icon} />
                    <Text style={styles.text}>0473 21 81 54</Text>
                </View>
                <View style={styles.row}>
                    <EnvelopeIcon width={16} height={16} style={styles.icon} />
                    <Text style={styles.text}>woluwe.internaat@donbosco.be</Text>
                </View>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 30,
        width: width * 0.6,
        alignSelf: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    textContainer: {
        maxWidth: width * 0.6,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0055B3',
        marginBottom: 4,
    },
    smallerTitle: {
        fontSize: 16,
        color: '#3e8ef2',
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 4,
    },
    icon: {
        marginRight: 6,
    },
});
