const mockWeather =
  {
    coord: {
      lon: -122.6762,
      lat: 45.5234
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01n'
      }
    ],
    base: 'stations',
    main: {
      temp: 291.01,
      feels_like: 290.26,
      temp_min: 286.82,
      temp_max: 293.11,
      pressure: 1013,
      humidity: 54
    },
    visibility: 10000,
    wind: {
      speed: 0.89,
      deg: 313,
      gust: 4.02
    },
    clouds: {
      all: 1
    },
    dt: 1630560308,
    sys: {
      type: 2,
      id: 2008548,
      country: 'US',
      sunrise: 1630503161,
      sunset: 1630550935
    },
    timezone: -25200,
    id: 5746545,
    name: 'Portland',
    cod: 200
  }

export default mockWeather
