/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WeatherIcon from './WeatherIcon'
import mockWeather from '__mocks__/mockWeather'

describe('WeatherIcon', () => {
  it('renders correctly', () => {
    const iconProps:any = {
        iconCode: mockWeather.weather[0].icon,
        mainDescription: mockWeather.weather[0].main
    }
    const component = render(<WeatherIcon iconProps={ iconProps } />)
    expect(component.asFragment()).toMatchSnapshot()
  })
})
