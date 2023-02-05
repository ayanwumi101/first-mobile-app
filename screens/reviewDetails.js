import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import { globalStyles } from '../styles/global'

const ReviewDetails = ({route, navigation}) => {

    const {name, hobbies, department, review} = route.params

    const handlePress = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>Review by {name}</Text>

            <View>
                <Text style={globalStyles.text}><Text style={globalStyles.bold}>Name:</Text> {name}</Text>
                <Text style={globalStyles.text}><Text style={globalStyles.bold}>Hobbies:</Text> {hobbies}</Text>
                <Text style={globalStyles.text}><Text style={globalStyles.bold}>Department:</Text> {department}</Text>
                <Text style={globalStyles.text}><Text style={globalStyles.bold}>Review:</Text> {review}</Text>
            </View>

            <View style={globalStyles.button_container}>
                <Button title='Go to home page' onPress={handlePress}  />
            </View>
        </View>
    )
}

export default ReviewDetails 