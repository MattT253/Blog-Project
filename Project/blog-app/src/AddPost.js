import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
  
function AddPost () {
      const [redirectToTimeline, setRedirectToTimeline] = useState(false);

      // Stores the post title in text input
      const[inputPostTitle, setInputPostTitle] = useState('')

      // Stores the post text content in a text input
      const[inputPostText, setInputPostText] = useState('')
    
      // Transfer the text in the input field into a new post and give it a unique ID.
      async function handleAddPost () {
        const newPost = {postTitle: inputPostTitle, postText: inputPostText}
        
        await fetch("https://ideal-cod-x649qjqpx7vh6g7p-5050.app.github.dev/record", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        })
        .catch(error => {
          window.alert(error);
          return;
        });

        setRedirectToTimeline(true)
      }

      if (redirectToTimeline) {
        return <Navigate to="/timeline" />;
      }

    return (
    <div>
        <div>
            {/* Components to handle user input through text boxes and an add post button*/}
            <h2>Add Posts here</h2>
            <p>Post Title:</p>
            <input className='postTitleInput' type="text" value={inputPostTitle} onChange={(e) => setInputPostTitle(e.target.value)}/>
            <p>Post text:</p>
            <textarea rows="20" cols="100" className='postTextInput' type="text" value={inputPostText} onChange={(e) => setInputPostText(e.target.value)}/>
            <p/>
            <button className='addPostButton' onClick={() => handleAddPost()}>Add Post</button>
        </div>
  </div>
    );
}

export default AddPost;