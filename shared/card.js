import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

export default Card


const styles = StyleSheet.create({
    card: {

    },
    cardContent: {
        
    }
});