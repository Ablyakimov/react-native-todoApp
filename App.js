import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import { AddTodo } from './src/components/AddTodo'
import { ListTodo } from './src/components/ListTodo'
import { Navbar } from './src/components/Navbar'

export default function App() {
  const [todoList, setTodoList] = useState([])

  const addTodoBtn = (title) => {
    setTodoList(prev => ([ ...prev,{ id: Date.now().toString(), title }]))
  }

  const removeTodoBtn = (id) => {
    setTodoList(prev => prev.filter(item => item.id !== id))
  }

  return (
    <View style={styles.container}>
      <Navbar title='Todo App' />
        <View style={styles.wrapper}>
          <AddTodo addTodoBtn={addTodoBtn}/>
            <ListTodo removeTodoBtn={removeTodoBtn} todoList={todoList} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  wrapper:{
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: 'column'
  }
})
