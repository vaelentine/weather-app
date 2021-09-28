import React from 'react'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import getDateFromEpoch from 'services/TimeConversion'
import './WeatherView.css'

interface WeatherProps {
weatherData: any
}

const WeatherView: React.FC<WeatherProps> = ({ weatherData }) => {
    const handleChange = (event:any) => {
        weatherData.onChange(event.target.value)
    }
    const timeStamp: string = getDateFromEpoch(weatherData.dt) 
  return (
         <div className="weatherContainer">

            <div className="weatherDisplay">
                <div className="weatherHeader">
                    <div className="cityName" onChange={handleChange}>
                        {weatherData.name}
                    </div>
                    <div className="timeStamp">
                        {timeStamp}
                    </div>
                </div>
                        <div className="currentTemp">
                            {weatherData.main.temp}°F
                        </div>
                        <div className="minMaxTemps">
                            <div>
                                Low: {weatherData.temp_min}°F
                            </div>
                            <div>
                                High: {weatherData.temp_max}°F
                            </div>
                    </div>
                <div className="icon">
                    <WeatherIcon iconProps={weatherData.weather[0]} />
                </div>

                <div className="weatherInfo">

                    <div className='weatherDescription'>
                        {weatherData.weather[0].description}
                    </div>

                </div>
            </div>

         </div>
  )
}

export default WeatherView
