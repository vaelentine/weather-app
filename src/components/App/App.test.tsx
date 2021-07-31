import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render a search container', () => {
    render(<App />);
    const search_container = document.querySelector('#SearchContainer')
    expect(search_container).not.toBeNull();
  })
  it('should render a weather container', () => {
    const weather_container = document.querySelector('#WeatherContainer')
    expect(weather_container).not.toBeNull();
  })
  it('should render a footer', () => {
    const footer_component = document.querySelector('#Footer')
    expect(footer_component).not.toBeNull();
  })
})
