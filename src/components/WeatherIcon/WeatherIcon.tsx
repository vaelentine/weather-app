import React from "react";



interface WeatherIconProps {
    iconCode: string;
    mainDescription: string;
}

const weatherIconURL: string = `https://openweathermap.org/img/wn/`

const WeatherIcon: React.FC<WeatherIconProps> = ({iconCode, mainDescription}) => {

    return (
        <div>
            <img src={`${weatherIconURL}(iconCode).png`} alt={mainDescription}></img>
        </div>
    );
    
}

export default WeatherIcon
