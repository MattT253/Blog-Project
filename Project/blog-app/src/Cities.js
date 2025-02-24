import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Cities({ cityListValue, cityIDCount }) {

  return (
    <div>
      <h2>Here are some cities</h2>
      <div>
	  	<div>
			{/* Use map to iterate over our array of city items and create a link to each, using their unique ids. */}
			<ul style={{ listStyleType: "none" }}>{cityListValue.map((item) => (
			<li>
			  <Link to={"/cities/city/"+ item.id}>
				{item.name}
			  </Link>
			</li>
			)
			)}</ul>
		</div>
		<Outlet />
      </div>
    </div>
  );
}

export default Cities;