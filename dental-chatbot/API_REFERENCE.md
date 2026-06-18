# Widget System API Reference

## 🔗 Available Endpoints

### Complete Architecture

The widget system supports **multi-tenant deployment** with backend API integration:

### How It Works

```
User Input (Chat Window)
    ↓
generateBotResponse() [lib/chatbotAI.ts]
    ↓
Matches keywords against user message
    ↓
Returns formatted response from clinicData
    ↓
Display in chat window
```

### No External Dependencies
- ✅ No API calls
- ✅ No backend server
- ✅ No database queries
- ✅ No external services
- ✅ Everything runs in browser

---

## API Specification (Rule-Based System)

### Core Functions

#### `generateBotResponse(userMessage: string): string`

Processes user input and returns chatbot response.

**Parameters:**
- `userMessage` (string): Raw user input

**Returns:**
- (string): Formatted bot response

**Examples:**
```typescript
// Example 1
generateBotResponse("What services do you offer?")
// Returns: List of all services

// Example 2
generateBotResponse("How much does teeth cleaning cost?")
// Returns: Teeth cleaning details with price

// Example 3
generateBotResponse("Unknown question")
// Returns: Fallback response with contact info
```

#### `simulateBotResponse(userMessage: string): Promise<string>`

Async version with simulated network delay.

**Parameters:**
- `userMessage` (string): Raw user input

**Returns:**
- `Promise<string>`: Response after 500-1000ms delay

**Usage in Chatbot:**
```typescript
const botResponseText = await simulateBotResponse(userMessage);
```

---

## Response Categories

### 1. Services Inquiry
**Triggers:**
- "What services do you offer?"
- "Tell me about treatments"
- "What's available?"

**Response:**
- List of all 6 services
- Service descriptions

### 2. Specific Service Details
**Triggers:**
- "Teeth cleaning" → Returns cleaning details
- "Braces" → Returns orthodontic info
- "Whitening" → Returns whitening info
- "Root canal" → Returns root canal info
- "Implants" → Returns implant info
- "Extraction" → Returns extraction info

**Response Format:**
```
**Service Name**

Description

📍 Price: Range
⏱️ Duration: Time needed

Would you like to book?
```

### 3. Pricing
**Triggers:**
- "How much does it cost?"
- "What are the prices?"
- "Price list"

**Response:**
- All services with prices
- Note about varying costs

### 4. Hours/Timing
**Triggers:**
- "When are you open?"
- "What are your hours?"
- "Timings?"

**Response:**
```
📍 Clinic Hours

Weekdays info
Weekend info

🆘 Emergency info
```

### 5. Location
**Triggers:**
- "Where are you located?"
- "What's your address?"

**Response:**
- Full address
- Phone number
- Email
- WhatsApp

### 6. Appointment Booking
**Triggers:**
- "How do I book an appointment?"
- "Schedule a visit"
- "Reserve a slot"

**Response:**
- 3 ways to book (WhatsApp, Call, Email)
- Available hours

### 7. Doctor Information
**Triggers:**
- "Tell me about your doctors"
- "Who's the dentist?"

**Response:**
- All 3 doctors
- Name, title, experience, specialty

### 8. About Clinic
**Triggers:**
- "Tell me about the clinic"
- "About your company"

**Response:**
- Clinic name
- Tagline
- Description
- Contact info

### 9. Emergency
**Triggers:**
- "Is there emergency service?"
- "Emergency?"

**Response:**
- 24/7 emergency info
- Contact number

### 10. Greetings
**Triggers:**
- "Hi", "Hello", "Hey"

**Response:**
- Welcome message
- List of what bot can help with

### 11. Fallback
**Triggers:**
- Any unmatched query

**Response:**
- "I'm not sure about that"
- Contact information
- List of what bot can help with

---

## Data Structures

### ChatMessage Interface
```typescript
interface ChatMessage {
  id: string;           // Unique identifier
  text: string;         // Message content
  sender: 'user' | 'bot'; // Who sent it
  timestamp: Date;      // When sent
}
```

### Service Interface
```typescript
interface Service {
  id: string;           // Unique ID (e.g., "cleaning")
  name: string;         // Display name
  description: string;  // What it is
  price: string;        // Price range
  duration: string;     // How long it takes
}
```

### DoctorInfo Interface
```typescript
interface DoctorInfo {
  name: string;           // Doctor's name
  title: string;          // Position (Chief Dentist, etc.)
  experience: string;     // Years of experience
  specialization: string; // Specialty area
}
```

### ClinicData Interface
```typescript
interface ClinicData {
  name: string;           // Clinic name
  tagline: string;        // Tagline
  description: string;    // Full description
  location: string;       // Address
  phone: string;          // Phone number
  whatsapp: string;       // WhatsApp number
  email: string;          // Email address
  website: string;        // Website URL
  hours: {
    weekdays: string;     // Weekday hours
    weekend: string;      // Weekend hours
  };
  services: Service[];    // Array of services
  doctors: DoctorInfo[];  // Array of doctors
  emergency: string;      // Emergency contact
}
```

---

## Future Extensions

### 1. Add Database Integration

**Goal**: Replace mock data with real data

**Steps:**
1. Add API route: `app/api/clinic/route.ts`
2. Query database in API
3. Fetch data on component mount
4. Update chatbot to use fetched data

**Example:**
```typescript
// app/api/clinic/route.ts
export async function GET() {
  const data = await db.query('SELECT * FROM clinic');
  return Response.json(data);
}

// In Chatbot component
const data = await fetch('/api/clinic').then(r => r.json());
```

### 2. Integrate Real AI/LLM

**Goal**: Replace rule-based with AI model

**Options:**
- OpenAI API (GPT-4)
- Claude API
- Google PaLM
- Local LLM

