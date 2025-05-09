import { View, Text, Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

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
    const { width } = useWindowDimensions();
    const isMobile = width < 500;

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
        <View style={[styles.outer, {
            width: isMobile ? '90%' : width * 0.8,
            height: isMobile ? 'auto' : 600,
            flexDirection: isMobile ? 'column' : 'row',
        }]}>
            {/* Background overlays */}
            <View style={[isMobile ? styles.topBackgroundMobile : styles.leftBackground]} />
            <View style={[isMobile ? styles.bottomBackgroundMobile : styles.rightBackground]} />

            <View style={[styles.contentRow, { flexDirection: isMobile ? 'column' : 'row' }]}>
                <View style={styles.imageWrapper}>
                    <Image source={items[activeIndex].image} style={[styles.image, isMobile && styles.imageMobile]} />
                    <View style={styles.arrowRow}>
                        <TouchableOpacity
                            onPress={prevSlide}
                            style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]}
                            disabled={activeIndex === 0}
                        >
                            <AntDesign name="left" size={24} color="#FFF" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={nextSlide}
                            style={[styles.arrowButton, activeIndex === items.length - 1 && styles.arrowButtonDisabled]}
                            disabled={activeIndex === items.length - 1}
                        >
                            <AntDesign name="right" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.textContainer, isMobile && styles.textContainerMobile]}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Onze troeven</Text>
                        <View style={styles.sectionLine} />
                    </View>

                    {items.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
                            <Text
                                style={[styles.text, index === activeIndex && styles.activeText]}
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
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 40,
        overflow: 'hidden',
        position: 'relative',
    },
    leftBackground: {
        backgroundColor: '#FFD700',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '40%',
        zIndex: -1,
    },
    rightBackground: {
        backgroundColor: '#F0F0F0',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '60%',
        zIndex: -1,
    },
    topBackgroundMobile: {
        backgroundColor: '#FFD700',
        position: 'absolute',
        top: 0,
        height: '40%',
        left: 0,
        right: 0,
        zIndex: -1,
    },
    bottomBackgroundMobile: {
        backgroundColor: '#F0F0F0',
        position: 'absolute',
        bottom: 0,
        height: '60%',
        left: 0,
        right: 0,
        zIndex: -1,
    },
    contentRow: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        paddingHorizontal: 20,
    },
    imageWrapper: {
        position: 'relative',
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
    },
    imageMobile: {
        width: 300,
        height: 300,
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
        marginRight: 10,
    },
    arrowButtonDisabled: {
        backgroundColor: 'rgba(36, 142, 242, 0.5)',
    },
    textContainer: {
        flex: 1,
    },
    textContainerMobile: {
        marginTop: 20,
        width: '100%',
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
