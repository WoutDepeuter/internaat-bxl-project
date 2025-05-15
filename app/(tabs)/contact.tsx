import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PageBanner from '@/components/PageBanner';
import LiggingInternaat from '@/components/LiggingInternaat';
import ContactInfo from '@/components/ContactInfo';
import Bereikbaarheid from '@/components/Bereikbaarheid';
import ContacteerOns from '@/components/ContacteerOns';

export default function ContactScreen() {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={[styles.container, { paddingBottom: insets.bottom }]}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <PageBanner title="Contacteer ons" />

                <View style={styles.section}>
                    <ContactInfo />
                </View>
                <View style={styles.section}>
                    <LiggingInternaat />
                </View>
                <View style={styles.section}>
                    <Bereikbaarheid />
                </View>
                <View style={styles.section}>
                    <ContacteerOns />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    section: {
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
    },
});
