import React, { useState, useEffect } from 'react';

function Settings() {
  const [backgroundColor, setBackgroundColor] = useState(document.documentElement.style.getPropertyValue('--main-color')); // Get the current background color
  const [secondaryColor, setSecondaryColor] = useState(document.documentElement.style.getPropertyValue('--secondary-color')); // Get the current secondary color
  const [majorFont, setMajorFont] = useState(document.documentElement.style.getPropertyValue('--major-font')); // Get the major font

  useEffect(() => {
    document.documentElement.style.setProperty('--main-color', backgroundColor)
    document.documentElement.style.setProperty('--secondary-color', secondaryColor)
    document.documentElement.style.setProperty('--major-font', majorFont)
  })

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleSecondaryColorChange = (event) => {
    setSecondaryColor(event.target.value);
  };

  const handleMajorFontChange = (font) => {
    setMajorFont(font);
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
      <p/>
      <label>
        Font style:
      </label>
      <input type="radio" id="majorFont" name="majorFont" style={{margin: '8px'}} value={majorFont} onChange={() => handleMajorFontChange('arial')}/>
      <label>Arial</label>
      <input type="radio" id="majorFont" name="majorFont" style={{margin: '8px'}} value={majorFont} onChange={() => handleMajorFontChange('Courier')}/>
      <label>Courier</label>
      <input type="radio" id="majorFont" name="majorFont" style={{margin: '8px'}} value={majorFont} onChange={() => handleMajorFontChange('calibri')}/>
      <label>Calibri</label>
      <input type="radio" id="majorFont" name="majorFont" style={{margin: '8px'}} value={majorFont} onChange={() => handleMajorFontChange('times')}/>
      <label>Times-Roman</label>
    </div>
  );
}

export default Settings;