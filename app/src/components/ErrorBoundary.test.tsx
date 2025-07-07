import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import ErrorBoundary from './ErrorBoundary'

// Component that throws an error for testing
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>No error</div>
}

test('renders children when there is no error', () => {
  render(
    <ErrorBoundary>
      <ThrowError shouldThrow={false} />
    </ErrorBoundary>
  )

  expect(screen.getByText('No error')).toBeInTheDocument()
})

test('displays error UI when there is an error', () => {
  // Suppress console.error for this test
  const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

  render(
    <ErrorBoundary>
      <ThrowError shouldThrow={true} />
    </ErrorBoundary>
  )

  expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  expect(screen.getByText("We're sorry, but something unexpected happened.")).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument()

  consoleSpy.mockRestore()
})

test('renders custom fallback component when provided', () => {
  const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

  const CustomFallback = ({ error }: { error?: Error }) => (
    <div>Custom error: {error?.message}</div>
  )

  render(
    <ErrorBoundary fallback={CustomFallback}>
      <ThrowError shouldThrow={true} />
    </ErrorBoundary>
  )

  expect(screen.getByText('Custom error: Test error')).toBeInTheDocument()

  consoleSpy.mockRestore()
})