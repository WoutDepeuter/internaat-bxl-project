import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import ChalkboardIcon from '@/assets/svgs/internaat-meer/person-chalkboard-solid.svg';
import RoofIcon from '@/assets/svgs/internaat-meer/people-roof-solid.svg';
import TheaterIcon from '@/assets/svgs/internaat-meer/masks-theater-regular.svg';

const boxData = [
  {
    icon: ChalkboardIcon,
    title: 'Studiebegeleiding',
  },
  {
    icon: RoofIcon,
    title: 'Leefgroep-begeleiding',
  },
  {
    icon: TheaterIcon,
    title: 'Activiteiten',
  },
];

export default function InternaatEigenschappen() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      {boxData.map((item, index) => {
        const Icon = item.icon;
        const isActive = index === activeIndex;

        return (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => setActiveIndex(index)}
          >
            <Icon width={36} height={36} fill={isActive ? '#248ef2' : '#0761b7'} />
            <Text style={[styles.title, { color: isActive ? '#248ef2' : '#0761b7' }]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 16,
  },
  box: {
    borderWidth: 5,
    borderColor: '#f4d735',
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
