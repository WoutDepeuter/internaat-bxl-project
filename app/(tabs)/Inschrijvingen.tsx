import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PageBanner from '@/components/PageBanner';
import InfoText from '@/components/InfoText';
import InfoButtons from '@/components/ui/InschrijvenButtons';
import BelangrijkeDocumenten from '@/components/ui/BelangrijkeDocumenten';
import BottomShared from '@/components/BottomShared';

export default function InschrijvenScreen() {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={[styles.safeArea, { paddingBottom: insets.bottom }]}>
            <ScrollView contentContainerStyle={styles.container}>
                <PageBanner title="Inschrijvingen" />
                <InfoText />
                <InfoButtons />
                <BelangrijkeDocumenten />
                <View>
                    <BottomShared visible={true} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    container: {
        backgroundColor: '#FFF',
        paddingBottom: 32,
    },
});
