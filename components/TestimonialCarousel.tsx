import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Animated,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
        name: 'Izayana',
        age: '11 jaar',
        image: require('../assets/images/homepage/Izayana.jpeg'),
        text: `Het internaat is gewoon fantastisch. Ik leer hier veel gemakkelijker...`,
    },
    {
        name: 'Lenny',
        age: '15 jaar',
        image: require('../assets/images/homepage/Lenny.jpeg'),
        text: `Ik vind het internaat heel tof. Ik voel me hier veilig en gelukkig...`,
    },
    {
        name: 'Dylan',
        age: '16 jaar',
        image: require('../assets/images/homepage/Dylan.jpeg'),
        text: `Ik ben Dylan. Ik zit al 7 jaar op het internaat...`,
    },
    {
        name: 'Aurore',
        age: '18 jaar',
        image: require('../assets/images/homepage/Aurore.jpeg'),
        text: `Het internaat Don Bosco is 4 jaar geleden de thuis geworden...`,
    },
];

const CARD_WIDTH = 800;

export default function TestimonialCarousel() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < testimonials.length) {
            flatListRef.current?.scrollToOffset({
                offset: nextIndex * CARD_WIDTH,
                animated: true,
            });
            setCurrentIndex(nextIndex);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Getuigenissen</Text>

            <Animated.FlatList
                ref={flatListRef}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.name}
                data={testimonials}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false,
                        listener: (event) => {
                            const index = Math.round(
                                event.nativeEvent.contentOffset.x / CARD_WIDTH
                            );
                            setCurrentIndex(index);
                        },
                    }
                )}
                scrollEventThrottle={16}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <TestimonialCard
                            name={item.name}
                            age={item.age}
                            text={item.text}
                            image={item.image}
                        />
                    </View>
                )}
            />

            {/* Pagination Dots */}
            <View style={styles.pagination}>
                {testimonials.map((_, index) => {
                    const inputRange = [
                        (index - 1) * CARD_WIDTH,
                        index * CARD_WIDTH,
                        (index + 1) * CARD_WIDTH,
                    ];

                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [8, 16, 8],
                        extrapolate: 'clamp',
                    });

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View
                            key={index}
                            style={[styles.dot, { width: dotWidth, opacity }]}
                        />
                    );
                })}
            </View>

            {/* Yellow Next Button */}
            {currentIndex < testimonials.length - 1 && (
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <MaterialIcons name="arrow-forward-ios" size={24} color="#1D4ED8" />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        backgroundColor: '#FFF',
        position: 'relative',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1D4ED8',
        borderBottomWidth: 4,
        borderBottomColor: '#3B82F6',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: 20,
    },
    slide: {
        width: CARD_WIDTH,
        alignSelf: 'center',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
    },
    dot: {
        height: 8,
        borderRadius: 4,
        backgroundColor: '#1D4ED8',
        marginHorizontal: 4,
    },
    nextButton: {
        position: 'absolute',
        bottom: 20,
        right: 40,
        backgroundColor: '#FACC15',
        padding: 12,
        borderRadius: 30,
        elevation: 4,
    },
});
