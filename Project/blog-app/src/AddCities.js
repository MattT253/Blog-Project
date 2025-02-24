import React, { useState } from 'react';
  
function AddCities ({ cityListValue, setCityListValue, cityIDCount, setCityIDCount }) {
      // Stores the city name in text input
      const[inputName, setInputName] = useState('')

      // Stores the city home country in text input
      const[inputCountry, setInputCountry] = useState('')

      // Stores the city population in text input
      const[inputPopulation, setInputPopulation] = useState('')
    
      // Transfer the text in the input field into a new task and give it a unique ID.
      const handleCityListAdd = () => {
        setCityListValue([...cityListValue, {id: String(cityIDCount), name: inputName, country: inputCountry, population: inputPopulation}])
        setCityIDCount(cityIDCount + 1)
      }

    return (
    <div>
        <div>
            {/* Components to handle user input through text boxes and an add city button*/}
            <h2>Add Cities here</h2>
            <p>City name:</p>
            <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
            <p>City home country:</p>
            <input type="text" value={inputCountry} onChange={(e) => setInputCountry(e.target.value)}/>
            <p>City population:</p>
            <input type="text" value={inputPopulation} onChange={(e) => setInputPopulation(e.target.value)}/>
            <button onClick={() => handleCityListAdd()}>Add City</button>
        </div>
  </div>
    );
}

export default AddCities;