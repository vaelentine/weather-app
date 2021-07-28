import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render a search bar', () => {
    render(<App />);
    const search_bar = screen.getByPlaceholderText(/search/i) //should contain the word "search"
    expect(search_bar).toBeInTheDocument();
  })
  it('should render a search button labeled "Get Weather"', () => {
    render(<App />);
    const button = screen.getByText(/Get weather/i) 
    expect(button).toBeInTheDocument();
  })
})


