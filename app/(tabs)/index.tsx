import { StyleSheet, View } from 'react-native';
import ImageSlider from '@/components/ImageSlider';
import InfoText from "@/components/InfoText";
import IconButtonsRow from "@/components/IconButtonsRow";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ImageSlider />
            <View style={styles.spacer} />
            <InfoText />
            <IconButtonsRow/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    spacer: {
        height: 40, // Adjust this to fine-tune spacing
    },
});
