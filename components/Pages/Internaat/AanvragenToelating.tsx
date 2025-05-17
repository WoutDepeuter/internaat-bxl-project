import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
    Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AanvragenToelating() {
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 768;

    const [selectedReason, setSelectedReason] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Het internaat verlaten kan niet zomaar. Voor een toelating vragen we <Text style={styles.boldText}>steeds</Text> van de ouders een <Text style={styles.boldText}>schriftelijke aanvraag</Text> met de reden.
                Dit kan <Text style={styles.boldText}>via een email of via onderstaand formulier</Text>. De uiteindelijke toestemming wordt gegeven door de directeur.
                {'\n\n'}
                Toelatingen op regelmatige basis kan u aanvragen via een document bij de start van het schooljaar. U vindt dit tevens op de website bij inschrijven.
                Later in het schooljaar neemt u best contact op met de directeur.
                {'\n\n'}
                <Text style={styles.boldText}>Afwezigheden door ziekte</Text> moeten ook steeds aan het internaat gemeld worden.
                U kan de aanvraag of melding doen <Text style={styles.boldText}>via onderstaand formulier</Text>.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Naam van de interne"
                    placeholderTextColor="rgba(7, 97, 183, 0.4)"
                />

                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="Naam contactpersoon/aanvrager"
                        placeholderTextColor="rgba(7, 97, 183, 0.4)"
                    />
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="Telefoon contactpersoon/aanvrager"
                        placeholderTextColor="rgba(7, 97, 183, 0.4)"
                    />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Email contactpersoon/aanvrager"
                    placeholderTextColor="rgba(7, 97, 183, 0.4)"
                />

                <Picker
                    selectedValue={selectedReason}
                    onValueChange={(itemValue) => setSelectedReason(itemValue)}
                    style={[styles.input, styles.picker]}
                    dropdownIconColor="#0761b7"
                >
                    <Picker.Item label="Reden afwezigheid" value="" color="rgba(7, 97, 183, 0.4)" />
                    <Picker.Item label="Afwezig met toelating" value="toelating" color="#0761b7" />
                    <Picker.Item label="Afwezig wegens ziekte" value="ziekte" color="#0761b7" />
                </Picker>

                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.thirdInput]}
                        placeholder="Vanaf"
                        placeholderTextColor="rgba(7, 97, 183, 0.4)"
                    />
                    <TextInput
                        style={[styles.input, styles.thirdInput]}
                        placeholder="T.e.m."
                        placeholderTextColor="rgba(7, 97, 183, 0.4)"
                    />
                </View>

                <TextInput
                    style={[styles.input, styles.textarea]}
                    placeholder="Extra informatie"
                    placeholderTextColor="rgba(7, 97, 183, 0.4)"
                    multiline
                    numberOfLines={8}
                    textAlignVertical="top"
                />

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={() => {
                            // Handle submit
                        }}
                    >
                        <Text style={styles.buttonText}>Verzenden</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
    },
    container: {
        gap: 24,
    },
    text: {
        fontSize: 14,
        color: '#000',
        marginBottom: 24,
    },
    form: {
        gap: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 14,
        color: '#000',
    },
    halfInput: {
        flex: 1,
    },
    thirdInput: {
        flex: 1,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },

    pickerWrapper: {
        justifyContent: 'center',
        paddingHorizontal: 4,
        overflow: 'hidden',
    },
    picker: {
        color: '#0761b7',
        fontSize: 14,
        ...Platform.select({
            android: {
                height: 60,
            },
            default: {
                height: 40,
            },
        }),
    },
    textarea: {
        minHeight: 120,
    },
    buttonWrapper: {
        alignItems: 'flex-end',
        marginTop: 8,
    },
    button: {
        backgroundColor: '#f4d735',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#0761b7',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
