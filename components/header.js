import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

export default header

const styles = StyleSheet.create({
    header: {

    },
    title: {
        height: 70,
        paddingTop: 20,
        marginTop: 35,
        backgroundColor: 'coral',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
    },
    
});