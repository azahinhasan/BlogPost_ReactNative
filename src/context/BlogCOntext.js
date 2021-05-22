import React,{useState,useReducer, createContext} from 'react';
import createDataContext from './createDataContext';


const blogReducer= (state,action)=>{
    //console.log(state);
    switch(action.type){
        case 'add_blogpost':
            return[...state,{
                id:Math.random()*9999,
                title: action.payload.title,
                content:action.payload.content
            }];
        case 'delete_blogpost':
            console.log(action.payload)
            return state.filter((blogPost)=>blogPost.id!== action.payload);
        default:
            return state;
    }
};


const addBlogPost=(dispatch)=>{
        //setBlogPosts([...blogPosts,{title:`Blog Post :#${blogPosts.length+1}`}])
    return(title,content,callback)=>{
        dispatch({ type: 'add_blogpost',payload:{title,content}});
        callback();
    }    
};
    
const deleteBlogPost=(dispatch)=>{
    return(id)=>{
        dispatch({ type: 'delete_blogpost',payload:id});
    }    
};

export const {Context,Provider}= createDataContext(blogReducer,{addBlogPost,deleteBlogPost},[]);