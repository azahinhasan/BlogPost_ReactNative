import React from 'react';

const BlogContext= React.createContext();

export const BlogProvider =({ children})=>{
    return (
        <BlogContext.Provider value={4}>
            {children} 
            {/* childern is <App/> comoing from App.js */}
        </BlogContext.Provider>
    )
}

export default BlogContext;