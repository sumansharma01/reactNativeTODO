import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos,setTodos]=useState([
    {todo:'go to all mart', id:1},
    {todo:'buy a plate of biryani', id:2},
    {todo:'register aadhar physical card', id:3},
    {todo:'update bank status', id:4},
    {todo:'get a water jar', id:5}
  ])

  const handleItemPress=(id)=>{
    setTodos((previousState)=>{
      return previousState.filter((i)=>i.id!=id);
    })
  }

  const handleAddButtonSubmit=(todo)=>{
    Keyboard.dismiss();
    if(todo.length>=5){
      setTodos((previousState)=>{
        return [
          {todo:todo,id:Math.random()},
          ...previousState
        ]
      })
    }else{
      Alert.alert('OOPS','Todos must be at least 5 characters long',[
        {text:'Okay',onPress:(()=>console.log("alert button pressed"))}
      ])
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
          <View style={styles.form}>
            <AddTodo handleAddButtonSubmit={handleAddButtonSubmit}/>
          </View>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              keyExtractor={(item)=>item.id}
              renderItem={
                ({item})=>{
                  return(
                    <TodoItem item={item} handleItemPress={handleItemPress}/>
                  )
                }
              }

            />
          </View>
      </View>

      {/* footer */}
      <View style={styles.footer}>

      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    
    padding:20
  },
  list:{
    marginTop:20
  }
});
