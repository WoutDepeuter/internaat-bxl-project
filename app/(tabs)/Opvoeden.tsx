import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Text,
    useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';

import SharedTopBar from '@/components/SharedTopBarOpvoeden';
import BottomShared from '@/components/BottomShared';

export default function OpvoedenScreen() {
    const insets = useSafeAreaInsets();
    const scrollRef = useRef<ScrollView>(null);
    const bottomRef = useRef<View>(null);
    const { height: windowHeight } = useWindowDimensions();

    const [isBottomVisible, setIsBottomVisible] = useState(false);

    const handleScroll = (event: any) => {
        const scrollY = event.nativeEvent.contentOffset.y;

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
                <View style={styles.bannerWrapper}>
                    <ImageBackground
                        source={require('@/assets/images/shared/banner.png')}
                        style={styles.bannerImage}
                        resizeMode="cover"
                    >
                        <View style={styles.overlay} />
                        <View style={styles.bannerContent}>
                            <Text style={styles.bannerTitle}>Opvoeden met Don Bosco</Text>
                        </View>
                    </ImageBackground>
                </View>

                <SharedTopBar />

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
        backgroundColor: '#FFF',
        paddingBottom: 32,
    },
    bannerWrapper: {
        width: '100%',
        aspectRatio: 3.5,
        marginBottom: 0,
    },
    bannerImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(7, 98, 183, 0.7)',
    },
    bannerContent: {
        zIndex: 1,
        paddingHorizontal: 16,
    },
    bannerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    },
});
