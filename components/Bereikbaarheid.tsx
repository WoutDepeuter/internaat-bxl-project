import React from 'react';
import { View, Text, StyleSheet, Linking, Platform, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';

import MetroIcon from '@/assets/svgs/contact/train-subway-solid.svg';
import TramIcon from '@/assets/svgs/contact/train-tram-solid.svg';
import BusIcon from '@/assets/svgs/contact/bus-solid.svg';
import CarIcon from '@/assets/svgs/contact/car-solid.svg';

const bereikbaarheidItems = [
    {
        icon: MetroIcon,
        title: 'Met de metro',
        description: 'Via de lijnen 1 en 5, halte Tomberg (op 10 min. wandelafstand)',
    },
    {
        icon: TramIcon,
        title: 'Met de tram',
        description: 'Via de lijnen 39 en 44, halte Groene hond (op 7 min. wandelafstand)',
    },
    {
        icon: BusIcon,
        title: 'Met de bus',
        description: 'Via vele buslijnen, halte Roodebeek of Tomberg',
    },
    {
        icon: CarIcon,
        title: 'Met de auto',
        description: `via de Brusselse ring, afrit Hennaulaan (Sint-Pieters-Woluwe). Volg de Woluwelaan R22 richting Sint-Pieters-Woluwe tot vlak voor de tunnel ter hoogte van het Shoppingcenter/Roodebeek. Voor de tunnel houdt rechts aan. Sla rechts af, neem de Paul Hymanslaan. Voorbij metrohalte Tomberg/gemeentehuis Sint-Lambrechts-Woluwe slaat u links af, Henri Pauwelslaan. Volg deze. Don Bosco is nu vlak bij.

Via de E40/A3, afrit kraainem richting de Bevrijdingslaan. Sla rechtsaf naar de bevrijdingslaan. Neem een scherpe bocht naar rechts naar het Woluwedal/R22. Volg de Woluwelaan R22 richting Sint-Pieters-Woluwe tot voor de tunnel ter hoogte van het Shoppingcenter/Roodebeek. Voor de tunnel houdt rechts aan. Sla rechts af, neem de Paul Hymanslaan. Voorbij metrohalte Tomberg/gemeentehuis Sint-Lambrechts-Woluwe slaat u links af, Henri Pauwelslaan. Volg deze rechtdoor. Don Bosco is nu vlak bij.`,
    },
];

const MAP_EMBED_HTML = `
  <!DOCTYPE html>
  <html>
    <head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body style="margin:0;padding:0">
      <iframe width="100%" height="100%" frameborder="0" style="border:0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=4.4238%2C50.8380%2C4.4250%2C50.8388&layer=mapnik"
      ></iframe>
    </body>
  </html>
`;

const MAP_LINK = 'https://www.openstreetmap.org/?mlat=50.8383&mlon=4.4244#map=19/50.8383/4.4244';

export default function Bereikbaarheid() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Bereikbaarheid</Text>

            {bereikbaarheidItems.map((item, index) => {
                const Icon = item.icon;
                return (
                    <View key={index} style={styles.row}>
                        <View style={styles.icon}>
                            <Icon width={32} height={32} fill="#1D4ED8" />
                        </View>
                        <View style={styles.textBlock}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                );
            })}

            <View style={styles.mapContainer}>
                {Platform.OS === 'web' ? (
                    <Pressable onPress={() => Linking.openURL(MAP_LINK)}>
                        <Text style={styles.mapLink}>Bekijk kaart op OpenStreetMap</Text>
                    </Pressable>
                ) : (
                    <WebView
                        source={{ html: MAP_EMBED_HTML }}
                        style={styles.map}
                        scrollEnabled={false}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1D4ED8',
        marginBottom: 24,
        borderBottomWidth: 4,
        borderBottomColor: '#3B82F6',
        alignSelf: 'flex-start',
        paddingBottom: 4,
    },
    row: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 24,
    },
    icon: {
        width: 40,
        alignItems: 'center',
        marginTop: 4,
    },
    textBlock: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
    },
    mapContainer: {
        marginTop: 16,
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        flex: 1,
        borderRadius: 8,
        width: '100%',
        height: '100%',
    },
    mapLink: {
        color: '#1D4ED8',
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
