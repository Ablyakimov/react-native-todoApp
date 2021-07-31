import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button} from 'react-native'

export const AddTodo = ({ addTodoBtn }) => {
    const [inputText, setInpitText] = useState('')

    const inputHandler = (text) => {
        setInpitText(text)
    }

    const btnHandler = () => {
        if (!inputText.trim()){
            return
        } 
        addTodoBtn(inputText)
        setInpitText('')
    }

    return (
        <View style={styles.block}>
            <TextInput placeholder='Купить хлеб' onChangeText={(text) => inputHandler(text)} value={inputText} style={styles.input}/>
            <Button onPress={btnHandler} style={styles.button} title='Добавить'/>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input:{
        width: '70%',
        padding: 5 ,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    },
    button:{

    }
})

