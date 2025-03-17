import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Timeline from './Timeline';
import AddPost from './AddPost';
import Settings from './Settings';
import EditPost from './EditPost';
/* import Post from './Post'; */

function App () {
  // Stores the post in an array called timeline
  const[timelineValue, setTimelineValue] = useState([])

  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <ul>
            {/* Use NavLink to keep track of active tab*/}
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/timeline" activeClassName="active">Timeline</NavLink>
            </li>
            <li>
              <NavLink to="/addPost" activeClassName="active">New Post</NavLink>
            </li>
            <li style={{ float: 'right' }}>
              <NavLink to="/settings" activeClassName="active">Settings</NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="timeline" element={<Timeline timelineValue={timelineValue} setTimelineValue={setTimelineValue}/>}>
                {/* <Route path={"post/:id"} element={<Post timelineValue={timelineValue}/>} /> */}
            </Route>
            <Route path="addPost" element={<AddPost/>} />
            <Route path={"editPost/:id"} element={<EditPost timelineValue={timelineValue}/>} />
            <Route path="settings" element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;