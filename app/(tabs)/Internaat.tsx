import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PageBanner from '@/components/PageBanner';
import OnzeRegels from '@/components/OnzeRegels';
import InfoButtons from '@/components/ui/InschrijvenButtons';

export default function InschrijvenScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.safeArea, { paddingBottom: insets.bottom }]}>
      <ScrollView contentContainerStyle={styles.container}>
        <PageBanner title="Ons internaat" />
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
