import React, { useContext } from 'react';
import { View,Text, StyleSheet, FlatList, Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogCOntext';
import { FontAwesome } from '@expo/vector-icons'; 

const ShowScreen=(props)=>{

    const {state}= useContext(Context);
    const blogPost = state.find((blogPost)=>blogPost.id === props.navigation.getParam('id'));
    return(
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>

    )
}


ShowScreen.navigationOptions=({navigation})=>{
    return {
        headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:navigation.getParam('id')})}>
            <FontAwesome name="pencil-square-o" size={24} color="black" />
        </TouchableOpacity>
        ),
    };
};


const styles= StyleSheet.create({});

export default ShowScreen;