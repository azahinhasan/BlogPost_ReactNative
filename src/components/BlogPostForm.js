import React, { useContext,useState } from 'react';
import { View,Text, StyleSheet, TextInput, Button,TouchableOpacity} from 'react-native';


const BlogPostForm=({onSubmit})=>{

    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
   // const {addBlogPost} = useContext(Context);

    return(
        <View>
            <Text style={styles.lable}>Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={text=>setTitle(text)}/>
            <Text style={styles.lable}>Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={text=>setContent(text)}/>
        
            <Button title="ADD BLOG"
                onPress={()=>onSubmit(title,content)}

                // onPress={()=>{  //for calling 2 function or thing in one onPress
                //     addBlogPost(...addBlogPos),
                //     navigation.navigate('Index')
                // }}
            />
        </View>
    )
}


const styles= StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        padding:5,
        marginBottom:15
    },
    lable:{
        fontSize:20,
    }

});

export default BlogPostForm;