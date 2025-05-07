import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';
import React from 'react';

export function CustomTabBar(props) {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/shared/dbwi.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <BottomTabBar {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {



    },
    logo: {
        position: 'absolute',
        top: -10,
        width: 60,
        height: 60,
        zIndex: 10,
    },
});
