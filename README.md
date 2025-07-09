# Smart Workplace Dashboard Workshop

A streamlined workshop teaching Document Driven Development (DDD) through building a Smart Workplace Dashboard. Participants create three focused widgets that help HR teams and office managers monitor workplace conditions and optimize employee experience using api.stillriver.info and mock data.

## Workshop Overview

### Learning Objectives
By the end of this 2-hour workshop, participants will:
- Write effective DDD specifications for dashboard components
- Generate React components using AI agents
- Integrate multiple API endpoints via api.stillriver.info
- Handle asynchronous data and error states
- Measure productivity improvements with AI-driven development

### What We'll Build
A focused dashboard with three core widgets:
- **Office Weather Monitor** - Current conditions and commute impact
- **Meeting Time Finder** - Cross-timezone meeting scheduler
- **Office Pulse** - Simple wellness and utilization metrics

### Technical Requirements
- Node.js and npm installed
- Internet access (uses Stillriver API proxy)
- Code editor (VS Code)
- Chrome browser
- Access to Claude

## 🚀 Quick Start for Workshop Participants

### Step 1: Get the Code
```bash
# Clone the workshop repository
git clone https://github.com/stillrivercode/smart-workplace.git
cd smart-workplace

# Install dependencies
npm install
```

### Step 2: Start Development
```bash
# Start the development server
cd app
npm install
npm start
```

Your workshop environment is now ready! The app will open at `http://localhost:3000`.

### API Setup - Already Done! ✅
This workshop uses **Stillriver API** (api.stillriver.info) as a proxy for API Ninjas endpoints. **No API keys or registration required** - everything works out of the box for workshop participants.

## 🎯 Workshop Structure

### Module 1: Document Driven Development Fundamentals
- Creating effective specifications
- Component requirement documentation
- API integration planning

### Module 2: Building the Weather Widget
- Weather API integration
- Real-time data handling
- Error state management

### Module 3: Meeting Time Finder
- Timezone handling
- Multi-API coordination
- User interaction patterns

### Module 4: Office Pulse Dashboard
- Mock data integration
- Dashboard composition
- Performance optimization

## 📋 Workshop Flow

1. **Specification Writing**: Create detailed component specifications
2. **AI Implementation**: Use Claude to generate React components
3. **API Integration**: Connect to Stillriver API proxy endpoints
4. **Testing & Refinement**: Validate functionality and user experience
5. **Performance Review**: Measure AI-assisted development efficiency

## 🛠️ Development Tools

### Available Scripts

```bash
# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Lint code
npm run lint

# Format code
npm run format
```

### Code Quality

The project includes pre-configured linting and formatting tools:
- **ESLint** for JavaScript/React code quality
- **Prettier** for consistent code formatting
- **Pre-commit hooks** for automated quality checks

## 📚 Resources

### API Information
- **Stillriver API**: api.stillriver.info - Workshop proxy for API Ninjas endpoints (no auth required)
- **Available Endpoints**: `/v1/weather`, `/v1/timezone`, `/v1/airquality`
- [React Documentation](https://react.dev/)

### Workshop Materials
- **Detailed module guides** in `/workshop/` directory:
  - [Phase 1: Setup & Weather Widget](workshop/01-setup-and-weather-widget.md)
  - [Phase 2: Meeting Time Finder](workshop/02-meeting-time-finder.md)
  - [Phase 3: Office Pulse Dashboard](workshop/03-office-pulse-dashboard.md)
  - [Phase 4: Wrap-up & Resources](workshop/04-wrap-up-and-resources.md)
- **Setup guides**:
  - [Mock Data Setup](workshop/mock-data-setup.md)
  - [Facilitation Guide](workshop/facilitation-guide.md)

## 🆘 Support

### Common Issues

| Issue | Solution |
|-------|----------|
| API connection issues | Verify internet connection to api.stillriver.info |
| CORS errors | Use development proxy in package.json |
| Component not rendering | Check browser console for errors |

### Getting Help

- Raise your hand during the workshop
- Check the troubleshooting guide in `/docs/`
- Ask questions in the workshop chat

## 📄 License

MIT License - free for educational and commercial use.
