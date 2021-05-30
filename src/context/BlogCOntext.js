import React,{useState,useReducer, createContext} from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer'


const blogReducer= (state,action)=>{
    //console.log(state);
    switch(action.type){
        case 'get_blogposts':
           // console.log(action.payload,'response.data')
            return action.payload;
        case 'add_blogpost':
            return[...state,{
                id:Math.random()*9999,
                title: action.payload.title,
                content:action.payload.content
            }];
        case 'delete_blogpost':
            //console.log(action.payload)
            return state.filter((blogPost)=>blogPost.id!== action.payload);
        case 'edit_blogpost':
            return state.map((blogPost)=>{
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        default:
            return state;
    }
};

const getBlogPosts=dispatch=>{
    return async ()=>{
        const response = await jsonServer.get('/blogposts');
        
        dispatch ({type:'get_blogposts', payload:response.data});
    }
}

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

const editBlogPost=(dispatch)=>{
    return(id,title, content, callback)=>{
        dispatch({ type: 'edit_blogpost', payload: { id, title, content },});
        if (callback) {
            callback();
        }
    };    
};


export const {Context,Provider}= createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost,getBlogPosts},[]);