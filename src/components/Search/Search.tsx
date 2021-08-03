import React, { useState } from 'react';
import OpenWeatherHandler from '../../services/OpenWeatherHandler'
import './Search.css'

interface WeatherProps {
    weatherObj: OpenWeatherHandler;
    weatherState: any;
}

const Search: React.FC<WeatherProps> = ({weatherObj, weatherState}) => {
    const [city, setCity] = useState('');
    return (
        <div className="SearchContainer">
            <input
                value={city}
                onChange={(event) => setCity(event.target.value)}
                type="text"
                placeholder="Enter City">
            </input>
            <button onClick={() => weatherObj.getWeather(city)} className="SearchButton">Find out!
            </button>
            {<div className="errorMessage">{weatherObj.errorMessage}</div>}
        </div>
    );
};

  export default Search;