import React, { useState, useEffect } from 'react';

function Settings() {
  const [backgroundColor, setBackgroundColor] = useState(document.documentElement.style.getPropertyValue('--main-color')); // Get the current background color
  const [secondaryColor, setSecondaryColor] = useState(document.documentElement.style.getPropertyValue('--secondary-color')); // Get the current secondary color

  useEffect(() => {
    document.documentElement.style.setProperty('--main-color', backgroundColor)
    document.documentElement.style.setProperty('--secondary-color', secondaryColor)
  })

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleSecondaryColorChange = (event) => {
    setSecondaryColor(event.target.value);
  };

  return (
    <div>
      <h2>Settings:</h2>
      <label>
        Background Color:
      </label>
      <input type="color" id="backgroundColor" style={{margin: '8px'}} value={backgroundColor} onChange={handleBackgroundColorChange}/>
      <p/>
      <label>
        Navigation Bar Color:
      </label>
      <input type="color" id="secondaryColor" style={{margin: '8px'}} value={secondaryColor} onChange={handleSecondaryColorChange}/>
    </div>
  );
}

export default Settings;