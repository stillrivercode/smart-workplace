import React from 'react'

interface GreetingProps {
  message?: string;
}

function Greeting({ message = "Smart Workplace" }: GreetingProps): React.JSX.Element {
  return (
    <div className="greeting">
      <h1>{message}</h1>
    </div>
  );
}

export default Greeting;