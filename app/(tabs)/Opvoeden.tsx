import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';

import PageBanner from '@/components/PageBanner';
import SharedTopBar from '@/components/SharedTopBarOpvoeden';
import BottomShared from '@/components/BottomShared';
import LogosPartners from '@/components/LogosPartners';
import ToTopButton from '@/components/ToTopButton';

export default function OpvoedenScreen() {
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
                <PageBanner title="Opvoeden met Don Bosco" />

                <SharedTopBar />

                <View ref={bottomRef}>
                    <BottomShared visible={isBottomVisible} />
                </View>
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
        backgroundColor: '#FFF',
        paddingBottom: 32,
    },
});
