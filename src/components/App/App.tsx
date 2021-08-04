import React, { useState } from 'react';
import Search from '../Search/Search';
import WeatherView from '../WeatherView/WeatherView';
import OpenWeatherHandler from '../../services/OpenWeatherHandler'
import Footer from '../Footer/Footer';
import './App.css';

// i think that it would be better to make the App only contain the 
// functional components of the app. 
// Eventually something like the following.
//     return (
//       <Main>
//         <Header />
//           <Weather> // This component can be the state that the weather data lives in
//             <Search /> // can take a setState function as props so it can pass weather data from the API to the Parent Component
//             <Display /> // can take weather data as props and render it
//           <Weather />
//         <Footer />
//       </Main>
//     )

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
        <WeatherView weatherObj={weatherObject}/>
        <Footer />
      </div>
    </div>

  );
}

export default App;
