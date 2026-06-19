# Chatbot Customization Guide

## How the Rule-Based Chatbot Works

The chatbot uses a keyword matching system to understand user queries and provide appropriate responses. All logic is in `lib/chatbotAI.ts`.

## Adding New Responses

### Step 1: Open `lib/chatbotAI.ts`

### Step 2: Add Your Custom Logic

The `generateBotResponse()` function checks for keywords in the user message:

```typescript
export const generateBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase().trim();

  // Example: Add response for "emergency"
  if (message.includes('emergency')) {
    return `🆘 Emergency Contact: ${clinicData.emergency}`;
  }
  
  // Your custom responses...
};
```

## Knowledge Base Structure

All clinic data is stored in `data/clinicData.ts`:

```typescript
export const clinicData: ClinicData = {
  name: "Bright Smile Dental Clinic",
  services: [
    {
      id: "cleaning",
      name: "Teeth Cleaning",
      description: "Professional cleaning",
      price: "Rs. 2,000 - 3,500",
      duration: "30-45 minutes",
    },
    // Add more services...
  ],
  doctors: [
    {
      name: "Dr. Ahmed Khan",
      title: "Chief Dentist",
      experience: "10+ years",
      specialization: "General Dentistry",
    },
    // Add more doctors...
  ],
  // ... more fields
};
```

## Common Customization Tasks

### 1. Update Clinic Information

**File**: `data/clinicData.ts`

```typescript
export const clinicData: ClinicData = {
  name: "Your Clinic Name",
  location: "Your City, Country",
  phone: "+1-234-567-8900",
  whatsapp: "+1-234-567-8900",
  email: "your-email@clinic.com",
  website: "www.yourclinic.com",
  hours: {
    weekdays: "Mon-Fri: 9AM - 6PM",
    weekend: "Sat: 10AM - 4PM | Sun: Closed",
  },
};
```

### 2. Add New Services

**File**: `data/clinicData.ts`

```typescript
services: [
  {
    id: "consultation",
    name: "Dental Consultation",
    description: "Initial consultation with our dentists",
    price: "Rs. 1,000",
    duration: "30 minutes",
  },
  // ... existing services
];
```

### 3. Add New Doctor

**File**: `data/clinicData.ts`

```typescript
doctors: [
  {
    name: "Dr. Your Name",
    title: "Specialist",
    experience: "X+ years",
    specialization: "Your Specialty",
  },
  // ... existing doctors
];
```

### 4. Add New Chatbot Response

**File**: `lib/chatbotAI.ts`

```typescript
// Add after existing if statements
if (message.includes('your-keyword')) {
  return `Your response here with formatted text:
  📍 Detail 1: value
  📍 Detail 2: value`;
}
```

### 5. Update Landing Page Copy

**File**: `components/LandingPage.tsx`

Find and update text in components:
- `Header` - Navigation text
- `HeroSection` - Main headline and description
- `ServicesSection` - Service descriptions
- `TeamSection` - Team introduction
- `ContactSection` - Contact information
- `Footer` - Footer content

## Response Format Best Practices

### Use Emojis for Visual Appeal
```typescript
return `📍 Location: ${clinicData.location}`;
return `💬 WhatsApp: ${clinicData.whatsapp}`;
return `📞 Phone: ${clinicData.phone}`;
```

### Format with Line Breaks
```typescript
return `**Service Name**\n\nDescription\n\n💰 Price: value\n⏱️ Duration: value`;
```

### Add Call-to-Action
```typescript
return `${response}\n\nWould you like to book an appointment?`;
```

## Testing Your Changes

1. **Edit a file** (e.g., `data/clinicData.ts`)
2. **Save the file** - Next.js hot reload will update automatically
3. **Test in browser** - Refresh if needed, then interact with chatbot
4. **Check results** in the chat window

## Debugging Tips

### Check Browser Console
- Press `F12` to open developer tools
- Look for error messages in Console tab
- Check Network tab for any failed requests

### Add Console Logging
```typescript
export const generateBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase().trim();
  console.log('User message:', message); // Debug
  
  if (message.includes('keyword')) {
    console.log('Matched keyword'); // Debug
    return "Response";
  }
};
```

### Test Responsiveness
- Use Chrome DevTools (F12)
- Click device toolbar to test mobile/tablet
- Verify chat widget position on different screens

## Advanced Customization

### Change Theme Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    50: '#f0f9ff',    // Lightest
    100: '#e0f2fe',
    500: '#0ea5e9',   // Primary color
    600: '#0284c7',   // Hover color
    700: '#0369a1',   // Dark color
    900: '#0c3d66',   // Darkest
  },
},
```

### Modify Chat Window Appearance

**File**: `components/ChatWindow.tsx`

- Change colors in className properties
- Modify shadows: `shadow-lg`, `shadow-xl`
- Update rounded corners: `rounded-lg`, `rounded-xl`

### Add Animations

**File**: `app/globals.css`

```typescript
@keyframes yourAnimation {
  0% {
    /* start state */
  }
  100% {
    /* end state */
  }
}

.animate-your-animation {
  animation: yourAnimation 0.5s ease-in-out;
}
```

## Performance Optimization

### Reduce Bundle Size
- Keep chatbot AI logic simple
- Use TypeScript for type safety
- Minimize CSS

### Improve Load Time
- Clinic data is pre-loaded
- Chat window loads on-demand
- Next.js handles optimization automatically

## SEO Optimization

### Update Metadata

**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Clinic Name | AI Chatbot",
  description: "Your clinic description",
  keywords: "dental, clinic, chatbot, services",
};
```

### Add Schema Markup (Optional)

Add JSON-LD in `app/layout.tsx` for better search results.

## Troubleshooting Issues

### Chatbot Not Responding
1. Check browser console for errors (F12)
2. Verify `lib/chatbotAI.ts` syntax
3. Ensure keywords are in lowercase in the logic
4. Clear cache: `Ctrl+Shift+Delete` or `Cmd+Shift+Delete`

### Styling Not Applied
1. Save the file and wait for hot reload
2. Verify Tailwind CSS class names are correct
3. Clear `.next` folder and rebuild: `npm run build`

### Chat Widget Not Visible
1. Check z-index values in `components/ChatButton.tsx`
2. Verify component is imported in `app/page.tsx`
3. Check for CSS conflicts

## Next Steps

1. ✅ Update clinic information
2. ✅ Customize chatbot responses
3. ✅ Change theme colors
4. ✅ Add more services/doctors
5. ✅ Deploy to production
6. ✅ Monitor user interactions

---

**Happy customizing! 🎉**
