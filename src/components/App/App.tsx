import React, { useState } from 'react';
import Search from '../Search/Search';
import WeatherView from '../WeatherView/WeatherView';
import OpenWeatherHandler from '../../services/OpenWeatherHandler'
import Footer from '../Footer/Footer';
import './App.css';

const weatherObject = new OpenWeatherHandler();
const missingApiKey: boolean = weatherObject.apiKey ===  undefined;

function App() {
  const [ weatherState, setWeatherState  ] = useState('')
  weatherObject.assignState(setWeatherState);
  return (
    <div className="appContainer">
      { missingApiKey && <div className="missingKey"> <p>Warning: It looks like your API key isn't configured. </p>
      <p>Review the read me file for instructions to set one up.</p></div>}
      <div className="App">
        <div className="Header">
        What's the weather in ...
        </div>
        <Search weatherObj={weatherObject} weatherState={weatherState}/>
        <WeatherView weatherObj={weatherObject} weatherState={weatherState}/>
        <Footer />
      </div>
    </div>

  );
}

export default App;
