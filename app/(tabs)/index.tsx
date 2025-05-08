import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ImageSlider from '@/components/ImageSlider';
import InfoText from "@/components/InfoText";
import IconButtonsRow from "@/components/IconButtonsRow";
import SplitSlider from '@/components/SplitSlider';

export default function HomeScreen() {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={[styles.safeArea, { paddingBottom: insets.bottom }]}>
            <ScrollView contentContainerStyle={styles.container}>
                <ImageSlider />
                <View style={styles.spacer} />
                <InfoText />
                <IconButtonsRow />
                <SplitSlider />
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
        paddingBottom: 40, // extra bottom space
        backgroundColor: '#FFF',
    },
    spacer: {
        height: 40,
    },
});
