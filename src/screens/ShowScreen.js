import React, { useContext } from 'react';
import { View,Text, StyleSheet, FlatList, Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogCOntext';


const ShowScreen=(props)=>{

    const {state}= useContext(Context);
    const blogPost = state.find((blogPost)=>blogPost.id === props.navigation.getParam('id'));
    return(
        <Text>
            {blogPost.title}
        </Text>
    )
}

const styles= StyleSheet.create({});

export default ShowScreen;