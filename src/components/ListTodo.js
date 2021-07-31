import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

export const ListTodo = ({ todoList, removeTodoBtn }) => {

    return (
        <FlatList 
            style={styles.wrapper} 
            data={todoList}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
                <View style={styles.item}>
                    <Text style={styles.text}>{++index}. {item.title}</Text>
                    <Button onPress={() => removeTodoBtn(item.id)} title='Удалить' />
                </View>
            )}
        />
    );
};


const styles = StyleSheet.create({
    wrapper:{
        paddingTop: 20
    },
    item: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#3949ab',
        marginBottom: 7
    }, 
    text: {
        color: 'black'
    }
})