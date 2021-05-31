import React, { useContext,useState } from 'react';
import { View,Text, StyleSheet, TextInput, Button,TouchableOpacity} from 'react-native';


const BlogPostForm=({onSubmit,initialValues})=>{

    const [title,setTitle]=useState(initialValues.title);
    const [content,setContent]=useState(initialValues.content);
   // const {addBlogPost} = useContext(Context);

    return(
        <View>
            <Text style={styles.lable}>Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={text=>setTitle(text)}/>
            <Text style={styles.lable}>Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={text=>setContent(text)}/>
        
            <Button title="SAVE"
                onPress={()=>onSubmit(title,content)}

                // onPress={()=>{  //for calling 2 function or thing in one onPress
                //     addBlogPost(...addBlogPos),
                //     navigation.navigate('Index')
                // }}
            />
        </View>
    );
};


BlogPostForm.defaultProps= {
    //its setUP defult value to props 
    //which help to avoid crash issue in here
    initialValues: {
        //there is no initialValues are comming from creatScreen
        //thats why we assign deffult value in here
        title:'',
        content:'' 
    }
};

const styles= StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        padding:5,
        marginBottom:15,
        marginRight:8
    },
    lable:{
        fontSize:20,
    }

});

export default BlogPostForm;