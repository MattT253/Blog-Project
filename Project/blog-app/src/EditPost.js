import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
  
function EditPost ({ timelineValue }) {

    const { id } = useParams();
    
    const [redirectToTimeline, setRedirectToTimeline] = useState(false);

    const post = timelineValue.filter((val) => val._id === id)

    // Stores the post title in text input
    const[inputPostTitle, setInputPostTitle] = useState(post[0].postTitle)

    // Stores the post text content in a text input
    const[inputPostText, setInputPostText] = useState(post[0].postText)
  
    // Transfer the text in the input fields into the existing post.
    async function handleUpdatePost () {

      const editedPost = {
        postTitle: inputPostTitle,
        postText: inputPostText
      };
    
      // This will send a post request to update the data in the database.
      await fetch(`https://ideal-cod-x649qjqpx7vh6g7p-5050.app.github.dev/record/${id}`, {
        method: "PATCH",
        body: JSON.stringify(editedPost),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      setRedirectToTimeline(true)
    }

    const handleCancelUpdate = () => {
      setRedirectToTimeline(true)
    }

    if (redirectToTimeline) {
      return <Navigate to="/timeline" />;
    }

    return (
    <div>
        <div>
            {/* Components to handle user input through text boxes and an add post button*/}
            <h2>Edit your post</h2>
            <p>Post Title:</p>
            <input className='postTitleInput' type="text" value={inputPostTitle} onChange={(e) => setInputPostTitle(e.target.value)}/>
            <p>Post text:</p>
            <textarea rows="20" cols="100" className='postTextInput' type="text" value={inputPostText} onChange={(e) => setInputPostText(e.target.value)}/>
            <p/>
            <button className='confirmEditButton' onClick={() => handleUpdatePost()}>Edit Post</button>
            <button className='cancelEditButton' onClick={() => handleCancelUpdate()}>Cancel</button>
        </div>
  </div>
    );
}

export default EditPost;