import axios from 'axios'
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });
// require('dotenv').config()

const getWeather = async (city: string) => {
  try {
    const server = 'openweathermap.org/'
    const weatherEndpoint = 'data/2.5/weather'
    const keyParam = `appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    const response = await axios.get(
        `https://api.${server}
              ${weatherEndpoint}
              ?${keyParam}
              &q=${city}
              &units=imperial`
    )
    return response
  } catch (error:any) {
    return error.response.data
  }
}

export default getWeather
