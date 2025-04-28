import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

export function LogoTab() {
    return (
        <TouchableWithoutFeedback>
            <Image
                source={require('@/assets/images/shared/dbwi.png')}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
            />
        </TouchableWithoutFeedback>
    );
}
