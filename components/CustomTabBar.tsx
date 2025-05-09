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
            <View style={styles.tabWrapper}>
                <BottomTabBar {...props} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    logo: {
        position: 'absolute',
        top: -15,
        width: 60,
        height: 60,
        zIndex: 10,
    },
    tabWrapper: {
        paddingTop: 30,
        width: '100%',
    },
});
