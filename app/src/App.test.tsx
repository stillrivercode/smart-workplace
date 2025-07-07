import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />)
  })

  test('contains Greeting component', () => {
    render(<App />)
    const greeting = screen.getByText('Smart Workplace')
    expect(greeting).toBeInTheDocument()
  })

  test('has proper app container class', () => {
    const { container } = render(<App />)
    const appDiv = container.querySelector('.app')
    expect(appDiv).toBeInTheDocument()
  })
})
