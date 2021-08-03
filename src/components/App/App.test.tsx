import App from './App'
import { render, screen } from '@testing-library/react';

describe('App', () => {
    it('should render a search container', () => {
      render(<App />);
      const search_container = document.querySelector('.SearchContainer')
      expect(search_container).not.toBeNull();
    })
    it('should render a weather container', () => {
      render(<App />);
      const weather_container = document.querySelector('.weatherContainer')
      expect(weather_container).not.toBeNull();
    })
    it('should render a footer', () => {
      render(<App />);
      const footer_component = document.querySelector('.Footer')
      expect(footer_component).not.toBeNull();
    })
  })
  