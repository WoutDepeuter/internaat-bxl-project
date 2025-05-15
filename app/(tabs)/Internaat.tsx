import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PageBanner from '@/components/PageBanner';
import SharedTopBarInternaat from '@/components/SharedTopBarInternaat';
import InternaatPlanning from '@/components/InternaatPlanning';

export default function InternaatScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.safeArea, { paddingBottom: insets.bottom }]}>
      <ScrollView contentContainerStyle={styles.container}>
        <PageBanner title="Ons internaat" />
        <SharedTopBarInternaat />
        <InternaatPlanning />
      </ScrollView>
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
