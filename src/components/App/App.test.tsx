import React from 'react'
import App from './App'
import { render } from '@testing-library/react'

describe('App', () => {
  it('should render without crashing', () => {
    const component = render(<App />)
    expect(component.asFragment()).toMatchSnapshot()
  })
})
