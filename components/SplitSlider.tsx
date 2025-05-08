import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');
const componentWidth = screenWidth * 0.8;
const imageWidth = 400;

const items = [
    {
        image: require('@/assets/images/homepage/troeven1.jpeg'),
        text: 'Een warme, tweede thuis en respectvolle leefomgeving',
    },
    {
        image: require('@/assets/images/homepage/troeven2.jpeg'),
        text: 'Duidelijke structuur en regelmaat',
    },
    {
        image: require('@/assets/images/homepage/troeven3.jpeg'),
        text: 'Studie-coaching op maat',
    },
    {
        image: require('@/assets/images/homepage/troeven4.jpeg'),
        text: 'Gedreven en geduldige opvoeders',
    },
    {
        image: require('@/assets/images/homepage/troeven5.jpeg'),
        text: 'Vrienden voor het leven',
    },
    {
        image: require('@/assets/images/homepage/troeven6.jpeg'),
        text: 'Gezellige en sfeervolle leefruimten',
    },
    {
        image: require('@/assets/images/homepage/troeven7.jpeg'),
        text: 'Avontuurlijke sport- en spelactiviteiten',
    },
    {
        image: require('@/assets/images/homepage/troeven8.jpeg'),
        text: 'Goede samenwerking met ouders, scholen en vrijetijdsclubs',
    },
    {
        image: require('@/assets/images/homepage/troeven9.jpeg'),
        text: 'Gezonde maaltijden, bereid door een eigen chef in huis',
    },
];

export default function SplitSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        if (activeIndex < items.length - 1) {
            setActiveIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
        }
    };

    return (
        <View style={styles.outer}>
            <View style={styles.leftBackground} />
            <View style={styles.rightBackground} />

            <View style={styles.contentRow}>
                <View style={styles.imageWrapper}>
                    <Image source={items[activeIndex].image} style={styles.image} />
                    <View style={styles.arrowRow}>
                        <TouchableOpacity
                            onPress={prevSlide}
                            style={[
                                styles.arrowButton,
                                activeIndex === 0 && styles.arrowButtonDisabled,
                            ]}
                            disabled={activeIndex === 0}
                        >
                            <AntDesign name="left" size={24} color="#FFF" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={nextSlide}
                            style={[
                                styles.arrowButton,
                                activeIndex === items.length - 1 && styles.arrowButtonDisabled,
                            ]}
                            disabled={activeIndex === items.length - 1}
                        >
                            <AntDesign name="right" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Onze troeven</Text>
                        <View style={styles.sectionLine} />
                    </View>

                    {items.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
                            <Text
                                style={[
                                    styles.text,
                                    index === activeIndex && styles.activeText,
                                ]}
                            >
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outer: {
        height: 600,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 40,
        overflow: 'hidden',
        position: 'relative',
        width: componentWidth,
    },
    leftBackground: {
        backgroundColor: '#FFD700',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '40%',
    },
    rightBackground: {
        backgroundColor: '#F0F0F0',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '60%',
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        height: '100%',
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    imageWrapper: {
        position: 'relative',
    },
    image: {
        width: imageWidth,
        height: imageWidth,
        resizeMode: 'cover',
    },
    arrowRow: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        flexDirection: 'row',
    },
    arrowButton: {
        backgroundColor: '#248ef2',
        padding: 6,
    },
    arrowButtonDisabled: {
        backgroundColor: 'rgba(36, 142, 242, 0.5)',
    },
    textContainer: {
        flex: 1,
    },
    sectionHeader: {
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0055B3',
    },
    sectionLine: {
        width: 100,
        height: 2,
        backgroundColor: '#0055B3',
        marginTop: 4,
    },
    text: {
        fontSize: 16,
        marginVertical: 2,
        paddingVertical: 4,
        paddingHorizontal: 8,
        color: '#0055B3',
    },
    activeText: {
        backgroundColor: '#FFD700',
        fontWeight: 'bold',
    },
});
