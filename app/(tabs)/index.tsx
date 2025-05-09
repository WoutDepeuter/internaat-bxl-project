import { StyleSheet, View, SafeAreaView, ScrollView, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';

import ImageSlider from '@/components/ImageSlider';
import InfoText from "@/components/InfoText";
import IconButtonsRow from "@/components/IconButtonsRow";
import SplitSlider from '@/components/SplitSlider';
import BottomShared from '@/components/BottomShared';

export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    const [isBottomVisible, setIsBottomVisible] = useState(false);
    const bottomRef = useRef<View>(null);
    const { height: windowHeight } = useWindowDimensions();

    const handleScroll = (event: any) => {
        bottomRef.current?.measure((x, y, width, height, pageX, pageY) => {
            const scrollY = event.nativeEvent.contentOffset.y;
            const screenBottom = scrollY + windowHeight;

            // pageY is the top of the component on the screen
            if (pageY < screenBottom) {
                setIsBottomVisible(true);
            }
        });
    };

    return (
        <SafeAreaView style={[styles.safeArea, { paddingBottom: insets.bottom }]}>
            <ScrollView contentContainerStyle={styles.container} onScroll={handleScroll} scrollEventThrottle={16}>
                <ImageSlider />
                <View style={styles.spacer} />
                <InfoText />
                <IconButtonsRow />
                <SplitSlider />
                <View ref={bottomRef}>
                    <BottomShared visible={isBottomVisible} />
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
        paddingBottom: 40,
        backgroundColor: '#FFF',
    },
    spacer: {
        height: 40,
    },
});
