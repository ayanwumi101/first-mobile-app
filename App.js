import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, TextComponent, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, {useState} from 'react'
import Header from './components/header';
import TodoItem from './components/todos';
import TodoInput from './components/addTodo';

export default function App() {
  const [name, setName] = useState('Abdulroheem');
  const [todos, setTodos] = useState([
    {todo: 'I want to wash cloth', key: 4},
    { todo: 'I want to read', key: 7 },
    { todo: 'I want to cook cloth', key: 8 },
    { todo: 'I want to wash cloth', key: 3 },
    { todo: 'I want to wash cloth', key: 5 },
    { todo: 'I want to read', key: 9 },
    { todo: 'I want to cook cloth', key: 6 },
    { todo: 'I want to wash cloth', key: 1 },
    { todo: 'I want to wash cloth', key: 12 },
    { todo: 'I want to read', key: 17 },
    { todo: 'I want to cook cloth', key: 18 },
    { todo: 'I want to wash cloth', key: 13 },
  ]);
  // const [people, setPeople] = useState([
  //   { name: 'tunde', age: 30, id: 1 },
  //   { name: 'tunde', age: 30, id: 2 },
  //   { name: 'tunde', age: 30, id: 3 },
  //   { name: 'tunde', age: 30, id: 4 },
  //   { name: 'tunde', age: 30, id: 5 },
  //   { name: 'tunde', age: 30, id: 6 },
  //   { name: 'tunde', age: 30, id: 7 },
  //   { name: 'tunde', age: 30, id: 8 },
  // ]);

  const addNewTodo = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [{ todo: text, key: Math.random().toString() }, ...prevTodos];
      })
    }else{
      Alert.alert('OOPS!', 'Todo must be more than 3 chars long', [
        {text: 'Okay!', onPress: () => console.log('pressed')},
      ])
    }
  }

  const deleteTodo = (key) => {
      setTodos((prevTodos) => 
        prevTodos.filter((todo) => todo.key !== key));
  }

  // const handlePress = (id) => {
  //   console.log(id);
  //   setPeople((prevPeople) => {
  //     return prevPeople.filter((itemId) => itemId.id !== id);
  //   });
  // }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      {/* <StatusBar style="auto" />
      <Text style={styles.boldText}>Hello World! Welcome to React Native</Text>
      <Text style={styles.text}>Hi! My name is {name} and i'm a react native developer </Text>
      <View style={styles.box}>
          <Text>Enter Name:</Text>
          <TextInput  />
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <View style={styles.buttonContainer}>
            <Button title='Change Name' onPress={handleClick} />
          </View>
      </View>
      <Text>Enter Name:</Text>
      <TextInput 
      style={styles.input} 
      placeholder='e.g. Mr. Tunde'
      onChangeText={(val) => setName(val)}
      /> */}

      <View>
        <Header />
        <View>
          <TodoInput addNewTodo={addNewTodo} />
          <View style={styles.todoContainer}>
            <FlatList
              data={todos}
              renderItem={({item}) => {
                return (
                  <TodoItem item={item} deleteTodo={deleteTodo} />
                )
              }}
            />
          </View>
        </View>
      </View>

      {/* <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key} style={styles.item}>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
            </View>
          )
        })}
      </ScrollView> */}

      {/* <FlatList 
       data={people}
       numColumns={2}
       keyExtractor={(item) => item.id}
       renderItem={({item}) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        </TouchableOpacity>
       )}
      /> */}

    
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 20,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center', 
  },
  text: {
    color: 'white',
    backgroundColor: 'grey',
    padding: 10,
    margin: 20,
  },
  box: {
    width: 250,
    height: 'auto',
    backgroundColor: 'lightgrey',
    padding: 10,
  },
  boldText: {
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: 'pink',
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    width: 300,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
    marginTop: 24,
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    borderRadius: 5,
  },

  todoContainer: {
    marginTop: 30,
    marginBottom: 30,
  }
});
