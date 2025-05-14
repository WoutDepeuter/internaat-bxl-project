import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';

const partnerLogosTopRow = [
  require('@/assets/images/donbosco-partners/KAJ.png'),
  require('@/assets/images/donbosco-partners/allegria.png'),
  require('@/assets/images/donbosco-partners/Pelicano.png'),
];

const partnerLogosBottomRow = [
  require('@/assets/images/donbosco-partners/jeugdhulp-dbvlaanderen.png'),
  require('@/assets/images/donbosco-partners/jeugdhulp.png'),
  require('@/assets/images/donbosco-partners/bredeschool.png'),
  require('@/assets/images/donbosco-partners/vlaanderen-is-kansrijk-opgroeien.png'),
  require('@/assets/images/donbosco-partners/vlaanderen-is-onderwijs.png'),
];

export default function LogosPartners() {
  const { width } = useWindowDimensions();
  const isMobile = width < 500;
  const containerWidth = isMobile ? '90%' : width * 0.6;

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <View style={styles.rowWrap}>
        {partnerLogosTopRow.map((source, index) => (
          <Image key={index} source={source} style={styles.logo} resizeMode="contain" />
        ))}
      </View>
      <View style={styles.rowWrap}>
        {partnerLogosBottomRow.map((source, index) => (
          <Image key={index} source={source} style={styles.logo} resizeMode="contain" />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    alignSelf: 'center',
    paddingVertical: 20,
    gap: 20,
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  logo: {
    width: 100,
    height: 75,
  },
});