import React, {useState} from 'react'
import {View, StyleSheet, Text, Button, TouchableOpacity, FlatList, Modal} from 'react-native'
import { log } from 'react-native-reanimated'
import {globalStyles} from '../styles/global'
import {data} from './data'
import {MaterialIcons} from '@expo/vector-icons'

const Home = ({navigation}) => {

    const [reviews, setReviews] = useState(data);
    const [openModal, setOpenModal] = useState(false)

    const pressHandler = () => {
        navigation.navigate('About')
    }
    return (
        <View style={globalStyles.container}>
            <Modal visible={openModal} animationType='slide'>
                <View style={globalStyles.modalContainer}>
                    <MaterialIcons
                        name='close'
                        size={25}
                        onPress={() => setOpenModal(false)}
                        style={{ ...globalStyles.toggleIcon, ...globalStyles.closeIcon }}
                    />
                   <View style={globalStyles.modalConrent}>
                        <Text>The modal content goes here</Text>
                   </View>
                </View>
            </Modal>

            <MaterialIcons 
            name='add' 
            size={25} 
            onPress={() => setOpenModal(true)} 
            style={globalStyles.toggleIcon}
            />
            {/* <Text style={globalStyles.heading}>Welcome Back.</Text>
            
            <Text style={globalStyles.heading}>
                Below is the list of our students
            </Text>

            <Text style={globalStyles.text}>This is a new App i'm building, A reviews App.</Text>

            <Text style={globalStyles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae recusandae incidunt nisi sit eaque et quibusdam pariatur labore in deleniti corporis autem maxime reiciendis.
            </Text> */}

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
                <Button title='Go to about page' style={globalStyles.button} onPress={pressHandler} />
            </View>
            
        </View>
    )
}

export default Home 

 