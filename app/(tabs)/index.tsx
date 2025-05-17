import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    useWindowDimensions,
    Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';

import ImageSlider from '@/components/Pages/Home/ImageSlider';
import InfoText from '@/components/Pages/Home/InfoText';
import IconButtonsRow from '@/components/Pages/Home/IconButtonsRow';
import SplitSlider from '@/components/Pages/Home/SplitSlider';
import BottomShared from '@/components/Pages/Shared/BottomShared';
import ContacteerOns from '@/components/Pages/Shared/ContacteerOns';
import ToTopButton from '@/components/ToTopButton';
import TestimonialCarousel from '@/components/Pages/Home/TestimonialCarousel';

export default function HomeScreen() {
    const splitSliderRef = useRef<View>(null);
    const testimonialRef = useRef<View>(null);

    const scrollToSplitSlider = () => {
        if (!splitSliderRef.current || !scrollRef.current) return;

        splitSliderRef.current.measure((x, y, width, height, pageX, pageY) => {
            scrollRef.current?.scrollTo({
                y: Platform.OS === 'web' ? pageY : y,
                animated: true,
            });
        });
    };

    const scrollToTestimonials = () => {
        if (!testimonialRef.current || !scrollRef.current) return;

        testimonialRef.current.measure((x, y, width, height, pageX, pageY) => {
            scrollRef.current?.scrollTo({
                y: Platform.OS === 'web' ? pageY : y,
                animated: true,
            });
        });
    };


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
                <ImageSlider
                    onPressTroeven={scrollToSplitSlider}
                    onPressGetuigenissen={scrollToTestimonials}
                />

                <View style={styles.spacer} />
                <InfoText />
                <IconButtonsRow />
                <View collapsable={false} ref={splitSliderRef}>
                    <SplitSlider />
                </View>

                <View style={styles.spacer} />

                <View collapsable={false} ref={testimonialRef}>
                    <TestimonialCarousel />
                </View>


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
