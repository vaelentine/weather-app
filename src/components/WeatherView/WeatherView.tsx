import React from "react";
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import OpenWeatherHandler from '../../services/OpenWeatherHandler'
import './WeatherView.css'

interface WeatherProps {
    weatherObj: OpenWeatherHandler;
}

// I think that you should just call this one Weather as the 
// WeatherHandler wont have that name clash anymore.

const WeatherView: React.FC<WeatherProps> = ({weatherObj}) => {
    return (
         <div className="weatherContainer">



            {weatherObj.ready &&<div className="weatherDisplay">
                <div className="weatherHeader">
                    <div className="cityName">
                        {weatherObj.cityName}
                    </div>
                    <div className="timeStamp">
                        {weatherObj.timeStamp}
                    </div>
                </div>
                        <div className="currentTemp">
                            {weatherObj.currentTemp}°F
                        </div>
                        <div className="minMaxTemps">
                            <div>
                                Low: {weatherObj.minTemp}°F
                            </div>
                            <div>
                                High: {weatherObj.maxTemp}°F
                            </div>
                    </div>
                <div className="icon">
                    <WeatherIcon iconCode={weatherObj.iconCode} mainDescription={weatherObj.mainDescription} />
                </div>

                <div className="weatherInfo">
 

                    <div className='weatherDescription'>
                        {weatherObj.description}
                    </div>

                </div>
            </div>}

         </div>
     ) 
}

export default WeatherView