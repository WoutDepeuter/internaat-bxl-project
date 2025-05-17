import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function PageBanner({ title }: { title: string }) {
  return (
    <View style={styles.bannerWrapper}>
      <ImageBackground
        source={require('@/assets/images/shared/banner.png')}
        style={styles.bannerImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerWrapper: {
    width: '100%',
    aspectRatio: 3.5,
    marginBottom: 0,
  },
  bannerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(7, 98, 183, 0.7)',
  },
  bannerContent: {
    zIndex: 1,
    paddingHorizontal: 16,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
});
