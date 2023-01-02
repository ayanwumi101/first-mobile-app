import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <Text>This is a new App i'm building, A reviews App.</Text>
        </View>
    )
}

export default About 

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})