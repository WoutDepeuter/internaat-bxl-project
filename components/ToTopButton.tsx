import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import UpArrow from '@/assets/svgs/shared/up-arrow-svgrepo-com.svg';

type Props = {
    onPress: () => void;
};

export default function ToTopButton({ onPress }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <UpArrow width={24} height={24} fill="#ffffff" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#0081fa',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
});
