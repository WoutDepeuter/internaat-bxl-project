import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

import AlarmClockIcon from '@/assets/svgs/internaat-meer/alarm-clock-svgrepo-com.svg';
import ChalkboardIcon from '@/assets/svgs/internaat-meer/person-chalkboard-solid.svg';
import TheaterIcon from '@/assets/svgs/internaat-meer/masks-theater-regular.svg';
import GroupIcon from '@/assets/svgs/internaat-meer/people-group-solid.svg';
import SnoozeIcon from '@/assets/svgs/internaat-meer/snooze-svgrepo-com.svg';

const boxData = [
    {
        icon: AlarmClockIcon,
        title: 'Ochtend',
        description: 'Opstaan tussen 06u30 en 07u45',
    },
    {
        icon: ChalkboardIcon,
        title: 'Studiebegeleiding',
        description: 'Huiswerk maken in groep in de studiezaal met hulp van de opvoeder',
    },
    {
        icon: TheaterIcon,
        title: 'Ontspanning',
        description: 'Sport en spel in de leefgroep, in de sportzaal of op de speelplaats',
    },
    {
        icon: GroupIcon,
        title: 'Activiteiten op woensdag',
        description: 'Gezamelijke activiteit',
    },
    {
        icon: SnoozeIcon,
        title: 'Slaapwel',
        description: 'Om 20u30 naar de kamer. Om 21u licht uit.',
    },
];

export default function InternaatPlanningDetails() {
    return (
        <View style={styles.container}>
            {boxData.map((box, index) => {
                const Icon = box.icon;
                return (
                    <View key={index} style={styles.box}>
                        <Icon width={24} height={24} fill="black" style={styles.icon} />
                        <Text style={styles.title}>{box.title}</Text>
                        <Text style={styles.description}>{box.description}</Text>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        gap: 16,
    },
    box: {
        width: '46%',
        borderWidth: 1,
        borderColor: '#0761b7',
        backgroundColor: '#f4f4f4',
        padding: 16,
    },
    icon: {
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0761b7',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#000',
    },
});