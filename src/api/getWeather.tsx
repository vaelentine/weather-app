import axios from 'axios'

require('dotenv').config()

const getWeather = async (city: string) => {
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
}
export default getWeather
