import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function City({ cityListValue }) {

    const { id } = useParams();

    // Filter the list of cities on the id parameter passed from the URL
    let cityDetails = cityListValue.filter(city => city.id === id)
  
    // If a URL with a bad city ID is passed (typically by typing it directly into the address bar), this will redirect to the home page avoiding an application crash.
    if (cityDetails[0] === undefined) {
      return <Navigate to="/" />;
    }

    return (
      <div>
        <h2>{cityDetails[0].name} Details</h2>
        <p>Country: {cityDetails[0].country}</p>
        <p>Population: {cityDetails[0].population}</p>
      </div>
    );
}

export default City;