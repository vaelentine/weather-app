import axios from 'axios';
import getDateFromEpoch from './TimeConversion';
import React, { useState } from 'react';

require('dotenv').config()

class OpenWeatherHandler  {
    server: string;
    weatherURI: string;
    apiKey: string | undefined;
    keyParam: string;
    responseCode: number;
    ready: boolean;
    cityName: string;
    timeStamp: string;
    iconCode: string;
    mainDescription: string;
    description: string;
    currentTemp: string;
    minTemp: string;
    maxTemp: string;
    error: boolean;
    setState: any;

    constructor() {
        this.error = false;
        this.iconCode = '';
        this.mainDescription = '';
        this.description = '';
        this.currentTemp = '';
        this.minTemp = '';
        this.maxTemp = '';
        this.timeStamp = '';
        this.cityName = '';
        this.responseCode = 0;
        this.ready = false;
        this.server = 'openweathermap.org/';
        this.weatherURI = 'data/2.5/weather';
        this.apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        this.keyParam = 'appid=' + this.apiKey;
    }

    async getWeather(city: string) {
        const response = await axios(`https://api.${this.server}${this.weatherURI}?${this.keyParam}&q=${city}&units=imperial`);
        this.responseCode = response.data.cod;
        this.cityName = response.data.name;
        this.timeStamp = getDateFromEpoch(response.data.dt);
        this.iconCode = response.data.weather[0].icon;
        this.mainDescription = response.data.weather[0].main;
        this.description = response.data.weather[0].description;
        this.currentTemp = response.data.main.temp;
        this.minTemp = response.data.main.temp_min;
        this.maxTemp = response.data.main.temp_max;
        this.ready = true;
        this.setState('ready') 
    }

    get invalidKey(): Boolean { 
        return this.responseCode === 401
    }

    get notFound(): Boolean {
        return this.responseCode === 404
    }

    get errorState(): Boolean {
        return this.responseCode !== 200
    }

    assignState(state: any) {
        this.setState = state
    }
}

export default OpenWeatherHandler