import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import AboutPage from './components/pages/AboutPage'

describe('Header Button Rendering', () => {
  test('renders Home', () => {
    render(<App />)
    const linkElement = screen.getByText(/Home/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('renders About', () => {
    render(<App />)
    const linkElement = screen.getByText(/About/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('renders My Workspace', () => {
    render(<App />)
    const linkElement = screen.getByText(/My Workspace/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('renders LinkedIn', () => {
    render(<App />)
    const linkElement = screen.getByText(/LinkedIn/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('renders ORCID', () => {
    render(<App />)
    const linkElement = screen.getByText(/ORCID/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('renders Resume', () => {
    render(<App />)
    const linkElement = screen.getByText(/Resume/i)
    expect(linkElement).toBeInTheDocument()
  })
})

describe('Clicking on Header components that leads to subpages', () => {
  test('renders Homepage', () => {
    render(<App />)
    const heading = screen.getByRole('heading', {name: 'John Choi'})
    expect(heading).toBeInTheDocument()
  })
})
