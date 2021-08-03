import React from "react";
import './WeatherIcon.css'


interface WeatherIconProps {
    iconCode: string;
    mainDescription: string;
}

const weatherIconURL: string = `https://openweathermap.org/img/wn/`

const WeatherIcon: React.FC<WeatherIconProps> = ({iconCode, mainDescription}) => {

    return (
        <div className='weatherIcon'>
            <img src={`${weatherIconURL}${(iconCode)}.png`} alt={mainDescription} className='iconImage'></img>
        </div>
    );
    
}

export default WeatherIcon
