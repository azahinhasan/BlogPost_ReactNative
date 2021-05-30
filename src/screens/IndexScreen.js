import React,{ useContext,useEffect } from 'react';
import { Feather } from '@expo/vector-icons'; 
import { View,Text, StyleSheet, FlatList, Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogCOntext';
import { AntDesign } from '@expo/vector-icons'; 


const IndexScreen =(props)=>{

    const {state,addBlogPost,deleteBlogPost,getBlogPosts} = useContext(Context);

    useEffect(() => {
        getBlogPosts();
    }, [])
    
    return(
            <View>
                <Button  title="ADD POST" onPress={addBlogPost}/>
                <FlatList
                    data={state}
                    keyExtractor={(blogPost) => blogPost.title}
                    renderItem={({item}) =>{
                        return (
                        <TouchableOpacity onPress={()=> props.navigation.navigate('Show',{id:item.id})}>
                                <View  style={styles.row}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                        <Feather name='trash' style={styles.icon}/>
                                    </TouchableOpacity>
                                </View>
                        </TouchableOpacity>)
                    }}>
                </FlatList>
            </View>

    );
};


IndexScreen.navigationOptions=({navigation})=>{



    return {
        headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <AntDesign name="plus" size={30} />
        </TouchableOpacity>
        ),
    };
};

const styles= StyleSheet.create({

    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    }
});

export default IndexScreen;