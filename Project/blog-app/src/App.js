import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Cities from './Cities';
import AddCities from './AddCities';
import City from './City';

function App () {
  // Stores the cities in an array
  const[cityListValue, setCityListValue] = useState([])
      
  // Increments city IDs as cities are added to the list
  const[cityIDCount, setCityIDCount] = useState(0)

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
              <NavLink to="/cities" activeClassName="active">Cities</NavLink>
            </li>
            <li>
              <NavLink to="/addCities" activeClassName="active">AddCities</NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cities" element={<Cities cityListValue={cityListValue} cityIDCount={cityIDCount}/>}>
                <Route path={"city/:id"} element={<City cityListValue={cityListValue}/>} />
            </Route>
            <Route path="addCities" element={<AddCities cityListValue={cityListValue} setCityListValue={setCityListValue} cityIDCount={cityIDCount} setCityIDCount={setCityIDCount}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;