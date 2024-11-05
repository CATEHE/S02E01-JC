
import React, { useState } from 'react'

function Card({ city, country, icon, main, wind, clouds, pressure, temperature }) {
  
  const [toggle, setToggle] = useState(false)
  const temp = toggle ? parseInt((temperature * 9 / 5) + 32) : temperature;

  return (
    <div className='card'>
      <h1 className='card__title'>Weather App</h1>
      <h2 className='card__subtitle'>{city}, {country}</h2> 
      <div className='card__body'>
        <img src={icon} alt={main} width={80} />
        <div className="card__info">
          <h3 className="card__main">"{main}"</h3>
          <p className='card__wind-speed'>Wind speed: <strong>{wind}</strong> m/s</p>
          <p className='card__clouds'>Clouds: <strong>{clouds}</strong> %</p>
          <p className='card__pressure'>Pressure: <strong>{pressure}</strong> hPa</p>
        </div>
      </div>
      
      <h2 className='card__temperature'>{temp} {toggle ? '°F' : '°C'}</h2>
      <button onClick={() => setToggle(!toggle)}>
        Change to {!toggle ? 'ºF' : '°C'}
      </button>
    </div>
  )
}

export default Card
