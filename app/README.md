# Smart Workplace React App

A modern React application built with TypeScript and Vite that displays a "Smart Workplace" greeting message. This app demonstrates modern React development practices and serves as a foundation for smart workplace applications.

## Features

- **Modern React**: Built with React 18+ and functional components
- **TypeScript**: Full TypeScript support with strict type checking
- **Vite**: Fast build tool with HMR (Hot Module Replacement)
- **Testing**: Comprehensive test suite with Vitest and React Testing Library
- **Styling**: Modern CSS with gradient backgrounds and glass-morphism effects
- **Linting**: ESLint configuration for code quality
- **Formatting**: Prettier for consistent code formatting

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the app directory:

   ```bash
   cd app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
app/
├── src/
│   ├── components/
│   │   ├── App.tsx           # Main application component
│   │   └── Greeting.tsx      # Generic greeting component
│   ├── test/
│   │   └── setup.ts          # Test configuration
│   ├── App.test.tsx          # App component tests
│   ├── Greeting.test.tsx     # Greeting component tests
│   ├── App.css               # Application styles
│   ├── index.css             # Global styles
│   ├── main.tsx              # Application entry point
│   ├── types.d.ts            # Type declarations
│   └── vite-env.d.ts         # Vite environment types
├── public/                   # Static assets
├── dist/                     # Build output
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # App-specific TypeScript config
├── tsconfig.test.json        # Test-specific TypeScript config
├── vite.config.ts            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── .prettierrc               # Prettier configuration
```

## Components

### App Component

The main application container that renders the Greeting component with a modern glass-morphism design.

### Greeting Component

A reusable component that displays a customizable greeting message. Defaults to "Smart Workplace" but accepts a custom message via props.

## Testing

The app includes comprehensive tests:

- **Unit Tests**: Individual component testing
- **Integration Tests**: Component interaction testing
- **Accessibility Tests**: ARIA compliance testing

Run tests with:

```bash
npm run test:run
```

## Styling

The app features modern CSS with:

- Gradient backgrounds
- Glass-morphism effects
- Responsive design
- Typography optimization
- Backdrop blur effects

## Development Notes

- Uses React 18+ with TypeScript for type safety
- Vite for fast development and building
- Vitest for testing with jsdom environment
- ESLint and Prettier for code quality
- Modern CSS techniques for visual appeal

## Future Enhancements

This foundation can be extended with:

- Smart workplace features (calendar integration, team collaboration, etc.)
- Additional UI components
- State management (Redux/Zustand)
- API integration
- Progressive Web App features
