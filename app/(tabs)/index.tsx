import { Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import ImageSlider from '@/components/ImageSlider';

export default function HomeScreen() {
    return (
            <ImageSlider />
    );
}

const styles = StyleSheet.create({
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
