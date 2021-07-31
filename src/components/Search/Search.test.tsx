import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('SearchForm', () => {

  it('should render a search bar', () => {
    render(<Search />);
    const search_bar = screen.getByPlaceholderText(/search/i) //should contain the word "search"
    expect(search_bar).toBeInTheDocument();
  })
  it('should render a search button labeled "Get Weather"', () => { 
    render(<Search />);
    const button = screen.getByText(/Get weather/i) 
    expect(button).toBeInTheDocument();
  })
//   it('should fire a request to open weather api when clicked', () => {
//     render(<SearchButton />)
//     const button = screen.getByText(/Get weather/i)
//     // const search_bar = screen.getByPlaceholderText(/search/i)
//     // fireEvent.change(search_bar, {target: {value: 'New York'}})
//     fireEvent.click(button)
//   })
})