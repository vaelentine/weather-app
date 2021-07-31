import React, { useState } from 'react';
import OpenWeatherHandler from '../../services/OpenWeatherHandler'

interface WeatherProps {
    weatherObj: OpenWeatherHandler;
}

const Search: React.FC<WeatherProps> = ({weatherObj}) => {
    const [city, setCity] = useState('');
    return (
        <div className="SearchContainer">
            <input
                value={city}
                onChange={(event) => setCity(event.target.value)}
                type="text"
                placeholder="Enter City and State">
            </input>
            <button onClick={() => weatherObj.getWeather(city)} className="SearchButton">Get weather
            </button>
        </div>
    );
};

  export default Search;