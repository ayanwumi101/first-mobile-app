import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import { globalStyles } from '../styles/global'

const ReviewDetails = ({navigation}) => {

    const handlePress = () => {
        navigation.navigate('About')
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>Welcome to Review Details page</Text>
            <Text style={globalStyles.text}>You can find the reviews for all our products below.</Text>

            <View style={globalStyles.button_container}>
                <Button title='Go to About page' onPress={handlePress}  />
            </View>
        </View>
    )
}

export default ReviewDetails 