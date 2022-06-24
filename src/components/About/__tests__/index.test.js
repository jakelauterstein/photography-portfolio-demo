import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  // First Test
    it('renders', () => {
        render(<About />);
    });

  // Second Test
    it('matches snapshot DOM node structure', () => {
    // render About
    //asFragment returns a snapshot of the about component
    // a snapshot is a serialized version fo the DOM node structure, enabled by Jest
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
    })
})
