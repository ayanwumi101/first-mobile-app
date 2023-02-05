import React from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native'
import { globalStyles } from '../styles/global'


const button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default button

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "tomato",
        border: "none",
        padding: 15,
        color: "white",
        borderRadius: 6,
        fontFamily: "Inter-Regular",
    },
    buttonText: {
        fontFamily: "Inter-Regular",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: 'uppercase',
        fontSize: 16,
    },
})