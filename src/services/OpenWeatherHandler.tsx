import React from 'react';
import axios from 'axios';
import getDateFromEpoch from './TimeConversion';

require('dotenv').config()

// This probably shouldn't be a class component
// split it up into an api call and all the parsing 
// that it does can be done in state by the components that use it.
// its kinda an advanced move but i can show you how to make this into a 
// hook if you prefer

class OpenWeatherHandler  {
    server: string;
    weatherURI: string;
    apiKey: string | undefined;
    keyParam: string;
    responseCode: string;
    ready: boolean;
    cityName: string;
    timeStamp: string;
    iconCode: string;
    mainDescription: string;
    description: string;
    currentTemp: string;
    minTemp: string;
    maxTemp: string;
    setState: any;
    errorMessage: string;

    constructor() {
        this.errorMessage = '';
        this.iconCode = '';
        this.mainDescription = '';
        this.description = '';
        this.currentTemp = '';
        this.minTemp = '';
        this.maxTemp = '';
        this.timeStamp = '';
        this.cityName = '';
        this.responseCode = '';
        this.ready = false;
        this.server = 'openweathermap.org/';
        this.weatherURI = 'data/2.5/weather';
        this.apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        this.keyParam = 'appid=' + this.apiKey;
    }

    async getWeather(city: string) {
        try {
        this.errorMessage = '';
        const response = await axios(`https://api.${this.server}${this.weatherURI}?${this.keyParam}&q=${city}&units=imperial`);

        this.responseCode = response.data.cod;
        this.setResponseValues(response)
        }
        catch(error) {
        this.ready = false;
        this.responseCode = error.response.data.cod.toString(); //stringify response due to bug with 401 in upstream api
        this.errorMessage = this.lookupError()
        }
        const d = (Date.now());
        this.setState(d)    
    }
    
    lookupError() {
        switch (this.responseCode) 
        {
            case "404":
                return 'City not found. Enter a valid city name.';
            case "400":
                return 'No value entered. Enter a city name.';
            case "401":
                return 'Invalid API key';
            case "500":
                return 'Network error.';
        }
        return `Http response ${this.responseCode}: unknown error`
    }

    setResponseValues(response: any) {
        this.cityName = response.data.name;
        this.timeStamp = getDateFromEpoch(response.data.dt);
        this.iconCode = response.data.weather[0].icon;
        this.mainDescription = response.data.weather[0].main;
        this.description = response.data.weather[0].description;
        this.currentTemp = response.data.main.temp;
        this.minTemp = response.data.main.temp_min;
        this.maxTemp = response.data.main.temp_max;
        this.ready = true;
    }


    assignState(state: any) {
        this.setState = state
    }
}

export default OpenWeatherHandler