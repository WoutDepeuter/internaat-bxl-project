import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';

const image = require('../assets/images/donbosco-waarden/DonBoscoRustRegelmaat.jpeg');

const bulletPoints = [
  'Rust en regelmaat',
  'Duidelijkheid in afspraken en grenzen',
  'Begripvol en redelijk',
  'Groeien in verantwoordelijkheid',
  'Vrijheid en zelfstandigheid',
];

export default function OpsommingOpvoedenOnzeWaarden() {
  const { width } = useWindowDimensions();
  const imageWidth = Math.min(width * 0.9, 320);

  return (
    <View style={{ alignItems: 'center', marginBottom: 24 }}>
      {/* Image */}
      <Image
        source={image}
        style={{
          width: imageWidth,
          height: imageWidth * 0.66,
        }}
        resizeMode="cover"
      />

      {/* Blue background with bullets */}
      <View style={[styles.bulletWrapper, { width: imageWidth }]}>
        {bulletPoints.map((point, index) => (
          <View key={index} style={styles.bulletRow}>
            <View style={styles.bulletCube} />
            <Text style={styles.bulletText}>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bulletWrapper: {
    backgroundColor: '#0761b7',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bulletCube: {
    width: 10,
    height: 10,
    backgroundColor: '#f4d735',
    marginRight: 10,
  },
  bulletText: {
    fontSize: 14,
    color: '#fff',
    flexShrink: 1,
  },
});
