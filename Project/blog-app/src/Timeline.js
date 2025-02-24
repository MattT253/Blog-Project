import React, { useState } from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import Post from './Post';

function Timeline({ timelineValue, setTimelineValue }) {

  const [postIDtoEdit, setPostIDtoEdit] = useState(false);

  return (
    <div>
      <h2>Your Timeline</h2>
      <div>
	  	<div>
			{/* Use map to iterate over our array of posts and create a link to each, using their unique ids. */}
			<ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>{timelineValue.map((item) => (
			<li>
			  <Post post={item} timelineValue={timelineValue} setTimelineValue={setTimelineValue}/>
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