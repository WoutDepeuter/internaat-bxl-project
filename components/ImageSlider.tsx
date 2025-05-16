
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useRef, useState, useEffect } from 'react';


const { width } = Dimensions.get('window');

const images = [
    require('@/assets/images/homepage/slider1.jpeg'),
    require('@/assets/images/homepage/slider2.jpeg'),
    require('@/assets/images/homepage/slider3.jpeg'),
];

export default function ImageSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<ScrollView>(null);


    const onScroll = (event: any) => {
        const slide = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveIndex(slide);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % images.length;
            scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
            setActiveIndex(nextIndex);
        }, 4000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={onScroll}
                scrollEventThrottle={16}
                style={styles.scrollView}
            >
                {images.map((image, index) => (
                    <Image key={index} source={image} style={styles.image} resizeMode="cover" />
                ))}
            </ScrollView>

            <View style={styles.overlay}>
                <Text style={styles.title}>Je thuis voelen{"\n"}op internaat!</Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.yellowButton}>
                        <Text style={styles.buttonText}>Onze troeven</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.blueButton}>
                        <Text style={styles.buttonText}>Getuigenissen</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.dots}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { opacity: index === activeIndex ? 1 : 0.3 },
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 380,
        position: 'relative',
    },
    scrollView: {
        flex: 1,
    },
    image: {
        width: width,
        height: 380,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: 380,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 12,
    },
    yellowButton: {
        backgroundColor: '#FFD700',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    blueButton: {
        backgroundColor: '#0055B3',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    dots: {
        position: 'absolute',
        bottom: 16,
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 8,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
    },
});
