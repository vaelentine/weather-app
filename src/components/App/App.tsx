import React from 'react';
import Search from '../Search/Search';
import WeatherView from '../WeatherView/WeatherView';
import OpenWeatherHandler from '../../services/OpenWeatherHandler'
import Footer from '../Footer/Footer';

function App() {
  const weatherObject = new OpenWeatherHandler();

  return (
    <div className="App">
      <Search weatherObj={weatherObject}/>
      <WeatherView weatherObj={weatherObject}/>
      <Footer />
    </div>
  );
}

export default App;
