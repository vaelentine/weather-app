import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from './Search';
import Weather from 'api/weather'
import mockWeather from 'tests/Weather'

const mockGetWeather = jest.fn(() => Promise.resolve(mockWeather))
jest.mock('api/weather', () => ({
  getWeather: mockGetWeather,
}));

// Note that it might be good to implement a loading state for the weather com

describe('Search Component', () => {
  it('renders correctly', () => {
    const component = render(<Search />);
    expect(component.asFragment()).toMatchSnapshot()
  })
  it('makes an API call when the button is clicked', async () => {
    const component = render(<Search />)
    // text input component by placeholder value
    const searchInput = component.getByPlaceholderText('enter city')
    fireEvent.input(searchInput, {target: {value:'Portland'}})
    const filledInput = component.getByText('Portland')
    expect(filledInput).toBeInTheDocument()

    const searchButton = component.getByText('Find out!')
    fireEvent.click(searchButton)
    // get mock api call 
    expect(mockGetWeather).toBeCalledTimes(1) //this could possibly fail due to lack of awaiting function return
  })
  it('displays error correctly', () => {
    //mock a return value for an error state
    mockGetWeather.mockReturnValueOnce({message:'API Error'}
    )
    const component = render(<Search />)
    const searchInput = component.getByPlaceholderText('enter city')
    fireEvent.input(searchInput, {target: {value:'NotARealCityName'}})
    const filledInput = component.getByText('NotARealCityName')
    expect(filledInput).toBeInTheDocument()
    
    const searchButton = component.getByText('Find out!')
    fireEvent.click(searchButton)
    // get mock api call 
    expect(mockGetWeather).toBeCalledTimes(1)
    expect(component.getByText('API Error')).toBeInTheDocument()
  })
})