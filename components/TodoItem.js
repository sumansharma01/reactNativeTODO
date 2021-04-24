import React from 'react';
import {Text,StyleSheet, TouchableOpacity} from 'react-native';

const TodoItem=({item,handleItemPress})=>{

    
    return(
        <TouchableOpacity onPress={()=>handleItemPress(item.id)}>
            <Text style={styles.todoItem}>{item.todo}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    todoItem:{
        backgroundColor:'#6ed8ff',
        padding:16,
        marginTop:10,
        color:'white',
        fontSize:16,
        borderWidth:0,
        borderRadius:10
    }
})

export default TodoItem;