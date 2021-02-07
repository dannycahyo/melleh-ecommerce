import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"
import { kMaxLength } from 'buffer';

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

test('Testing the whole application', () => {
  render(<App />);

  screen.debug(undefined,kMaxLength)
  
});
