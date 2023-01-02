import React, {useState} from 'react'
import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

// export default function App() {
//     const [fontsLoaded] = useFonts({
//         'Inter-Black': require('./assets/fonts/Inter-SemiBold.ttf'),
//     });

//     const onLayoutRootView = useCallback(async () => {
//         if (fontsLoaded) {
//             await SplashScreen.hideAsync();
//         }
//     }, [fontsLoaded]);

//     if (!fontsLoaded) {
//         return null;
//     }

//     return (
//         <View style={styles.container} onLayout={onLayoutRootView}>
//             <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Inter Black</Text>
//             <Text style={{ fontSize: 30 }}>Platform Default</Text>
//         </View>
//     );
// }


export default function App() {
  const [fontsLoaded] = useFonts({
        'inter-medium': require('./assets/fonts/Inter-Medium.ttf'),
        'inter-semi-bold': require('./assets/fonts/Inter-SemiBold.ttf'),
        'inter-light': require('./assets/fonts/Inter-Light.ttf'),
        'inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  });

  return (
    <Text style={styles.text}>I am a text</Text>
  )

  
}


const styles = StyleSheet.create({
    text: {
        fontFamily: 'inter-semi-bold',
        padding: 30,
    }
})