import React, { useState } from 'react'
import './Search.css'
import getWeather from 'api/getWeather'

const Search = () => {
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
        onClick={ () => getWeather(city)}
      >
        Find out!
      </button>
    </div>
  )
}

export default Search
