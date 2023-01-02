import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>This is a new App i'm building, A reviews App.</Text>
        </View>
    )
}

export default Home 

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})