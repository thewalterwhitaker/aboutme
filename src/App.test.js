import { render, screen } from '@testing-library/react';
import App from './App';
import '../node_modules/highlight.js/styles/monokai.css';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
