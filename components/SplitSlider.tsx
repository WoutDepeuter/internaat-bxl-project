import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');
const componentWidth = screenWidth * 0.5;
const imageWidth = componentWidth * 0.4;

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
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <View style={[styles.container, { width: componentWidth }]}>
            <View style={styles.leftBackground}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={items[activeIndex].image}
                        style={{
                            width: imageWidth,
                            height: 180,
                            borderRadius: 16,
                            resizeMode: 'contain',
                        }}
                    />
                    <View style={[styles.arrowRow, { width: imageWidth }]}>
                        <TouchableOpacity onPress={prevSlide} style={styles.arrowButton}>
                            <AntDesign name="left" size={24} color="#333" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={nextSlide} style={styles.arrowButton}>
                            <AntDesign name="right" size={24} color="#333" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.rightBackground}>
                <View style={styles.textContainer}>
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
    container: {
        flexDirection: 'row',
        height: 400,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 40,
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
    },
    leftBackground: {
        backgroundColor: '#FFD700',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightBackground: {
        backgroundColor: '#F0F0F0',
        width: '60%',
        justifyContent: 'center',
    },
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginTop: 4,
        gap: 8,
    },
    arrowButton: {
        padding: 4,
    },
    textContainer: {
        paddingHorizontal: 16,
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
