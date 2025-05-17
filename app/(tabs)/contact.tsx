import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';

import PageBanner from '@/components/Pages/Shared/PageBanner';
import LiggingInternaat from '@/components/LiggingInternaat';
import ContactInfo from '@/components/ContactInfo';
import Bereikbaarheid from '@/components/Bereikbaarheid';
import ContacteerOns from '@/components/Pages/Shared/ContacteerOns';
import ToTopButton from '@/components/ToTopButton';

export default function ContactScreen() {
    const insets = useSafeAreaInsets();
    const { height: windowHeight } = useWindowDimensions();
    const scrollRef = useRef<ScrollView>(null);
    const [showToTop, setShowToTop] = useState(false);

    const handleScroll = (event: any) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        setShowToTop(scrollY > windowHeight * 0.1);
    };

    return (
        <SafeAreaView style={[styles.container, { paddingBottom: insets.bottom }]}>
            <ScrollView
                ref={scrollRef}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
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

            {showToTop && (
                <ToTopButton onPress={() => scrollRef.current?.scrollTo({ y: 0, animated: true })} />
            )}
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
