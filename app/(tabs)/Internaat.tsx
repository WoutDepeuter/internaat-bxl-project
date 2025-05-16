import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';

import PageBanner from '@/components/PageBanner';
import SharedTopBarInternaat from '@/components/SharedTopBarInternaat';
import InternaatPlanning from '@/components/InternaatPlanning';
import ToTopButton from '@/components/ToTopButton';

export default function InternaatScreen() {
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();
  const scrollRef = useRef<ScrollView>(null);
  const [showToTop, setShowToTop] = useState(false);

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setShowToTop(scrollY > windowHeight * 0.1);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { paddingBottom: insets.bottom }]}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <PageBanner title="Ons internaat" />
        <SharedTopBarInternaat />
      </ScrollView>

      {showToTop && (
        <ToTopButton onPress={() => scrollRef.current?.scrollTo({ y: 0, animated: true })} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    backgroundColor: '#FFF',
    paddingBottom: 32,
  },
});
