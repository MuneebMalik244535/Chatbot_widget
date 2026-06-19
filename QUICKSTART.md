# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
```
http://localhost:3000
```

## ✨ That's It! Your Chatbot is Running

The application will open with:
- ✅ Modern dental clinic landing page
- ✅ Floating AI chatbot button (bottom-right)
- ✅ Fully functional chatbot with mock data
- ✅ Responsive design for all devices

## 💬 Test the Chatbot

Try asking:
- "What services do you offer?"
- "How much does teeth cleaning cost?"
- "When are you open?"
- "How do I book an appointment?"
- "Tell me about your doctors"

## 🎨 Customize for Your Clinic

### 1. Update Clinic Information (5 min)
Edit `data/clinicData.ts`:
```typescript
export const clinicData = {
  name: "Your Clinic Name",
  location: "Your City, Country",
  phone: "+1-234-567-8900",
  whatsapp: "+1-234-567-8900",
  // ... update other fields
};
```

### 2. Update Services (5 min)
Add/edit services in `data/clinicData.ts`:
```typescript
services: [
  {
    id: "service-id",
    name: "Service Name",
    description: "Description",
    price: "Price",
    duration: "Duration",
  },
];
```

### 3. Update Doctors (5 min)
Add doctors in `data/clinicData.ts`:
```typescript
doctors: [
  {
    name: "Dr. Name",
    title: "Position",
    experience: "X+ years",
    specialization: "Specialty",
  },
];
```

### 4. Customize Theme (2 min)
Edit `tailwind.config.ts` to change colors.

### 5. Update Landing Page (10 min)
Edit text and content in `components/LandingPage.tsx`.

## 📁 Project Structure

```
dental-chatbot/
├── app/                    # Next.js app router
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Chatbot.tsx        # Main chatbot
│   ├── ChatWindow.tsx     # Chat interface
│   ├── ChatButton.tsx     # Floating button
│   └── LandingPage.tsx    # Page sections
├── data/                  # Clinic information
│   └── clinicData.ts      # Knowledge base
├── lib/                   # Utilities
│   └── chatbotAI.ts       # Chatbot logic
├── public/                # Static files
└── [config files]         # TSconfig, package.json, etc
```

## 🔧 Common Tasks

### Add New Chatbot Response
Edit `lib/chatbotAI.ts` and add:
```typescript
if (message.includes('your-keyword')) {
  return `Your response here`;
}
```

### Change Primary Color
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    600: '#YOUR_COLOR',
    700: '#YOUR_DARKER_COLOR',
  },
}
```

### Update Contact Links
Edit `components/LandingPage.tsx`:
- Change phone number
- Change WhatsApp link
- Change email address
- Change clinic address

### Add More Services
Edit `data/clinicData.ts`:
```typescript
services: [
  // ... existing
  {
    id: "new-service",
    name: "New Service",
    description: "Description",
    price: "Price",
    duration: "Duration",
  },
]
```

## 🚀 Build for Production

```bash
# Build
npm run build

# Test production build locally
npm run start
```

## 📦 Deploy Options

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy

### Option 2: Netlify
1. Build: `npm run build`
2. Deploy `dist` or `.next` folder

### Option 3: Traditional Hosting
```bash
npm run build
npm run start
# Then upload to your server
```

## 📱 Features Included

✅ AI Chatbot with 8+ response categories  
✅ Rule-based responses from mock data  
✅ Floating chat widget with animations  
✅ Responsive design (mobile-first)  
✅ Modern healthcare UI  
✅ White + Blue theme  
✅ 6 Services listed  
✅ 3 Doctors profiles  
✅ Contact information  
✅ WhatsApp integration  
✅ Emergency support info  
✅ Appointment booking guidance  

## ⚡ Pro Tips

1. **Hot Reload**: Save files and changes appear instantly
2. **Browser DevTools**: Press F12 to debug
3. **Mobile Testing**: Use Chrome DevTools device toolbar
4. **Faster Builds**: Clear `.next` folder if stuck
5. **TypeScript**: Auto-completes help you write faster

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Modules not found | `npm install` |
| Styles not loading | Delete `.next` folder |
| Chatbot not responding | Check browser console (F12) |
| Changes not showing | Wait for hot reload or hard refresh |

## 📚 File Modification Guide

### Which File to Edit?

| Task | File |
|------|------|
| Update clinic info | `data/clinicData.ts` |
| Add services | `data/clinicData.ts` |
| Change chatbot responses | `lib/chatbotAI.ts` |
| Modify landing page | `components/LandingPage.tsx` |
| Update colors/theme | `tailwind.config.ts` |
| Change global styles | `app/globals.css` |
| Update metadata/SEO | `app/layout.tsx` |

## ✅ Deployment Checklist

Before deploying:
- [ ] Update clinic name
- [ ] Update services
- [ ] Update doctors
- [ ] Update contact info
- [ ] Update WhatsApp link
- [ ] Test chatbot responses
- [ ] Test on mobile
- [ ] Update theme colors
- [ ] Update metadata

## 🎉 Next Steps

1. Run `npm install` & `npm run dev`
2. Open http://localhost:3000
3. Test the chatbot
4. Customize with your clinic info
5. Deploy to production

---

**Questions?** Check `README.md` and `CHATBOT_GUIDE.md` for detailed docs!

**Built with ❤️ for dental clinics everywhere**
