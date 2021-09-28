import React from 'react'
import './WeatherIcon.css'

interface iconProps {
  iconProps:any
}
const WeatherIcon:React.FC<iconProps> = ({ iconProps }) => {
  const weatherIconURL = "https://openweathermap.org/img/wn/";
  const srcUrl = `${weatherIconURL}${iconProps.icon}@2x.png`
  return (
    <div className="weatherIcon">
      <img className="iconImage" src={srcUrl} alt={iconProps.main}/>
    </div>
  )
}

export default WeatherIcon
