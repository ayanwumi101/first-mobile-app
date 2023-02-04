import 'react-native-gesture-handler';
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/home'
import { globalStyles } from './styles/global'
import Navigator from './routes/drawer'
import { NavigationContainer } from '@react-navigation/native'
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        
        <View style={globalStyles.container} onLayout={onLayoutRootView}>
            
            <NavigationContainer>
                {/* <ImageBackground source={require('./assets/quiz2.jpg')}> */}
                <Navigator />
                {/* </ImageBackground> */}
            </NavigationContainer>
            
            {/* <Home /> */}
            {/* <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Inter Black</Text>
            <Text style={{ fontSize: 30 }}>Platform Default</Text> */}
        </View>
    );
}
