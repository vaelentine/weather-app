import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// This one is fine not to do a bunch of mocks for bc it 
// shouldn't actually be changing. try just a single render 
// with a snapshot inside

describe('Footer', () => {
  it('should contain author name', () => {
    render(<Footer />);
    const author = screen.getByText(/Maggie Geise/)
    expect(author).toBeInTheDocument();
  })
})