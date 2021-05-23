import React, { useContext,useState } from 'react';
import { View,Text, StyleSheet, Button,TouchableOpacity, TextInput} from 'react-native';
import {Context} from '../context/BlogCOntext';
import BlogPostFrom from '../components/BlogPostForm';

const EditScreen=(props)=>{
    const ID = props.navigation.getParam('id');
    const {state,editBlogPost}= useContext(Context);

    const blogPost = state.find((blogPost)=>blogPost.id === ID);

    const [title,setTitle]=useState(blogPost.title);
    const [content,setContent]=useState(blogPost.content);

    return(
        <View>
            <BlogPostFrom
            initialValues={{title:blogPost.title,content:blogPost.content}}
            onSubmit={(title,content)=>{
                editBlogPost(ID,title,content,()=>props.navigation.pop());//pop will retun to previous screen
                
            }}/>
        </View>

    )
}



const styles= StyleSheet.create({


});

export default EditScreen;