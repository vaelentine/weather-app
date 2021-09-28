/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Search from './Search'
import axios from 'axios'
import getWeather from 'api/getWeather'
import mockWeather from '__mocks__/mockWeather'

jest.mock('axios')

describe('Search Component', () => {
  it('renders correctly', () => {
    const component = render(<Search />)
    expect(component.asFragment()).toMatchSnapshot()
  })

  it('accepts an input value', () => {
    const component = render(<Search />)
    // text input component by placeholder value
    const searchInput = component.getByPlaceholderText('Enter city')
    fireEvent.input(searchInput, { target: { value: 'Portland' } })
    expect(searchInput.value).toBe('Portland')
  })

  it('makes an API call when the button is clicked', async () => {
    const component = render(<Search />)
    const searchInput = component.getByPlaceholderText('Enter city')
    fireEvent.input(searchInput, { target: { value: 'Portland' } })
    axios.get.mockImplementation(() => Promise.resolve(mockWeather))
    const searchButton = component.getByText('Find out!')
    fireEvent.click(searchButton)
    // get mock api call
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

  it.skip('displays error correctly', () => {
    // mock a return value for an error state
    mockGetWeather.mockReturnValueOnce({ message: 'API Error' })
    const component = render(<Search />)
    const searchInput = component.getByPlaceholderText('Enter city')
    fireEvent.input(searchInput, { target: { value: 'NotARealCityName' } })
    const filledInput = component.getByText('NotARealCityName')
    expect(filledInput).toBeInTheDocument()

    const searchButton = component.getByText('Find out!')
    fireEvent.click(searchButton)
    // get mock api call
    expect(mockGetWeather).toBeCalledTimes(1)
    expect(component.getByText('API Error')).toBeInTheDocument()
  })
})
 