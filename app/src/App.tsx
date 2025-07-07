import React from 'react'
import Greeting from './Greeting'
import ErrorBoundary from './components/ErrorBoundary'

function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <div className="app">
        <Greeting />
      </div>
    </ErrorBoundary>
  )
}

export default App
