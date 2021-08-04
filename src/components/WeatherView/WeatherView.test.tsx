

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import WeatherView from './WeatherView'
import mockWeatherObj from '../../mocks/data/weatherView'

// check that it renders with mock data
// check that is displays what you want it to display before API call
// and also when errors com back from the API

// I skipped them for now pending refactor

describe('WeatherView', () => {
  it.skip('renders correctly', async () => {
    const component = render(<WeatherView />);
    expect(component.asFragment()).toMatchSnapshot();
  });
  it.skip('should render a search container', () => {
    const component = render(<WeatherView />);
    const searchContainer = component.queryByPlaceholderText('Enter City')
    expect(searchContainer).toBeInTheDocument()
  })
  it.skip('should render a footer', () => {
    render(<WeatherView />);
    const footer_component = document.querySelector('.Footer')
    expect(footer_component).not.toBeNull();
  })
})
