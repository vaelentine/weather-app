/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Weatherview from './WeatherView'
import getWeather from 'api/getWeather'
import mockWeather from '__mocks__/mockWeather'

describe('WeatherView', () => {
  it('renders correctly', () => {
    const data = mockWeather
    const component = render(<Weatherview weatherData={ data }/>)
    expect(component.asFragment()).toMatchSnapshot()
  })
})
