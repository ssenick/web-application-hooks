import React from 'react';
import './Posts.css'
const Posts = ({posts,loading,error}) => {
   if(loading){
      return <h3 className="loading">Loading....</h3>
   }
   if(error){
      return <h3 className="error">Ups.., you have error: "${error}"</h3>
   }
   return (
      <div className="posts">
         {posts && posts.map(post =>
            <div key={post.id} className="post">
               <div className="post__title"><span>{post.id}.</span> {post.title}</div>
            </div>
         )}
      </div>
   );
};

export default Posts;