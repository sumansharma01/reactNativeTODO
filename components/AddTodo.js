import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

const AddTodo = ({handleAddButtonSubmit}) => {
    const [todo,setTodo]=useState('');

    const handleChangeText=(value)=>{
        setTodo(value);
    }

    const handleButtonClick=()=>{
        handleAddButtonSubmit(todo);
        
    }
    return (
        <View style={styles.addTodo}>
            <TextInput 
                placeholder='add todo...'
                onChangeText={(value)=>handleChangeText(value)}
                style={styles.textInput}
                
            />
            <View style={styles.button}>
                <Button 
                title='Add'
                color='#00B0FF'
                onPress={handleButtonClick} />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    addTodo:{
        
    },
    textInput:{
        // width:'70%',
        borderWidth:0,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10,
        padding:5,
        
        
    },
    button:{
        marginTop:5
        // width:'20%'
        
        
    }
})
export default AddTodo;
