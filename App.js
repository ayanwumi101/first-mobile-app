import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Home from './screens/home'
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/Inter-SemiBold.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
          return <Home />
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView}>
          <Home />
            {/* <StatusBar />
            <Text style={globalStyles.titleText}>Alhamdulilah, i have finally worked, Inter font is beautiul</Text>
            <Text style={globalStyles.titleText}>I am a text</Text>> */}
        </View>
    );
}
