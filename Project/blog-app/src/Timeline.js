import React, { useState , useEffect} from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import Post from './Post';

function Timeline({ timelineValue, setTimelineValue }) {

// This method fetches the posts from the database.
  useEffect(() => {
    async function getRecords() {
	  const response = await fetch(`https://ideal-cod-x649qjqpx7vh6g7p-5050.app.github.dev/record`);

	  if (!response.ok) {
	  const message = `An error occurred: ${response.statusText}`;
	  window.alert(message);
	  return;
	  }

	  const retrieved_posts = await response.json();
	  setTimelineValue(retrieved_posts);
    }

    getRecords();

	return;
  }, [timelineValue.length]);

  return (
    <div>
      <h2>Your Timeline</h2>
      <div>
	  	<div>
			{/* Use map to iterate over our array of posts and create a link to each, using their unique ids. */}
			<ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>{timelineValue.map((item) => (
			<li>
			  <Post post={item}/>
			</li>
			)
			)}</ul>
		</div>
      </div>
    </div>
  );
}

export default Timeline;

/*
<Link to={"/timeline/post/"+ item.id}>
<div className='postCard'>
<h2>{item.postTitle}</h2>
<p>{item.postText}</p>
</div>
</Link> 
*/