import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import OpenWeatherHandler from '../../services/OpenWeatherHandler'
// import { mocked } from 'ts-jest/utils';


// write tests to mock user input and also mock the API call
// add an event listener/mock so that you can check that it's fired properly

// mock weather API
// jest.mock('api/weather', () => ({
//   getWeather: jest.fn(() => Promise.resolve(mockWeatherData)),
// }));

describe('SearchForm', () => {
  const weatherObject = new OpenWeatherHandler();
  it('should render a search bar', () => {
    render(<Search weatherObj={weatherObject}/>);
    const search_bar = screen.getByPlaceholderText(/city/i) //should contain the word "city"
    expect(search_bar).toBeInTheDocument();
  })
  it('should render a search button labeled "Find out"', () => { 
    render(<Search weatherObj={weatherObject}/>);
    const button = screen.getByText(/Find out/i) 
    expect(button).toBeInTheDocument();
  })

})