**Example with OpenAI:**
```typescript
import OpenAI from 'openai';

export async function generateBotResponse(userMessage: string) {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await client.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a dental clinic assistant' },
      { role: 'user', content: userMessage },
    ],
  });

  return response.choices[0].message.content;
}
```

### 3. Add Appointment Booking

**Goal**: Actual appointment scheduling

**Steps:**
1. Add calendar integration
2. Create booking API
3. Send confirmation email
4. Store in database

**Example Flow:**
```
User: "I want to book Tuesday at 2PM"
Bot: "Which service? (Select from list)"
User: "Teeth cleaning"
Bot: "With which doctor?"
User: "Dr. Ahmed"
Bot: "Confirmed! Booking for Tuesday..."
```

### 4. Multi-Language Support

**Goal**: Support multiple languages

**Steps:**
1. Add i18n library (next-i18n-router)
2. Create language files (en.json, ur.json, etc.)
3. Add language switcher
4. Translate all text

**Example:**
```typescript
import { useTranslation } from 'next-i18n-router';

const { t } = useTranslation('en');
return <h1>{t('welcome')}</h1>;
```

### 5. Add Email Notifications

**Goal**: Send confirmations and reminders

**Options:**
- Resend.dev
- SendGrid
- Mailgun
- AWS SES

**Example:**
```typescript
// app/api/email/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, subject, message } = await request.json();
  
  await resend.emails.send({
    from: 'noreply@brightsmile.pk',
    to: email,
    subject,
    html: message,
  });
  
  return Response.json({ success: true });
}
```

### 6. Add Analytics

**Goal**: Track user behavior

**Options:**
- Google Analytics
- Mixpanel
- Amplitude
- Sentry

**Example:**
```typescript
// Track chatbot usage
gtag.event('chatbot_message', {
  query_type: 'services',
  response_time: 150,
});
```

### 7. Add User Accounts

**Goal**: Personalized experience

**Implementation:**
1. Add authentication (NextAuth.js)
2. Store user preferences
3. Track appointment history
4. Personalized recommendations

### 8. Add Payment Processing

**Goal**: Online payments

**Options:**
- Stripe
- PayPal
- Jazz Cash
- Easypay

---

## Environment Variables

### Current
None needed (everything client-side)

### Future (if adding features)

```env
# Database
DATABASE_URL=postgres://...

# APIs
OPENAI_API_KEY=sk-...
STRIPE_SECRET_KEY=sk_...
SENDGRID_API_KEY=SG.xxxxx

# Email
RESEND_API_KEY=re_xxxxx

# Auth
NEXTAUTH_SECRET=random-secret-key
NEXTAUTH_URL=https://yoursite.com

# Analytics
GOOGLE_ANALYTICS_ID=G-xxxxx
```

---

## Error Handling

### Current Implementation
```typescript
try {
  const response = await simulateBotResponse(userMessage);
  setMessages(prev => [...prev, botMessage]);
} catch (error) {
  console.error('Error:', error);
  showErrorMessage('Sorry, something went wrong');
}
```

### Future Best Practices
```typescript
try {
  // ...
} catch (error) {
  if (error instanceof NetworkError) {
    // Handle network issues
  } else if (error instanceof ValidationError) {
    // Handle validation
  } else {
    // Handle unexpected errors
    Sentry.captureException(error);
  }
}
```

---

## Performance Considerations

### Current
- ✅ No API calls (fast)
- ✅ Small bundle size (~100KB)
- ✅ Instant responses (simulated)

### After Adding Features
- Monitor bundle size with `npm run build`
- Use code splitting for large features
- Cache API responses
- Implement request debouncing

---

## Security Best Practices

### Never Commit
- API keys
- Database credentials
- Authentication tokens
- Sensitive configuration

### Use
- Environment variables
- `.env.local` for local development
- Platform secrets for production

### Example
```typescript
// ❌ Never do this
const API_KEY = 'sk-xxx';

// ✅ Always do this
const API_KEY = process.env.OPENAI_API_KEY;
```

---

## Testing

### Current Manual Testing
- Load app in browser
- Test chatbot responses
- Verify on mobile
- Check animations

### After Adding Features

**Unit Tests:**
```typescript
// __tests__/chatbotAI.test.ts
import { generateBotResponse } from '@/lib/chatbotAI';

test('returns services on service query', () => {
  const response = generateBotResponse('What services?');
  expect(response).toContain('Teeth Cleaning');
});
```

**Integration Tests:**
```typescript
// __tests__/chatbot.integration.test.ts
test('full chat flow works', async () => {
  // Test complete user journey
});
```

---

## Monitoring & Logging

### Browser Console
- Check for errors: Press F12
- Monitor chatbot responses
- Verify component renders

### Future Logging
```typescript
// log.ts
export const logEvent = (event: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${event}]`, data);
  }
  // Send to logging service in production
  sendToLogService(event, data);
};
```

---

## Version History

### v1.0.0 (Current)
- ✅ Rule-based chatbot
- ✅ 6 dental services
- ✅ 3 doctor profiles
- ✅ Responsive design
- ✅ Floating chat widget
- ✅ Mobile optimized

### v2.0.0 (Planned)
- Database integration
- Real appointment booking
- Email confirmations
- Multi-language support
- Analytics

### v3.0.0 (Future)
- AI-powered responses
- User accounts
- Payment processing
- Admin dashboard

---

## Support & Contributions

### Getting Help
1. Check `README.md` for docs
2. Review `CHATBOT_GUIDE.md` for customization
3. See `PROJECT_STRUCTURE.md` for code organization
4. Check `DEPLOYMENT.md` for hosting

### Contributing
- Fork repository
- Create feature branch
- Submit pull request
- Follow code style

---

**Ready to extend the chatbot? Start with the extensions listed above! 🚀**
