# Bright Smile Dental Clinic - AI Chatbot Web Application

A modern, fully responsive dental clinic website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** featuring an AI-powered chatbot assistant with rule-based responses.

## 🚀 Features

✅ **Modern Healthcare Design** - Clean white and blue theme with professional aesthetics  
✅ **AI-Powered Chatbot** - Rule-based responses using mock data (no external API)  
✅ **Fully Responsive** - Mobile-first design for all devices  
✅ **Client-Side Only** - No backend server required  
✅ **Floating Chat Widget** - Bottom-right chat button with animations  
✅ **Smooth Animations** - Using CSS animations and Framer Motion  
✅ **SEO Optimized** - Meta tags and semantic HTML  
✅ **Accessibility** - Proper ARIA labels and keyboard navigation  

## 📋 Project Structure

```
dental-chatbot/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page with all sections
│   ├── globals.css             # Global styles and animations
│
├── components/
│   ├── Chatbot.tsx             # Main chatbot state management
│   ├── ChatWindow.tsx          # Chat conversation window
│   ├── ChatButton.tsx          # Floating chat button
│   ├── LandingPage.tsx         # All page sections
│   └── index.ts                # Component exports
│
├── data/
│   └── clinicData.ts           # Clinic information & knowledge base
│
├── lib/
│   ├── chatbotAI.ts            # Rule-based chatbot logic
│   └── index.ts                # Utility exports
│
├── public/                      # Static assets (if needed)
│
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── .gitignore                  # Git ignore rules
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: CSS Animations (Framer Motion optional)
- **Package Manager**: npm/yarn

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Steps

1. **Navigate to the project directory**
```bash
cd dental-chatbot
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
```
http://localhost:3000
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Deploy to Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 💬 Chatbot Features

The AI chatbot responds to user queries using rule-based logic:

### Supported Queries

| Category | Examples | Response |
|----------|----------|----------|
| **Services** | "What services do you offer?", "Tell me about treatments" | Lists all services with descriptions |
| **Pricing** | "How much does cleaning cost?", "What are the prices?" | Shows service pricing |
| **Hours** | "When are you open?", "What are your timings?" | Displays clinic hours |
| **Appointment** | "How do I book?", "Schedule an appointment" | Shows WhatsApp button and contact info |
| **Doctors** | "Tell me about your doctors", "Who is the dentist?" | Lists doctor information |
| **Location** | "Where are you located?", "What's your address?" | Displays clinic address and contact |
| **About** | "Tell me about the clinic", "What is BrightSmile?" | Clinic description |
| **Emergency** | "Is there emergency service?" | Emergency contact information |

### Example Interactions

```
User: "Do you offer teeth whitening?"
Bot: "Yes! Professional Teeth Whitening
     Description: Professional teeth whitening for a brighter smile
     Price: Rs. 5,000 - 8,000
     Duration: 1 hour
     Would you like to book an appointment?"

User: "What's your WhatsApp?"
Bot: "You can reach us at +92-300-1234567"

User: "Tell me about root canal"
Bot: "Root Canal Treatment
     Save your tooth with root canal therapy
     Price: Rs. 8,000 - 15,000
     Duration: 1-2 hours"
```

## 📱 Responsive Design

The application is fully responsive:

- **Mobile** (320px+) - Optimized for small screens
- **Tablet** (768px+) - Enhanced layout
- **Desktop** (1024px+) - Full-featured experience

## 🎨 Customization

### Change Clinic Information

Edit `data/clinicData.ts`:

```typescript
export const clinicData: ClinicData = {
  name: "Your Clinic Name",
  location: "Your Address",
  phone: "Your Phone",
  whatsapp: "Your WhatsApp",
  // ... more fields
};
```

### Modify Chatbot Responses

Edit `lib/chatbotAI.ts`:

```typescript
export const generateBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase().trim();
  
  // Add your custom logic here
  if (message.includes('your-keyword')) {
    return "Your custom response";
  }
  
  // ... rest of logic
};
```

### Update Theme Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
},
```

## 🎯 Features Breakdown

### Landing Page Sections

1. **Header** - Navigation with chat button
2. **Hero Section** - Main headline and CTA buttons
3. **Services Section** - Grid of all services
4. **Team Section** - Doctor information
5. **Contact Section** - Location, phone, email, WhatsApp
6. **Footer** - Links and copyright

### Chatbot Components

1. **ChatButton** - Floating widget with animations
2. **ChatWindow** - Message display and input area
3. **Chatbot Controller** - State management and message handling

## ⚡ Performance

- **Fast Load Times** - Optimized Next.js build
- **SEO Friendly** - Semantic HTML and metadata
- **Accessibility** - WCAG compliant with ARIA labels
- **Mobile Optimized** - Mobile-first CSS approach

## 🔒 Security & Privacy

- No external API calls
- No data collection
- No backend server
- All processing happens in the browser
- No sensitive information stored

## 📄 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint the code
npm run lint
```

## 🐛 Troubleshooting

### Issue: Port 3000 already in use

```bash
npm run dev -- -p 3001
```

### Issue: Module not found

```bash
npm install
```

### Issue: Styles not loading

Clear `.next` cache:
```bash
rm -rf .next
npm run dev
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements.

## 📝 License

This project is open source and available under the MIT License.

## 📞 Support

For questions or issues, please create an issue in the repository or contact the maintainers.

---

**Built with ❤️ for modern dental practices**

**Version**: 1.0.0  
**Last Updated**: 2024
