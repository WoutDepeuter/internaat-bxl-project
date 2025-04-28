// This file is a fallback for using MaterialIcons on Android and web.

import { MaterialIcons } from '@expo/vector-icons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { Platform, OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

// Direct mapping from SF Symbols to Material Icons
const MAPPING = {
    'house.fill': 'home',
    'paperplane.fill': 'send',
    'chevron.left.forwardslash.chevron.right': 'code',
    'person.2.fill': 'people',
    'building.2.fill': 'apartment',
    'doc.text.fill': 'description',
    'envelope.fill': 'email',
    'person.crop.circle.fill': 'account_circle',
    'calendar.badge.plus': 'event',
    'phone.fill': 'phone',
};

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web.
 */
export function IconSymbol({
                               name,
                               size = 24,
                               color,
                               style,
                               weight,
                           }: {
    name: string;
    size?: number;
    color: string | OpaqueColorValue;
    style?: StyleProp<ViewStyle>;
    weight?: SymbolWeight;
}) {
    // Get the mapped icon name or use a default
    const iconName = MAPPING[name] || 'help';

    return (
        <MaterialIcons
            name={iconName}
            size={size}
            color={color}
            style={style}
        />
    );
}