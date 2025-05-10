import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';

import ImageSlider from '@/components/ImageSlider';
import InfoText from '@/components/InfoText';
import IconButtonsRow from '@/components/IconButtonsRow';
import SplitSlider from '@/components/SplitSlider';
import BottomShared from '@/components/BottomShared';
import ContacteerOns from '@/components/ContacteerOns';
import ToTopButton from '@/components/ToTopButton';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    const scrollRef = useRef<ScrollView>(null);
    const bottomRef = useRef<View>(null);
    const { height: windowHeight } = useWindowDimensions();

    const [isBottomVisible, setIsBottomVisible] = useState(false);
    const [showToTop, setShowToTop] = useState(false);

    const handleScroll = (event: any) => {
        const scrollY = event.nativeEvent.contentOffset.y;

        setShowToTop(scrollY > windowHeight * 0.1);

        bottomRef.current?.measure((x, y, width, height, pageX, pageY) => {
            const screenBottom = scrollY + windowHeight;
            if (pageY < screenBottom) {
                setIsBottomVisible(true);
            }
        });
    };

    return (
        <SafeAreaView style={[styles.safeArea, { paddingBottom: insets.bottom }]}>
            <ScrollView
                ref={scrollRef}
                contentContainerStyle={styles.container}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <ImageSlider />
                <View style={styles.spacer} />
                <InfoText />
                <IconButtonsRow />
                <SplitSlider />
                <View style={styles.spacer} />

                {/* ✅ Testimonial Carousel inserted here */}
                <TestimonialCarousel />
                <View style={styles.spacer} />

                <View ref={bottomRef}>
                    <BottomShared visible={isBottomVisible} />
                </View>

                <ContacteerOns />
            </ScrollView>

            {showToTop && (
                <ToTopButton onPress={() => scrollRef.current?.scrollTo({ y: 0, animated: true })} />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    container: {
        paddingBottom: 40,
        backgroundColor: '#FFF',
    },
    spacer: {
        height: 40,
    },
});
