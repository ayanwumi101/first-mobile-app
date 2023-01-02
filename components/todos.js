import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
const todos = ({item, deleteTodo}) => {
  return (
    <TouchableOpacity style={styles.todosContainer}>
        <View style={styles.todo}>
              <Text>{item.todo}</Text>
              <MaterialIcons name='delete' size={20} color='#333' onPress={() => deleteTodo(item.key)} />
        </View>
        
    </TouchableOpacity>
  )

}
export default todos

const styles = StyleSheet.create({
    todo: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    todosContainer: {
        marginHorizontal: 20,
    }
})