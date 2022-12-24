import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'

const addTodo = ({addNewTodo}) => {
    const [todo, setTodo] = useState('')

    // const handleChange = (val) => {
    //     setTodo(val);
    // }

  return (
    <View style={styles.container}>
        <View>
            <TextInput 
                placeholder='Add new todo ......'
                onChangeText={(val) => setTodo(val)}
                style={styles.input}
            />

            <Button onPress={() => addNewTodo(todo)} title='Add Todo' color='coral' />
        </View>
    </View>
  )
}

export default addTodo

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 20,
    }
})