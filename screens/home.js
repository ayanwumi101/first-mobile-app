import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import {globalStyles} from '../styles/global'

const Home = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate('Reviews')
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>Welcome Back.</Text>
            <Text style={globalStyles.text}>This is a new App i'm building, A reviews App.</Text>

            <Text style={globalStyles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae recusandae incidunt nisi sit eaque et quibusdam pariatur labore in deleniti corporis autem maxime reiciendis, voluptas consectetur itaque, quidem dolores quod neque minima quia laboriosam aliquid asperiores? Aut ad in odit quisquam possimus nobis qui quidem natus asperiores sed, recusandae est.
            </Text>

            <View style={globalStyles.button_container}>
                <Button title='Go to reviews page' style={globalStyles.button} onPress={pressHandler} />
            </View>
            
        </View>
    )
}

export default Home 
 