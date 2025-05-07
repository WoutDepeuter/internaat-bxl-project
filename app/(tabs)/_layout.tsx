import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { CustomTabBar } from '@/components/CustomTabBar';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                tabBarActiveTintColor: '#FFEB3B',
                tabBarInactiveTintColor: '#0055B3',
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarStyle: Platform.select({
                    ios: {

                        backgroundColor: 'white',


                        borderTopWidth: 0,
                    },
                    default: {
                        backgroundColor: 'white',
                        marginleft: 10,
                    },
                }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Opvoeden"
                options={{
                    title: 'Opvoeden',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.2.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Internaat"
                options={{
                    title: 'Internaat',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="building.2.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Inschrijvingen"
                options={{
                    title: 'Inschrijven',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="doc.text.fill" color={color} />,
                }}
            />
            <Tabs.Screen
                name="contact"
                options={{
                    title: 'Contact',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="envelope.fill" color={color} />,
                }}
            />
        </Tabs>
    );
}
