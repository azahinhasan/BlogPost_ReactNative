import React,{ useContext } from 'react';
import { Feather } from '@expo/vector-icons'; 
import { View,Text, StyleSheet, FlatList, Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogCOntext';


const IndexScreen =()=>{

    const {state,addBlogPost,deleteBlogPost} = useContext(Context);

    return(
        <View>
            <Text>
                Index Screen
            </Text>
            <Button  title="ADD POST" onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) =>{
                    return <View  style={styles.row}>
                        <Text style={styles.title}>{item.title}-{item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather name='trash' style={styles.icon}/>
                        </TouchableOpacity>
                        
                    </View>
                }}>
            </FlatList>
        </View>
    );
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