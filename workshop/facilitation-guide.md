# Workshop Facilitation Guide

## Pre-Workshop Preparation (30 minutes)

### Instructor Setup Checklist
- [ ] Test internet connection and backup hotspot
- [ ] Verify API Ninjas account and rate limits
- [ ] Clone and test the workshop repository
- [ ] Prepare backup mock data responses
- [ ] Set up screen sharing and recording
- [ ] Test AI tools (Claude, ChatGPT, etc.)

### Technical Verification
```bash
# Instructor prep commands
git clone https://github.com/stillriver/workplace-dashboard-starter
cd workplace-dashboard-starter
npm install

# Verify API key works
echo "REACT_APP_API_NINJAS_KEY=your_key" > .env
npm start

# Test all three API endpoints
curl -H "X-Api-Key: YOUR_KEY" "https://api.api-ninjas.com/v1/weather?city=San Francisco"
curl -H "X-Api-Key: YOUR_KEY" "https://api.api-ninjas.com/v1/timezone?city=London"
curl -H "X-Api-Key: YOUR_KEY" "https://api.api-ninjas.com/v1/airquality?city=Tokyo"
```

### Participant Pre-Check (15 minutes before start)
Send participants this checklist:
- [ ] Node.js installed (version 14+)
- [ ] npm working (`npm --version`)
- [ ] Code editor ready (VS Code recommended)
- [ ] Chrome browser open
- [ ] API Ninjas account created
- [ ] Workshop repository cloned

## Workshop Timing & Flow

### Opening (5 minutes)
- Welcome and introductions
- Workshop objectives overview
- Technical setup verification
- Ground rules for AI usage

### Phase 1: Weather Widget (30 minutes)

#### Minutes 0-5: Setup
**Instructor Actions:**
- Guide API key configuration
- Verify everyone can run `npm start`
- Address any setup issues quickly

**Key Teaching Points:**
- Environment variables in React
- API key security practices
- Development vs production configs

#### Minutes 5-10: Specification Review
**Instructor Actions:**
- Present weather widget specification
- Explain DDD principles
- Show how specs translate to code

**Participant Activity:**
- Read through specification together
- Ask clarifying questions
- Identify potential edge cases

#### Minutes 10-20: AI Generation
**Instructor Actions:**
- Demonstrate AI prompt crafting
- Show iterative refinement process
- Guide participants through generation

**AI Prompt Template:**
```
I need to create a React component based on this specification:
[paste specification]

Please generate a complete React component that:
1. Uses hooks for state management
2. Handles loading and error states
3. Follows React best practices
4. Includes PropTypes or TypeScript
```

**Key Teaching Points:**
- Specification clarity improves AI output
- Iterative refinement is normal
- AI generates boilerplate, humans add logic

#### Minutes 20-30: Integration & Testing
**Instructor Actions:**
- Help debug API integration issues
- Show error handling patterns
- Demonstrate testing approaches

