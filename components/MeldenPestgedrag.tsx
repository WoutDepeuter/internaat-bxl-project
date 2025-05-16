import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default function MeldenPestgedrag() {
    return (
        <View>
            <Text style={styles.infoText}>
                Via onderstaande knop kan je als ouder/voogd of interne pestgedrag melden aan de internaatdirectie.
                Discretie verzekerd.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Naam melder"
                    placeholderTextColor="rgba(7, 97, 183, 0.4)"
                />

                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="Naam contactpersoon"
                        placeholderTextColor="rgba(7, 97, 183, 0.4)"
                    />
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="Telefoon contactpersoon"
                        placeholderTextColor="rgba(7, 97, 183, 0.4)"
                    />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Email contactpersoon"
                    placeholderTextColor="rgba(7, 97, 183, 0.4)"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Datum"
                    placeholderTextColor="rgba(7, 97, 183, 0.4)"
                />

                <TextInput
                    style={[styles.input, styles.textarea]}
                    placeholder="Omschrijving pestgedrag"
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
                            // Handle submission
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
    infoText: {
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
        color: '#000',
    },
    halfInput: {
        flex: 1,
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
