import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'
const todos = ({item, deleteTodo}) => {
  return (
    <TouchableOpacity style={styles.todosContainer} onPress={() => deleteTodo(item.key)}>
        <Text style={styles.todo}>
            {item.todo}
        </Text>
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
    },
    todosContainer: {
        marginHorizontal: 20,
    }
})