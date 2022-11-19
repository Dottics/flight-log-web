import React from 'react';
import { render } from './test/test-utils'
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  expect(getByText(/dash/i)).toBeInTheDocument();
});
