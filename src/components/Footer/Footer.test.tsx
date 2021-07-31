import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should contain author name', () => {
    render(<Footer />);
    const author = screen.getByText(/Maggie Geise/)
    expect(author).toBeInTheDocument();
  })
})