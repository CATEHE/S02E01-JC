import { useState, useEffect } from 'react'
import './assets/helpers/iconos.js'
import { conditionCodes, icons } from './assets/helpers/iconos.js'
import axios from 'axios'
import Card from './Card.jsx'
import Color from './Color.jsx'

const key = 'b345c1a1371f6ac66cd19b2aab990aa5'
const url = 'https://api.openweathermap.org/data/2.5/weather'


const initialState = {
  latitude: 0,
  longitude: 0
}

function App() {

  const [coords, setCoords] = useState(initialState)
  const [weather, setWeather] = useState({})

  useEffect(() => {
    console.log(navigator.geolocation.getCurrentPosition((position) => { 
      const { latitude, longitude } = position.coords
      setCoords({ latitude, longitude })
    }, (error) => {
      console.log('No aceptaste la ubicación')
    }))
  }, [])

  useEffect (() => {
    if (coords) {
      axios.get(`${url}?lat=${coords.latitude}&lon=${coords.longitude}&appid=${key}`)
        .then (res => {
          const keys = Object.keys(conditionCodes)
          const iconName = keys.find(key => conditionCodes[key].includes(res.data?.weather[0]?.id))
          setWeather ({
            city: res.data?.name,
            country: res.data?.sys?.country,
            icon: icons[iconName],
            main: res.data?.weather[0]?.main, 
            wind: res.data?.wind?.speed, 
            clouds: res.data?.clouds?.all, 
            pressure: res.data?.main?.pressure,
            temperature: parseInt(res.data?.main?.temp - 273.15)
            })
          }).catch(err => {
            console.log(err)
          })
      }
    }, [coords])
  

  return (
    <>
     <Color /> 
     <Card 
        city={weather.city}
        country={weather.country} 
        icon={weather.icon} 
        main={weather.main} 
        wind={weather.wind} 
        clouds={weather.clouds} 
        pressure={weather.pressure} 
        temperature={weather.temperature} 
      />  
    </>
    )
  }


export default App
