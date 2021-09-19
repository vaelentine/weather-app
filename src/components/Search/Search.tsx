import React, { useState } from 'react'
import './Search.css'
import getWeather from 'api/getWeather'
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });


const Search = (props:any) => {
  async function handleClick() {
    const result = await getWeather(city);
    props.setWeatherData(result.data)
  }
  const [city, setCity] = useState('')

  return (
    <div className="Search">
      <input
      placeholder="Enter city"
      value={city}
      onChange={(event) => setCity(event.target.value)}
      type="text"
      >
      </input>
      <button
        className="SearchButton"
        onClick={handleClick}
       
      >
        Find out!
      </button>
    </div>
  )
 
}

export default Search
