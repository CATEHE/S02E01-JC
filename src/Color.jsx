import React, { useState } from 'react';
import './color.css'

function BackgroundColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState();

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <div className='contenedor_color'>
      <button className='c1' onClick={() => changeBackgroundColor('#ff0000')}> 🔴 </button>
      <button className='c2' onClick={() => changeBackgroundColor('#00ff00')}> 🟢 </button>
      <button className='c3' onClick={() => changeBackgroundColor('#0000ff')}> 🔵 </button>
      <button className='c4' onClick={() => changeBackgroundColor('#ffffff')}> ⚪️ </button>
    </div>
  );
}

export default BackgroundColorChanger;
