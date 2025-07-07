# Smart Workplace Dashboard Workshop

A streamlined workshop teaching Document Driven Development (DDD) through building a Smart Workplace Dashboard. Participants create three focused widgets that help HR teams and office managers monitor workplace conditions and optimize employee experience using API Ninjas and mock data.

## Workshop Overview

### Learning Objectives
By the end of this 2-hour workshop, participants will:
- Write effective DDD specifications for dashboard components
- Generate React components using AI agents
- Integrate multiple API Ninjas endpoints
- Handle asynchronous data and error states
- Measure productivity improvements with AI-driven development

### What We'll Build
A focused dashboard with three core widgets:
- **Office Weather Monitor** - Current conditions and commute impact
- **Meeting Time Finder** - Cross-timezone meeting scheduler
- **Office Pulse** - Simple wellness and utilization metrics

### Technical Requirements
- Node.js and npm installed
- API Ninjas free account
- Code editor (VS Code)
- Chrome browser
- Access to Claude

## 🚀 Workshop Setup

### Prerequisites Setup

```bash
# Clone the workshop repository
git clone https://github.com/stillrivercode/smart-workplace.git
cd smart-workplace

# Run the installation script
./install.sh

# Copy environment template
cp .env.example .env
```

### API Ninjas Setup

1. Create a free account at [API Ninjas](https://api.api-ninjas.com/)
2. Get your API key from the dashboard
3. Add it to your `.env` file:
   ```bash
   API_NINJAS_KEY=your-api-key-here
   ```

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
3. **API Integration**: Connect to API Ninjas endpoints
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

### API Documentation
- [API Ninjas Weather](https://api.api-ninjas.com/v1/weather)
- [API Ninjas World Time](https://api.api-ninjas.com/v1/worldtime)
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
| API key not working | Verify key at [API Ninjas](https://api.api-ninjas.com/) |
| CORS errors | Use development proxy in package.json |
| Component not rendering | Check browser console for errors |

### Getting Help

- Raise your hand during the workshop
- Check the troubleshooting guide in `/docs/`
- Ask questions in the workshop chat

## 📄 License

MIT License - free for educational and commercial use.
