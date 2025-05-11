import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Text,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SharedTopBar from '@/components/SharedTopBarOpvoeden';

export default function OpvoedenScreen() {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={[styles.safeArea, { paddingBottom: insets.bottom }]}>
            <ScrollView contentContainerStyle={styles.container}>
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
