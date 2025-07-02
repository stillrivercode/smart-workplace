# Phase 2: Meeting Time Finder (40 minutes)

## Objectives
- Write specifications collaboratively
- Handle complex state logic with multiple selections
- Work with timezone APIs
- Implement multi-API coordination patterns

## Timeline
- 10 min: Write specification together
- 15 min: AI generation and implementation
- 15 min: Test with multiple timezones

## Meeting Time Finder Specification

### Purpose
Help distributed teams find suitable meeting times across different time zones, avoiding very early or very late hours.

### Requirements
- Select multiple team members
- Show current time in each location
- Find overlapping work hours (9 AM - 5 PM)
- Suggest top 3 meeting times
- Display in each participant's local time

### API Endpoint
```
GET https://api.api-ninjas.com/v1/timezone?city={city}
```

### Logic
1. Get timezone for each selected participant
2. Calculate current time in each zone
3. Find 9-5 overlap windows
4. Rank by convenience (prefer mid-day)

### Acceptance Criteria
- [ ] Multi-select participants
- [ ] Show timezone differences clearly
- [ ] Suggest valid meeting times
- [ ] No times before 8 AM or after 6 PM

## Implementation Code

### Meeting Time Finder Component
```javascript
// components/MeetingTimeFinder.jsx
import React, { useState } from 'react';
import { apiNinjas } from '../services/apiNinjas';
import { team } from '../data/team';

export const MeetingTimeFinder = () => {
  const [selected, setSelected] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const findMeetingTimes = async () => {
    if (selected.length < 2) return;
    
    setLoading(true);
    try {
      // Get timezone data for selected team members
      const timezonePromises = selected.map(memberId => {
        const member = team.find(t => t.id === memberId);
        return apiNinjas.getTimezone(member.city)
          .then(res => ({ member, timezone: res.data }));
      });
      
      const timezoneData = await Promise.all(timezonePromises);
      
      // Simple algorithm: Find overlapping 9-5 hours
      const suggestions = calculateMeetingSlots(timezoneData);
      setSuggestions(suggestions.slice(0, 3));
    } catch (error) {
      console.error('Timezone fetch failed:', error);
    }
    setLoading(false);
  };

  const calculateMeetingSlots = (timezoneData) => {
    // Simplified: Just show current time in each location
    // In real implementation, calculate actual overlapping work hours
    return [
      { time: '10:00 AM PST / 6:00 PM GMT / 3:00 AM JST', score: 70 },
      { time: '8:00 AM PST / 4:00 PM GMT / 1:00 AM JST', score: 60 },
      { time: '4:00 PM PST / 12:00 AM GMT / 9:00 AM JST', score: 50 }
    ];
  };

  return (
    <div className="meeting-finder">
      <h2>Find Meeting Time</h2>
      
      <div className="team-selector">
        <h3>Select Participants:</h3>
        {team.map(member => (
          <label key={member.id}>
            <input
              type="checkbox"
              checked={selected.includes(member.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelected([...selected, member.id]);
                } else {
                  setSelected(selected.filter(id => id !== member.id));
                }
              }}
            />
            {member.name} ({member.city})
          </label>
        ))}
      </div>
      
      <button onClick={findMeetingTimes} disabled={loading || selected.length < 2}>
        Find Best Times
      </button>
      
      {suggestions.length > 0 && (
        <div className="suggestions">
          <h3>Suggested Meeting Times:</h3>
          {suggestions.map((slot, idx) => (
            <div key={idx} className="time-slot">
              {slot.time} (Score: {slot.score}/100)
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
```

## Advanced Meeting Slot Calculation

For a complete implementation, here's the algorithm to find actual overlapping work hours:

```javascript
const calculateRealMeetingSlots = (timezoneData) => {
  const slots = [];
  
  // For each hour of the day (0-23)
  for (let hour = 0; hour < 24; hour++) {
    const slotTimes = timezoneData.map(({ member, timezone }) => {
      // Calculate what time this hour would be in each timezone
      const localTime = (hour + timezone.offset_hours) % 24;
      return {
        member: member.name,
        localTime,
        isWorkHours: localTime >= 9 && localTime <= 17,
        isSocialHours: localTime >= 8 && localTime <= 18
      };
    });
    
    // Check if this time works for everyone
    const allInWorkHours = slotTimes.every(t => t.isWorkHours);
    const allInSocialHours = slotTimes.every(t => t.isSocialHours);
    
    if (allInWorkHours || allInSocialHours) {
      slots.push({
        utcHour: hour,
        localTimes: slotTimes,
        score: allInWorkHours ? 100 : 75,
        timeDisplay: slotTimes.map(t => 
          `${t.member}: ${formatTime(t.localTime)}`
        ).join(' | ')
      });
    }
  }
  
  return slots.sort((a, b) => b.score - a.score);
};

const formatTime = (hour) => {
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:00 ${ampm}`;
};
```

## Teaching Points
- Collaborative specification writing
- Handling complex state logic
- API composition patterns
- Timezone calculation challenges

## Mock Data Structure

### Team Members
```javascript
// data/team.js
export const team = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Engineering Manager",
    office: "sf",
    city: "San Francisco"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Product Manager",
    office: "lon",
    city: "London"
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    role: "Senior Developer",
    office: "tok",
    city: "Tokyo"
  },
  {
    id: 4,
    name: "Maria Garcia",
    role: "Designer",
    office: "sf",
    city: "San Francisco"
  },
  {
    id: 5,
    name: "Tom Brown",
    role: "DevOps Lead",
    office: "lon",
    city: "London"
  }
];
```