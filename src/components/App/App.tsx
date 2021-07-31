import React, { useState } from 'react';
import Search from '../Search/Search';
import WeatherView from '../WeatherView/WeatherView';
import OpenWeatherHandler from '../../services/OpenWeatherHandler'
import Footer from '../Footer/Footer';

const weatherObject = new OpenWeatherHandler();

function App() {
  const [ weatherState, setWeatherState  ] = useState('')
  weatherObject.assignState(setWeatherState);
  return (
    <div className="App">
      <Search weatherObj={weatherObject}/>
      <WeatherView weatherObj={weatherObject} weatherState={weatherState}/>
      <Footer />
    </div>
  );
}

export default App;
