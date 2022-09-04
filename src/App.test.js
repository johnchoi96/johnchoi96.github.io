import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders About', () => {
  render(<App />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders My Workspace', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Workspace/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders LinkedIn', () => {
  render(<App />);
  const linkElement = screen.getByText(/LinkedIn/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders ORCID', () => {
  render(<App />);
  const linkElement = screen.getByText(/ORCID/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Resume', () => {
  render(<App />);
  const linkElement = screen.getByText(/Resume/i);
  expect(linkElement).toBeInTheDocument();
});