**Common Issues to Address:**
- CORS errors (shouldn't happen with API Ninjas)
- API key configuration problems
- State update timing issues
- Async/await confusion

### Phase 2: Meeting Time Finder (40 minutes)

#### Minutes 0-10: Collaborative Specification
**Instructor Actions:**
- Lead group specification writing
- Capture requirements on shared screen
- Discuss edge cases and assumptions

**Facilitation Technique:**
1. Start with user stories: "As a distributed team member, I want..."
2. Break down into functional requirements
3. Identify API needs and data flow
4. Define success criteria together

**Key Teaching Points:**
- Collaborative specification improves buy-in
- Multiple perspectives catch edge cases
- Clear acceptance criteria prevent scope creep

#### Minutes 10-25: Implementation
**Instructor Actions:**
- Support multiple AI tools (Claude, ChatGPT, etc.)
- Help with complex state management
- Guide API composition patterns

**Advanced Concepts to Cover:**
- Multiple API coordination
- Promise.all() for parallel requests
- State management for selections
- Timezone calculation complexity

#### Minutes 25-40: Testing & Refinement
**Instructor Actions:**
- Test with different timezone combinations
- Verify edge cases (no overlapping hours)
- Demonstrate debugging techniques

**Testing Scenarios:**
- 2 participants from same timezone
- 3 participants from different continents
- Participants with different work hours
- API failure scenarios

### Phase 3: Office Pulse (40 minutes)

#### Minutes 0-10: Complex Specification
**Instructor Actions:**
- Introduce composite widget concepts
- Explain data aggregation requirements
- Discuss performance considerations

**Key Teaching Points:**
- Multiple data sources require coordination
- Calculated fields vs raw API data
- Error handling for partial failures
- User experience during loading

#### Minutes 10-30: Advanced Implementation
**Instructor Actions:**
- Help with Promise.all() patterns
- Guide data transformation logic
- Support complex state management

**Advanced Patterns:**
- Parallel API requests with error handling
- Data transformation pipelines
- Calculated metrics and scoring
- Visual status indicators

#### Minutes 30-40: Polish & Performance
**Instructor Actions:**
- Add loading states and error boundaries
- Implement caching for better UX
- Optimize re-render behavior

**Performance Topics:**
- Memoization with useMemo/useCallback
- API request debouncing
- Efficient state updates
- Component optimization

### Phase 4: Wrap-up (10 minutes)

#### Achievements Review (3 minutes)
**Instructor Actions:**
- Showcase participant widgets
- Highlight unique implementations
- Celebrate successful integrations

#### Productivity Measurement (3 minutes)
**Metrics to Collect:**
- Time to first working widget
- Lines of AI-generated vs manual code
- Number of iterations required
- Confidence levels before/after

#### Real-world Discussion (2 minutes)
**Discussion Points:**
- How would you use this at work?
- What other widgets would be valuable?
- What challenges do you anticipate?

#### Next Steps & Resources (2 minutes)
**Provide:**
- GitHub repository access
- Community links
- Extension challenge ideas
- Office hours schedule

## Teaching Strategies

### Handling Different Skill Levels
**For Beginners:**
- Pair with intermediate participants
- Provide more detailed explanations
- Focus on core concepts over advanced patterns

**For Advanced Participants:**
- Encourage helping others
- Introduce optimization challenges
- Discuss architectural decisions

### Managing AI Tool Variations
**Claude Users:**
- Show artifact generation features
- Demonstrate iterative refinement
- Use conversation history effectively

**ChatGPT Users:**
- Help with prompt engineering
- Show code interpretation features
- Demonstrate debugging assistance

**Other AI Tools:**
- Adapt prompts to tool capabilities
- Maintain specification-first approach
- Focus on iteration and refinement

### Common Facilitation Challenges

#### Issue: Participants stuck on setup
**Solution:**
- Have pre-configured starter projects ready
- Use screen sharing for troubleshooting
- Designate advanced participants as helpers

#### Issue: API rate limiting
**Solution:**
- Have mock data responses ready
- Share a demo API key for workshop use
- Teach graceful degradation patterns

#### Issue: AI generates poor code
**Solution:**
- Show iterative improvement techniques
- Demonstrate prompt refinement
- Emphasize specification quality importance

#### Issue: Different completion speeds
**Solution:**
- Prepare extension challenges
- Encourage peer assistance
- Have advanced examples ready

## Success Metrics & Feedback

### Real-time Assessment
**During Workshop:**
- Monitor completion rates per phase
- Note common stumbling points
- Adjust pacing based on group progress

**Quick Polls:**
- "How confident do you feel about DDD?" (1-5 scale)
- "Would you use AI for development?" (Yes/No/Maybe)
- "Which part was most valuable?" (Multiple choice)

### Post-Workshop Follow-up
**Immediate (Day of):**
- Send completion certificates
- Share repository access
- Provide community invitations

**1 Week Later:**
- Check on extension implementations
- Gather detailed feedback
- Offer individual office hours

**1 Month Later:**
- Survey real-world applications
- Collect success stories
- Plan advanced workshops

## Backup Plans

### Technical Difficulties
**Internet Issues:**
- Have offline capable examples
- Use local mock data exclusively
- Continue with local development

**API Problems:**
- Switch to mock data mode
- Focus on UI/UX implementation
- Simulate API responses

**AI Tool Problems:**
- Have pre-generated components ready
- Focus on specification writing
- Manual coding with instructor guidance

### Time Management
**Running Behind:**
- Skip advanced features
- Focus on core functionality
- Extend wrap-up to next session

**Finishing Early:**
- Introduce bonus challenges
- Deep dive into advanced patterns
- Extended Q&A and discussion

## Materials Checklist

### Digital Assets
- [ ] Workshop slides
- [ ] Live coding environment
- [ ] Backup code examples
- [ ] Mock data responses
- [ ] Participant feedback forms

### Physical Setup
- [ ] Reliable internet connection
- [ ] Backup connectivity (hotspot)
- [ ] Screen sharing capability
- [ ] Audio/video quality check
- [ ] Comfortable teaching environment

### Post-Workshop
- [ ] Repository access permissions
- [ ] Community platform invitations
- [ ] Extension challenge documents
- [ ] Contact information for questions
- [ ] Certificate templates

## Continuous Improvement

### After Each Workshop
- Document what went well
- Note areas for improvement
- Update timing estimates
- Refine teaching materials

### Participant Feedback Integration
- Adjust pacing based on feedback
- Add requested topics
- Remove confusing elements
- Enhance successful patterns

### Content Evolution
- Keep up with AI tool updates
- Refresh API examples
- Add new widget types
- Update best practices

This facilitation guide ensures consistent, high-quality workshop delivery while maintaining flexibility for different audiences and technical environments.