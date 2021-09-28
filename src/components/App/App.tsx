import React, { useState } from 'react'
import Search from '../Search/Search'
import WeatherView from '../WeatherView/WeatherView'
import Message from 'components/Message/Message'
import Footer from '../Footer/Footer'
import './App.css'
import getWeather from 'api/getWeather'

function App() {
  const [weatherResponse, setWeatherResponse]:any = useState(null) //add geoloc

  function handleChange(newValue:any) {
    setWeatherResponse(newValue)
  }
  const missingApiKey: boolean = process.env.REACT_APP_WEATHER_API_KEY === undefined
  return (
    <div className="appContainer">
      { missingApiKey && <div className="missingKey"> <p>Warning: It looks like your API key isn't configured. </p>
      <p>Review the readme file for instructions to set one up.</p></div>}
      <div className="App">
        <div className="Header">What's the weather in ...</div>
        <Search setWeatherData={handleChange}/>
        {weatherResponse && (
          weatherResponse.cod === 200
            ? (<WeatherView weatherData={weatherResponse}/>)
            : (
            <Message messageData={weatherResponse}/>
              )
        )}

        <Footer />
      </div>
    </div>
  )
}

export default App
