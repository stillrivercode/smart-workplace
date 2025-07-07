import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting', () => {
  test('renders default message correctly', () => {
    render(<Greeting />)
    const defaultMessage = screen.getByText('Smart Workplace')
    expect(defaultMessage).toBeInTheDocument()
  })

  test('renders custom message when provided', () => {
    const customMessage = 'Welcome to the Future'
    render(<Greeting message={customMessage} />)
    const messageElement = screen.getByText(customMessage)
    expect(messageElement).toBeInTheDocument()
  })

  test('has proper greeting container class', () => {
    const { container } = render(<Greeting />)
    const greetingDiv = container.querySelector('.greeting')
    expect(greetingDiv).toBeInTheDocument()
  })

  test('has proper accessibility attributes', () => {
    render(<Greeting />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Smart Workplace')
  })

  test('renders heading with correct structure', () => {
    render(<Greeting />)
    const heading = screen.getByRole('heading')
    expect(heading.tagName).toBe('H1')
  })
})
