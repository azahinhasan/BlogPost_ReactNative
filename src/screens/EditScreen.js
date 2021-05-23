import React, { useContext,useState } from 'react';
import { View,Text, StyleSheet, Button,TouchableOpacity, TextInput} from 'react-native';
import {Context} from '../context/BlogCOntext';
import BlogPostFrom from '../components/BlogPostForm';

const EditScreen=(props)=>{

    const {state}= useContext(Context);
    const blogPost = state.find((blogPost)=>blogPost.id === props.navigation.getParam('id'));

    const [title,setTitle]=useState(blogPost.title);
    const [content,setContent]=useState(blogPost.content);

    return(
        <View>
            <BlogPostFrom/>
        </View>

    )
}



const styles= StyleSheet.create({


});

export default EditScreen;