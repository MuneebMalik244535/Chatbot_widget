# 🚀 Quick Reference Card

## ⚡ Essential Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Format code
npm run format

# Check for lint errors
npm run lint
```

---

## 🌐 Key URLs (Development)

```
Home Page:           http://localhost:3000
Widget Page:         http://localhost:3000/widget
Demo Page:           http://localhost:3000/widget-demo.html
API Endpoint:        http://localhost:3000/api/mock-chat
Widget Script:       http://localhost:3000/widget.js
```

---

## 🔗 Production URLs (After Deployment)

```
Replace 'your-domain.com' with your actual domain:

Home:                https://your-domain.com
Widget:              https://your-domain.com/widget
Widget Script:       https://your-domain.com/widget.js
```

---

## 📝 Embed Code

Copy this one line to any website:

```html
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```

---

## 🏥 Clinic IDs

```
Bright Smile:        dental-clinic-1
Perfect Teeth:       dental-clinic-2
Your Clinic:         [YOUR_CLINIC_ID]
```

---

## 🎨 Customization Files

| File | What to Edit |
|------|-------------|
| `data/clinicData.ts` | Clinic info, services, doctors, colors |
| `lib/chatbotAI.ts` | Chat responses & keywords |
| `components/WidgetChatWindow.tsx` | Chat UI styling |
| `components/WidgetChatButton.tsx` | Button styling |

---

## 🧪 Test API Endpoint

```bash
curl -X POST http://localhost:3000/api/mock-chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What services do you offer?",
    "clientId": "dental-clinic-1"
  }'
```

---

## 🎯 Common Tasks

### Change Button Color

Edit `data/clinicData.ts`:
```typescript
theme: {
  primaryColor: "#FF5733"  // Your color here
}
```

### Add New Clinic

Edit `data/clinicData.ts`:
```typescript
allClinics["my-clinic"] = {
  id: "my-clinic",
  name: "My Clinic",
  // ... clinic data
};
```

Then use: `data-client="my-clinic"`

### Add New Service

Edit `data/clinicData.ts`:
```typescript
services: [
  {
    name: "Your Service",
    description: "Description",
    price: "$50-75"
  },
  // ... existing services
]
```

### Add New Doctor

Edit `data/clinicData.ts`:
```typescript
doctors: [
  {
    name: "Dr. Name",
    qualification: "Degree",
    experience: "Years"
  },
  // ... existing doctors
]
```

---

## 📱 Responsive Breakpoints

```
Mobile:   320px - 767px
Tablet:   768px - 1023px
Desktop:  1024px+
```

Widget works perfectly on all sizes!

---

## 🔐 Security Headers

```
Content-Type: application/json
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
```

---

## 🚀 Deployment Quick Links

### Vercel
1. Push to GitHub
2. Connect GitHub to Vercel
3. Auto-deploys on push
4. Get your URL: `your-project.vercel.app`

### Netlify
1. Run: `npm run build`
2. Deploy `out` folder to Netlify
3. Get your URL: `your-site.netlify.app`

### Docker
```bash
docker build -t widget .
docker run -p 3000:3000 widget
```

---

## 📊 API Response Format

```json
{
  "success": true,
  "message": "Bot response here",
  "clientId": "dental-clinic-1",
  "clinicName": "Clinic Name"
}
```

---

## 🔄 Data Structure

### Clinic Data
```typescript
{
  id: string                    // Unique ID
  name: string                  // Clinic name
  location: string              // Address
  phone: string                 // Phone
  email: string                 // Email
  services: Service[]           // Services list
  doctors: DoctorInfo[]         // Doctors list
  hours: {
    weekdays: string            // Mon-Fri hours
    weekend: string             // Sat-Sun hours
  }
  theme: {
    primaryColor: string        // Button color
    accentColor: string         // Accent color
  }
}
```

---

## 🎭 Chatbot Response Types

```
1. Services        → Lists all services
2. Pricing         → Shows prices
3. Hours           → Displays hours
4. Location        → Shows address
5. Doctors         → Lists doctors
6. Appointments    → Booking info
7. Emergency       → Emergency contact
8. About           → Clinic description
9. Greetings       → Welcome message
10. Thanks         → Thank you message
11. Fallback       → Default response
```

---

## 🗂️ Project Structure at a Glance

```
dental-chatbot/
├── public/
│   ├── widget.js           ← EMBEDDABLE SCRIPT
│   └── widget-demo.html    ← TEST PAGE
├── app/
│   ├── widget/page.tsx     ← IFRAME PAGE
│   └── api/mock-chat/      ← API ROUTE
├── components/             ← UI COMPONENTS
├── data/clinicData.ts      ← EDIT THIS
├── lib/chatbotAI.ts        ← EDIT THIS
└── docs/                   ← DOCUMENTATION
```

---

## ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Send Message | Enter |
| Open Chat | Click button |
| Close Chat | Click X or button |

---

## 🔧 Environment Setup

No .env file needed! Everything is frontend-based.

---

## 📞 Contact Info in Widget

When chatbot asks to contact:
- Phone: See `clinicData.ts` phone field
- WhatsApp: See `clinicData.ts` whatsapp field
- Email: See `clinicData.ts` email field

---

## ✅ Pre-launch Checklist

- [ ] `npm install` completed
- [ ] `npm run dev` works
- [ ] Widget appears at /widget-demo.html
- [ ] Chat responds to messages
- [ ] Colors look good
- [ ] Mobile is responsive
- [ ] Ready to deploy

---

## 🚀 One-Line Deployment

### Vercel
```bash
vercel deploy --prod
```

### Netlify
```bash
ntl deploy --prod
```

---

## 📝 Documentation Quick Links

| Doc | Contents |
|-----|----------|
| WIDGET_SYSTEM.md | Complete guide (400+ lines) |
| WIDGET_INTEGRATION.md | Integration steps |
| API_REFERENCE.md | API documentation |
| README_NEW.md | Project overview |
| COMPLETION_SUMMARY.md | Project status |

---

## 🎯 Widget Embed Format

```html
<!-- Basic -->
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>

<!-- Multiple clinics on same page -->
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-2"></script>
```

---

## 💾 File Locations You'll Edit Most

```
data/clinicData.ts          ← Clinic info & colors
lib/chatbotAI.ts            ← Chat responses
public/widget.js            ← Embedding script
components/WidgetChat*.tsx  ← UI components
```

---

## 🌟 Key Features Summary

✅ Embeddable anywhere  
✅ Multi-tenant support  
✅ Customizable colors  
✅ Rule-based AI  
✅ Responsive design  
✅ No backend needed  
✅ No external APIs  
✅ Fully isolated  

---

**Print this page or bookmark it for quick reference!** 📌
