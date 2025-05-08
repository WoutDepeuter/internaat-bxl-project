import { Text, View, StyleSheet } from 'react-native';
import SplitSlider from './SplitSlider';

export default function InfoText() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Het internaat staat open voor alle{' '}
                <Text style={styles.highlight}>jongens en meisjes</Text>
            </Text>
            <Text style={styles.text}>
                <Text style={styles.highlight}>vanaf 10 jaar </Text>
                die les volgen in het
            </Text>
            <Text style={styles.text}>
                <Text style={styles.highlight}>Nederlandstalige onderwijs</Text> in{' '}
                <Text style={styles.highlight}>Brussel en omgeving</Text>.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 32,
        backgroundColor: '#FFF',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 26,
        color: '#000',
        marginBottom: 6, // spacing between lines
    },
    highlight: {
        fontWeight: 'bold',
        color: '#0055B3',
    },
});
