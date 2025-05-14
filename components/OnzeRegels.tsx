import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';

export default function OnzeRegels() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Onze regels{'\n'}en afspraken
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Een <Text style={styles.highlightBlue}> RESPECT r</Text>volle omgang is de basis voor fijn en gezellig samenleven op internaat.
                </Text>
                <Text style={styles.text}>
                    Duidelijke afspraken en omgangsregels zijn daarbij noodzakelijk.
                </Text>
                <Text style={styles.text}>
                    U vindt deze in het{' '}
                    <Pressable onPress={() => Linking.openURL('https://example.com/internaatreglement.pdf')}>
                        <Text style={styles.highlightYellow}>internaatreglement.</Text>
                    </Pressable>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 24,
        paddingHorizontal: 16,
        backgroundColor: '#FFF',
    },
    titleContainer: {
        borderRightWidth: 2,
        borderRightColor: '#0055B3',
        paddingRight: 16,
        marginRight: 16,
        width: 160,
    },
    title: {
        color: '#0055B3',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 28,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        color: '#000',
        marginBottom: 8,
        lineHeight: 24,
    },
    highlightBlue: {
        color: '#0055B3',
        fontWeight: 'bold',
    },
    highlightYellow: {
        backgroundColor: '#FFD700',
        color: '#0055B3',
        fontWeight: 'bold',
        paddingHorizontal: 4,
    },
});
