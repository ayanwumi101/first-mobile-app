import React, {useState} from 'react'
import {View, StyleSheet, Text, Button, TouchableOpacity, FlatList} from 'react-native'
import {globalStyles} from '../styles/global'

const Home = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate('Reviews')
    }

    const data = [
        {
            key: 1,
            name: 'Ajanlekoko Zaynab',
            age: '18',
            level: '200l',
            height: '1.5 Meters',
            hobbies: 'Jumping, Basketball, Running, Boxing, Baking',
            department: 'Food Technology',
            title: 'I really love the coding school',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed esse ea enim architecto voluptatibus at libero, dolorum iure facilis'
        },
        {
            key: 2,
            name: 'Ajanlekoko Hairat',
            age: '19',
            level: '300l',
            height: '1.8 Meters',
            hobbies: 'Jumping, Basketball, Running, Boxing, Baking',
            department: 'Food Technology',
            title: 'I really love the coding school',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed esse ea enim architecto voluptatibus at libero, dolorum iure facilis'
        },
        {
            key: 3,
            name: 'Ayanwumi Abdulroheem',
            age: '21',
            level: '400l',
            height: '2.4 Meters',
            hobbies: 'Jumping, Basketball, Running, Boxing, Baking',
            department: 'Food Technology',
            title: 'I really love the coding school',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed esse ea enim architecto voluptatibus at libero, dolorum iure facilis'
        },
        {
            key: 4,
            name: 'Hannat Salawu',
            age: '18',
            level: '200l',
            height: '1.5 Meters',
            hobbies: 'Jumping, Basketball, She cant run, Boxing, Eeke-Eebu',
            department: 'Food Technology',
            title: 'I really love the coding school',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed esse ea enim architecto voluptatibus at libero, dolorum iure facilis'
        },
        {
            key: 5,
            name: 'Ajanlekoko Zaynab',
            age: '18',
            level: '200l',
            height: '1.5 Meters',
            hobbies: 'Jumping, Basketball, Running, Boxing, Baking',
            department: 'Food Technology',
            title: 'I really love the coding school',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed esse ea enim architecto voluptatibus at libero, dolorum iure facilis'
        },
        {
            key: 6,
            name: 'Ajanlekoko Zaynab',
            age: '18',
            level: '200l',
            height: '1.5 Meters',
            hobbies: 'Jumping, Basketball, Running, Boxing, Baking',
            department: 'Food Technology',
            title: 'I really love the coding school',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed esse ea enim architecto voluptatibus at libero, dolorum iure facilis'
        },
        {
            key: 7,
            name: 'Ajanlekoko Zaynab',
            age: '18',
            level: '200l',
            height: '1.5 Meters',
            hobbies: 'Jumping, Basketball, Running, Boxing, Baking',
            department: 'Food Technology',
            title: 'I really love the coding school',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed esse ea enim architecto voluptatibus at libero, dolorum iure facilis'
        },
        {
            key: 8,
            name: 'Ajanlekoko Zaynab',
            age: '18',
            level: '200l',
            height: '1.5 Meters',
            hobbies: 'Jumping, Basketball, Running, Boxing, Baking',
            department: 'Food Technology',
            title: 'I really love the coding school',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed esse ea enim architecto voluptatibus at libero, dolorum iure facilis'
        },
        {
            key: 9,
            name: 'Ajanlekoko Zaynab',
            age: '18',
            level: '200l',
            height: '1.5 Meters',
            hobbies: 'Jumping, Basketball, Running, Boxing, Baking',
            department: 'Food Technology',
            title: 'I really love the coding school',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed esse ea enim architecto voluptatibus at libero, dolorum iure facilis'
        },
        {
            key: 10,
            name: 'Ajanlekoko Zaynab',
            age: '18',
            level: '200l',
            height: '1.5 Meters',
            hobbies: 'Jumping, Basketball, Running, Boxing, Baking',
            department: 'Food Technology',
            title: 'I really love the coding school',
            review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed esse ea enim architecto voluptatibus at libero, dolorum iure facilis'
        },
    ]

    const [reviews, setReviews] = useState(data);

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>Welcome Back.</Text>
            
            <Text style={globalStyles.heading}>
                Below is the list of our students
            </Text>

            <Text style={globalStyles.text}>This is a new App i'm building, A reviews App.</Text>

            <Text style={globalStyles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae recusandae incidunt nisi sit eaque et quibusdam pariatur labore in deleniti corporis autem maxime reiciendis, voluptas consectetur itaque, quidem dolores quod neque minima quia laboriosam aliquid asperiores? Aut ad in odit quisquam possimus nobis qui quidem natus asperiores sed, recusandae est.
            </Text>

            <FlatList
            data={reviews}
            renderItem={({item}) => (
                    <View style={globalStyles.reviews_container}>
                        <Text style={globalStyles.text}>{item.name}</Text>
                        <Button title='See Review' onPress={() => navigation.navigate('Reviews', item)} />
                    </View>
            )}
             />

            <View style={globalStyles.button_container}>
                <Button title='Go to reviews page' style={globalStyles.button} onPress={pressHandler} />
            </View>
            
        </View>
    )
}

export default Home 
 