/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Message from './Message'
import { mockCityNotFound } from '__mocks__/mockCityNotFound'

describe('Search Component', () => {
  it('renders correctly', () => {
    const data = mockCityNotFound
    const component = render(<Message messageData={ data }/>)
    expect(component.asFragment()).toMatchSnapshot()
  })
  it('displays the message correctly', () => {
    const data = mockCityNotFound
    const component = render(<Message messageData={ data }/>)
    const errorMessage = component.getByText(/API Error/)
    const errorText = new RegExp(data.message)
    expect(errorMessage).toHaveTextContent(errorText)
  })
})
