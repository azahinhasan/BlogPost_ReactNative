import React, { useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import {Context} from '../context/BlogCOntext';
import BlogPostFrom from '../components/BlogPostForm';

const CreateScreen=({navigation})=>{

    const {addBlogPost} = useContext(Context);

    return(
        <View>
            <BlogPostFrom onSubmit={(title,content)=>{
                addBlogPost(title,content,()=>navigation.navigate('Index'))
            }}/>
        </View>
    )
}


const styles= StyleSheet.create({


});

export default CreateScreen;