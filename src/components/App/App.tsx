import React, { useState } from 'react'
import Search from '../Search/Search'
import WeatherView from '../WeatherView/WeatherView'
import Message from 'components/Message/Message'
import Footer from '../Footer/Footer'
import './App.css'

function App() {
  const [weatherResponse, setWeatherResponse] = useState(null)
  const handleResponse = (response:any|null) => {setWeatherResponse(response)}
  const missingApiKey: boolean = process.env.REACT_APP_WEATHER_API_KEY === null
  return (
    <div className="appContainer">
      { missingApiKey && <div className="missingKey"> <p>Warning: It looks like your API key isn't configured. </p>
      <p>Review the readme file for instructions to set one up.</p></div>}
      <div className="App">
        <div className="Header">What's the weather in ...</div>
        <Search response={weatherResponse} onChange={handleResponse}/>
        {weatherResponse && (
          console.log(weatherResponse)
          // weatherResponse.cod === 200
          //   ? (<WeatherView weatherData={weatherResponse}/>)
          //   : (
          //   <Message messageData={weatherResponse}/>
          //     )
        )
        }

        <Footer />
      </div>
    </div>
  )
}

export default App
