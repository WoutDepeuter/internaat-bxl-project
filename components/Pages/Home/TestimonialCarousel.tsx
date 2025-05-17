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
        image: require('@/assets/images/homepage/Izayana.jpeg'),
        text: `Het internaat is gewoon fantastisch.\n
Ik leer hier veel gemakkelijker. De opvoeders helpen me gewoon altijd.\n
Ik leef hier samen met anderen. Mijn vrienden zijn zoals mijn familie. Het was heel spannend om met anderen een kamer te delen. Je leert er op een respectvolle manier met elkaar omgaan.\n
De activiteiten zijn best leuk. Zo zijn we naar het trampolinepark Jump XL gegaan en ook gaan schaatsen. Tijdens onze vrije tijd spelen we vaak samen op de speelplaats.\n
Op het internaat luisteren de opvoeders echt naar ons. Je mag ook zeggen wat er niet goed is. En als je je niet goed voelt, luistert en helpt de opvoeder of ze geven een pilletje. Zelfs de chef-kok doet mee. Hij past soms het eten aan onze wensen aan. Het eten is hier geweldig.`,
    },
    {
        name: 'Lenny',
        age: '15 jaar',
        image: require('@/assets/images/homepage/Lenny.jpeg'),
        text: `Ik vind het internaat heel tof. Ik voel me hier veilig en gelukkig. Dat is nieuw voor mij want thuis had ik het niet zo gemakkelijk. Ik heb hier veel vrienden waar ik altijd veel plezier mee heb. Op woensdag zijn er altijd leuke activiteiten. Vooral koken doe ik graag!`,
    },
    {
        name: 'Dylan',
        age: '16 jaar',
        image: require('@/assets/images/homepage/Dylan.jpeg'),
        text: `Ik ben Dylan. Ik zit al 7 jaar op het internaat.\n
Ik ben in september begonnen in het jaar dat ik 10 jaar oud werd. Ik was niet bang om te komen, want ik wou bij mijn vrienden zijn. Hierdoor voelde ik mij direct thuis op het internaat. Ik heb nooit echt heimwee naar huis ervaren.\n
Tegenover andere internaten, zorgt dit internaat dat wij ons goed voelen en gesteund. We zijn geen nummer. De opvoeders zijn echt met ons begaan.\n
Nu na 7 jaar is het internaat echt een deel van mijn leven. Het internaat heeft mij gemaakt tot de persoon die ik nu ben.`,
    },
    {
        name: 'Aurore',
        age: '18 jaar',
        image: require('@/assets/images/homepage/Aurore.jpeg'),
        text: `Het internaat Don Bosco is 4 jaar geleden de thuis geworden voor mij.\n
Hier hebben ze mij aanvaard zoals ik ben. Het opvoedersteam heeft mij geholpen in moeilijke tijden.\n
Samen met hen is het me gelukt om de problemen achter me te laten en te bouwen aan mijn toekomst.\n
Hier heb ik geleerd om te communiceren met respect en eerlijkheid, zonder andere personen te kwetsen.\n
Ik heb hier vrienden ontmoet voor het leven. Ik heb zelfs geleerd om vrienden te maken buiten mijn comfortzone.\n
De opvoeders staan altijd achter mij. Het internaat zal me nooit laten vallen. Dat heb ik hier zelf mogen ervaren.\n
Kort gezegd: ik ben hier graag!`,
    },
];

export default function TestimonialCarousel() {
    const windowWidth = Dimensions.get('window').width;
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < testimonials.length) {
            flatListRef.current?.scrollToOffset({
                offset: nextIndex * windowWidth,
                animated: true,
            });
            setCurrentIndex(nextIndex);
        }
    };

    const handlePrev = () => {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            flatListRef.current?.scrollToOffset({
                offset: prevIndex * windowWidth,
                animated: true,
            });
            setCurrentIndex(prevIndex);
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
                data={testimonials}
                keyExtractor={(item) => item.name}
                scrollEventThrottle={16}
                initialNumToRender={1}
                maxToRenderPerBatch={1}
                windowSize={2}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false,
                        listener: (event) => {
                            const index = Math.round(
                                event.nativeEvent.contentOffset.x / windowWidth
                            );
                            setCurrentIndex(index);
                        },
                    }
                )}
                renderItem={({ item }) => (
                    <View style={[styles.slide, { width: windowWidth }]}>
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
                        (index - 1) * windowWidth,
                        index * windowWidth,
                        (index + 1) * windowWidth,
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

            {/* Blue Previous Button */}
            {currentIndex > 0 && (
                <TouchableOpacity style={styles.prevButton} onPress={handlePrev}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="#1D4ED8" />
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
        color: '#0761b7',
        borderBottomWidth: 4,
        borderBottomColor: '#0761b7',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: 20,
    },
    slide: {
        alignItems: 'center',
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
        backgroundColor: '#f4d735',
        padding: 12,
        borderRadius: 30,
        elevation: 4,
    },
    prevButton: {
        position: 'absolute',
        bottom: 20,
        left: 40,
        backgroundColor: '#DBEAFE',
        padding: 12,
        borderRadius: 30,
        elevation: 4,
    },
});
