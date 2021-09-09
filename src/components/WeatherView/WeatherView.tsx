import React from 'react'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import './WeatherView.css'

interface WeatherProps {
weatherData: any
}

const WeatherView: React.FC<WeatherProps> = ({ weatherData }) => {

    const handleChange = (event:any) => {
        weatherData.onChange(event.target.value)
    }
    // const iconProps = {
    //     iconCode={weatherData.weather[0].icon},
    //     mainDescription={weatherData.weather[0].main}
    // }
    console.log(weatherData)
  return (
         <div className="weatherContainer">

            <div className="weatherDisplay">
                <div className="weatherHeader">
                    <div className="cityName" onChange={handleChange}>
                        {weatherData.name}
                    </div>
                    <div className="timeStamp">
                        {weatherData.dt}
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
                    {/* <WeatherIcon iconProps={iconProps} /> */}
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
