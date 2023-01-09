import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {globalStyles} from '../styles/global'

const Home = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>Welcome Back.</Text>
            <Text style={globalStyles.text}>This is a new App i'm building, A reviews App.</Text>
        </View>
    )
}

export default Home 
 