import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header=()=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>My todo</Text>

        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        padding:40,
        backgroundColor:'#00B0FF',
        height:50
    },
    headerText:{
        color:'white',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    }
})

export default Header;