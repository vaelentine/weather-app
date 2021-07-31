import React, { useState } from "react";
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import OpenWeatherHandler from '../../services/OpenWeatherHandler'

interface WeatherProps {
    weatherObj: OpenWeatherHandler;
}

const WeatherView: React.FC<WeatherProps> = ({weatherObj}) => {
    console.log("rdy", weatherObj.ready)
    console.log({weatherObj})
    return (
         <div className="weatherContainer">

            {weatherObj.error && <div className="error">

                {weatherObj.invalidKey &&  <div className='invalidKey'>
                    <h1>Invalid API Key.</h1>
                </div>}
                
                {weatherObj.notFound && <div className='notFound'>
                    <h1>City not found.</h1>
                </div>}
            </div>}

            {<div className="weatherDisplay">
                <div className="weatherHeader">
                    <div className="cityName">
                        {weatherObj.cityName}
                    </div>
                    <div className="timeStamp">
                        {weatherObj.timeStamp}
                    </div>
                </div>

                <div className="icon">
                    <WeatherIcon iconCode={weatherObj.iconCode} mainDescription={weatherObj.mainDescription} />
                </div>

                <div className="weatherInfo">
                    <div>
                        {weatherObj.description}
                    </div>
                    <div>
                        current Temperature: {weatherObj.currentTemp}
                    </div>
                    <div>
                        min Temperature: {weatherObj.minTemp}
                    </div>
                    <div>
                        max Temperature: {weatherObj.maxTemp}
                    </div>
                </div>
            </div>}

         </div>
     ) 
}

export default WeatherView