import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AlarmClockIcon from '@/assets/svgs/internaat-meer/alarm-clock-svgrepo-com.svg';
import ChalkboardIcon from '@/assets/svgs/internaat-meer/person-chalkboard-solid.svg';
import TheaterIcon from '@/assets/svgs/internaat-meer/masks-theater-regular.svg';
import GroupIcon from '@/assets/svgs/internaat-meer/people-group-solid.svg';
import SnoozeIcon from '@/assets/svgs/internaat-meer/snooze-svgrepo-com.svg';

const boxDataMap: Record<string, any[]> = {
    'Lager onderwijs': [
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
    ],
    '1e jaar secundair': [
        {
            icon: AlarmClockIcon,
            title: 'Ochtend',
            description: 'Opstaan tussen 06u30 en 07u30',
        },
        {
            icon: ChalkboardIcon,
            title: 'Studiebegeleiding',
            description: 'Studie in de studiezaal. De opvoeder volgt via smartschool alle taken en lessen op.',
        },
        {
            icon: TheaterIcon,
            title: 'Ontspanning',
            description: 'Sport en spel in de leefgroep, in de sportzaal of op de speelplaats. De opvoeder speelt mee.',
        },
        {
            icon: GroupIcon,
            title: 'Activiteiten op woensdag',
            description: 'Gezamelijke activiteit',
        },
        {
            icon: SnoozeIcon,
            title: 'Slaapwel',
            description: 'Om 20u30 naar de kamer. Om 21u30 licht uit.',
        },
    ],
    '2e jaar secundair': [
        {
            icon: AlarmClockIcon,
            title: 'Ochtend',
            description: 'Opstaan tussen 06u30 en 07u30',
        },
        {
            icon: ChalkboardIcon,
            title: 'Studiebegeleiding',
            description: 'Studie in de studiezaal. De opvoeder volgt via smartschool alle taken en lessen op.',
        },
        {
            icon: TheaterIcon,
            title: 'Ontspanning',
            description: 'Vrijblijvend ontspannen in de leefgroep en/of in de sportzaal en/of op de speelplaats. De opvoeder speelt mee.',
        },
        {
            icon: GroupIcon,
            title: 'Activiteiten op woensdag',
            description: 'Gezamelijke activiteit',
        },
        {
            icon: SnoozeIcon,
            title: 'Slaapwel',
            description: 'Tussen 20u30 en 21u30 naar de kamer. Om 21u45 licht uit.',
        },
    ],
    '3e-4e jaar secundair': [
        {
            icon: AlarmClockIcon,
            title: 'Ochtend',
            description: 'Opstaan tussen 06u30 en 07u30',
        },
        {
            icon: ChalkboardIcon,
            title: 'Studiebegeleiding',
            description: 'Studie in de studiezaal. De opvoeder volgt via smartschool alle taken en lessen op. Goede resultaten en studiehouding worden beloond met studiemogelijkheid op de kamer.',
        },
        {
            icon: TheaterIcon,
            title: 'Ontspanning',
            description: 'Vrijblijvend ontspannen in de leefgroep en/of in de sportzaal en/of op de speelplaats. De opvoeder speelt mee.',
        },
        {
            icon: GroupIcon,
            title: 'Activiteiten op woensdag',
            description: 'Gezamenlijke activiteit of mogelijkheid tot vrij moment in overleg met de ouders.',
        },
        {
            icon: SnoozeIcon,
            title: 'Slaapwel',
            description: 'Tussen 20u30 en 21u30 naar de kamer. Om 21u45 licht uit.',
        },
    ],
    '5e-7e jaar secundair': [
        {
            icon: AlarmClockIcon,
            title: 'Ochtend',
            description: 'Opstaan tussen 06u30 en 07u30',
        },
        {
            icon: ChalkboardIcon,
            title: 'Studiebegeleiding',
            description: 'Studeren op de eigen kamer. De opvoeder volgt via smartschool de jongeren op.',
        },
        {
            icon: TheaterIcon,
            title: 'Ontspanning',
            description: 'Vrijblijvend ontspannen in de leefgroep en/of in de sportzaal en/of op de speelplaats. De opvoeder speelt mee.',
        },
        {
            icon: GroupIcon,
            title: 'Activiteiten op woensdag',
            description: 'Gezamenlijke activiteit of mogelijkheid tot vrij moment in overleg met de ouders.',
        },
        {
            icon: SnoozeIcon,
            title: 'Slaapwel',
            description: 'Om 22u naar de kamer. Om 22u45 licht uit.',
        },
    ],
};

export default function InternaatPlanningDetails({ group }: { group: string }) {
    const boxData = boxDataMap[group] || [];

    return (
        <View style={styles.container}>
            {boxData.map((box, index) => {
                const Icon = box.icon;
                return (
                    <View key={index} style={styles.box}>
                        <View style={styles.contentWrapper}>
                            <View style={styles.iconWrapper}>
                                <Icon width={24} height={24} fill="black" />
                            </View>
                            <Text style={styles.title}>{box.title}</Text>
                            <Text style={styles.description}>{box.description}</Text>
                        </View>
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
    contentWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: 120,
    },
    iconWrapper: {
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0761b7',
        marginBottom: 4,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
    },
});
