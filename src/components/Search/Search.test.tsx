import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import OpenWeatherHandler from '../../services/OpenWeatherHandler'

describe('SearchForm', () => {
  const weatherObject = new OpenWeatherHandler();
  it('should render a search bar', () => {
    render(<Search weatherObj={weatherObject}/>);
    const search_bar = screen.getByPlaceholderText(/search/i) //should contain the word "search"
    expect(search_bar).toBeInTheDocument();
  })
  it('should render a search button labeled "Get Weather"', () => { 
    render(<Search weatherObj={weatherObject}/>);
    const button = screen.getByText(/Get weather/i) 
    expect(button).toBeInTheDocument();
  })
})