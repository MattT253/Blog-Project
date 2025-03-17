import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';

function Post({ post }) {

    // const { id } = useParams();

    const [redirectToEditPost, setRedirectToEditPost] = useState(false);

    // Remove a post from the list using a filter on the unique post ID
    async function handlePostRemove () {
      if (window.confirm('Are you sure you want to delete this post?')) {
        await fetch(`https://ideal-cod-x649qjqpx7vh6g7p-5050.app.github.dev/record/${post._id}`, {
          method: "DELETE"
        });
        window.location.reload()
      }
    }

    const handlePostEdit = () => {
      setRedirectToEditPost(true)
      }

    if (redirectToEditPost) {
      return <Navigate to={"/editPost/" + post._id} />;
    }
  
    /* 
    // If a URL with a bad post ID is passed (typically by typing it directly into the address bar), this will redirect to the home page avoiding an application crash.
    if (post === undefined) {
      return <Navigate to="/" />;
    } 
    */

    return (
      <div className='postCard'>
        <h2 className='postTitle'>{post.postTitle}</h2>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <div style={{width: '90%', minHeight: '200px'}}>
            <div className='postText'>{post.postText}</div>
          </div>
          <div style={{width: '10%'}}>
            <button className='deletePostButton' onClick={handlePostRemove}>Delete Post</button>
            <button className='editPostButton' onClick={handlePostEdit}>Edit Post</button>
          </div>
        </div>
      </div>
    );
}

export default Post;