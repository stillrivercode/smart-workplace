# Security Best Practices

## API Key Management

### ❌ **NEVER Do This (Insecure)**
```javascript
// DON'T: Exposing API keys in React environment variables
const API_KEY = process.env.REACT_APP_API_NINJAS_KEY; // ❌ EXPOSED IN CLIENT BUNDLE
```

**Why this is dangerous:**
- Environment variables with `REACT_APP_` prefix are embedded in the client bundle
- Anyone can view your API key by inspecting the website source
- API quotas can be exhausted by unauthorized users
- Credentials are visible in GitHub if accidentally committed

### ✅ **Secure Approach (Recommended)**
```javascript
// DO: Use backend proxy to keep API keys secure
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // ✅ SAFE TO EXPOSE
```

**Security benefits:**
- API keys remain on the server side only
- Client only knows the backend URL (safe to expose)
- Rate limiting and access control possible on backend
- Credentials never exposed to end users

## Architecture

```
┌─────────────────┐    HTTP     ┌─────────────────┐    HTTPS    ┌─────────────────┐
│   React App     │────────────▶│   Backend API   │────────────▶│   API Ninjas    │
│  (Public Client)│             │  (Secure Server)│             │  (External API) │
│                 │             │                 │             │                 │
│ No API keys     │             │ Contains API    │             │ Receives        │
│ stored here     │             │ keys securely   │             │ authenticated   │
│                 │             │                 │             │ requests        │
└─────────────────┘             └─────────────────┘             └─────────────────┘
```

## Environment Variable Guidelines

### Backend Server (api/.env)
```bash
# ✅ SECURE: Server-side only, never exposed to client
API_NINJAS_KEY=your-actual-api-key-here
PORT=3001
```

### React App (app/.env)
```bash
# ✅ SAFE: Public configuration, OK to expose
REACT_APP_API_BASE_URL=http://localhost:3001
```

### Root Project (.env)
```bash
# ✅ SECURE: GitHub workflow variables, not exposed to client
OPENROUTER_API_KEY=sk-or-your-api-key-here
GH_PAT=your-github-token-here
```

## Additional Security Measures

### Rate Limiting
The backend proxy can implement rate limiting to prevent abuse:
```javascript
// Example: Express rate limiting
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

### Request Validation
Validate and sanitize all inputs:
```javascript
// Example: Input validation
app.get('/api/weather', (req, res) => {
  const { city } = req.query;
  
  if (!city || typeof city !== 'string' || city.length > 100) {
    return res.status(400).json({ error: 'Invalid city parameter' });
  }
  
  // Continue with validated input...
});
```

### Error Handling
Don't expose sensitive information in error messages:
```javascript
// Good: Generic error message
res.status(500).json({ error: 'Failed to fetch weather data' });

// Bad: Exposes internal details
res.status(500).json({ error: error.message, stack: error.stack });
```

## Deployment Considerations

### Production Environment Variables
- Use your hosting provider's secure environment variable system
- Never commit `.env` files to version control
- Use different API keys for development and production
- Implement proper CORS configuration for production domains

### HTTPS Requirements
- Always use HTTPS in production
- Set secure headers for API responses
- Implement proper CORS policies

## Workshop Security Benefits

By implementing this secure architecture, workshop participants learn:
1. **Industry best practices** for API key management
2. **Client-server security boundaries**
3. **Professional development patterns**
4. **Preventing common security vulnerabilities**

This approach mirrors real-world production applications and teaches secure development from the start.