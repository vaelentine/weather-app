import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './App'

// Really the only test you need here is the 'it renders correctly'
// test. Everything else should be tested in their component tests.

describe('App', () => {
  it('renders correctly', async () => {
    const component = render(<App />);
    expect(component.asFragment()).toMatchSnapshot();
  });
  // rm
  it('should render a search container', () => {
    const component = render(<App />);
    const searchContainer = component.queryByPlaceholderText('Enter City')
    expect(searchContainer).toBeInTheDocument()
  })
  // rm
  it('should render a footer', () => {
    render(<App />);
    const footer_component = document.querySelector('.Footer')
    expect(footer_component).not.toBeNull();
  })
})
