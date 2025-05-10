import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ImageBackground,
} from 'react-native';

const { width } = Dimensions.get('window');

const backgroundImage = require('@/assets/images/shared/banner.png');

export default function ContactForm() {
    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
            imageStyle={{ opacity: 0.5 }}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View style={styles.formWrapper}>
                    <Text style={styles.title}>Contacteer ons</Text>
                    <View style={styles.underline} />

                    <Text style={styles.subtitle}>
                        Heeft u nog vragen of wenst u meer informatie, aarzel dan niet om ons te contacteren.
                        Dit kan u snel en eenvoudig door onderstaand formulier in te vullen en te verzenden.
                    </Text>

                    <View style={styles.inputGrid}>
                        <TextInput placeholder="Naam" placeholderTextColor="#79a9d8" style={styles.input} />
                        <TextInput placeholder="Email" placeholderTextColor="#79a9d8" style={styles.input} />
                        <TextInput placeholder="Telefoon" placeholderTextColor="#79a9d8" style={styles.input} />
                        <TextInput placeholder="Onderwerp" placeholderTextColor="#79a9d8" style={styles.input} />
                    </View>

                    <TextInput
                        placeholder="Bericht"
                        placeholderTextColor="#79a9d8"
                        style={styles.textArea}
                        multiline
                        numberOfLines={5}
                        textAlignVertical="top"
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Verzenden</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#216fba',
        marginTop: 20,
    },
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    formWrapper: {
        width: '100%',
        maxWidth: 700,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#f4d735',
        marginBottom: 4,
        textAlign: 'center',
    },
    underline: {
        width: 160,
        height: 4,
        backgroundColor: '#f4d735',
        marginBottom: 20,
        alignSelf: 'center',
    },
    subtitle: {
        color: '#FFF',
        fontSize: 16,
        marginBottom: 24,
        textAlign: 'center',
    },
    inputGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
    },
    input: {
        backgroundColor: '#ffffff',
        color: '#2861b7',
        padding: 12,
        marginBottom: 12,
        flexBasis: '48%',
    },
    textArea: {
        backgroundColor: '#ffffff',
        color: '#2861b7',
        padding: 12,
        marginBottom: 20,
        marginTop: 12,
        width: '100%',
        height: 150,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#f4d735',
        paddingVertical: 14,
        paddingHorizontal: 32,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#0055B3',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
