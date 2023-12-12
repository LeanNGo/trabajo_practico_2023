import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, expect } from 'vitest';

describe('App', () => {
  it('should renders component', () => {
    const component = render(<App />);
    expect (component).toBeDefined();
  });
});