import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import { globalStyles } from '../styles/global'


const About = ({navigation}) => {

    const handlePress = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>Welcome to About Page</Text>
            <Text style={globalStyles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione est laborum in. Recusandae sint, harum esse molestiae facere mollitia a nihil, quae nobis similique vero sunt nostrum veniam repellendus?
            </Text>
            <Text style={globalStyles.text}>This is a new App i'm building, A reviews App.</Text>

            <View style={globalStyles.button_container}>
                <Button title='Go back home' onPress={handlePress} />
            </View>
        </View>
    )
}
export default About 
