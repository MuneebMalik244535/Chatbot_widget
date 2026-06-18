# Widget Integration Guide

## 🚀 Quick Integration (30 seconds)

### Step 1: Copy Widget Script

```html
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```

### Step 2: Paste on Your Website

Add this line to your website's HTML (before closing `</body>`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Your Website</title>
</head>
<body>
  <!-- Your website content here -->
  
  <!-- Add this line -->
  <script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
</body>
</html>
```

### Step 3: Done! ✅

The chatbot will appear in the bottom-right corner automatically.

---

## 📝 Available Clinic IDs

### Pre-configured Clinics

1. **dental-clinic-1** - Bright Smile Dental Clinic
   ```html
   <script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
   ```

2. **dental-clinic-2** - Perfect Teeth Clinic
   ```html
   <script src="https://your-domain.com/widget.js" data-client="dental-clinic-2"></script>
   ```

### Create Your Own Clinic

Edit `data/clinicData.ts` and add:

```typescript
allClinics["my-clinic"] = {
  id: "my-clinic",
  name: "My Clinic Name",
  // ... clinic details
};
```

Then use:
```html
<script src="https://your-domain.com/widget.js" data-client="my-clinic"></script>
```

---

## 🎨 Customize Widget Colors

Edit `data/clinicData.ts`:

```typescript
"my-clinic": {
  id: "my-clinic",
  name: "My Clinic",
  // ... other data ...
  theme: {
    primaryColor: "#FF5733",    // Change button color
    accentColor: "#FF7C5C",     // Change accent color
  },
}
```

The widget automatically uses these colors!

---

## 🔌 Integration Examples

### WordPress Website

Add to your theme's `footer.php`:

```html
<!-- Dental Clinic Chatbot Widget -->
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```

### Wix Website

1. Go to Settings → Advanced → Custom Code
2. Paste the script tag
3. Click Save

### Shopify Store

1. Go to Online Store → Themes
2. Edit code
3. Find `theme.liquid`
4. Add script before `</body>`

### Custom HTML Website

Simply add the script tag to your HTML file.

### React/Vue/Angular App

Add to your main HTML file or in a useEffect:

```typescript
useEffect(() => {
  // Load widget script
  const script = document.createElement('script');
  script.src = 'https://your-domain.com/widget.js';
  script.setAttribute('data-client', 'dental-clinic-1');
  document.body.appendChild(script);
}, []);
```

---

## ✨ Features

✅ **Fully Responsive** - Works on mobile, tablet, desktop  
✅ **No CSS Conflicts** - Isolated styles, won't affect your website  
✅ **No Setup Required** - Just add one script tag  
✅ **Multi-Clinic Support** - Different data for each clinic  
✅ **Customizable Colors** - Match your brand  
✅ **AI Responses** - Rule-based, frontend-only  
✅ **Production Ready** - Tested and optimized  

---

## 🧪 Test the Widget

### Local Testing

1. Create `test.html`:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Test Page</h1>
  <script src="http://localhost:3000/widget.js" data-client="dental-clinic-1"></script>
</body>
</html>
```

2. Open in browser
3. Chat button appears in bottom-right

### Production Testing

1. Deploy your Next.js app
2. Get your domain URL
3. Replace `http://localhost:3000` with your domain
4. Test on any website

---

## 🆘 Troubleshooting

### Widget Not Showing?

1. **Check browser console (F12)**
   - Look for JavaScript errors
   - Check that script loads

2. **Verify script URL**
   - Make sure URL is correct
   - Check domain is deployed

3. **Test with different clinic**
   ```html
   <script src="https://your-domain.com/widget.js" data-client="dental-clinic-2"></script>
   ```

### Chat Not Working?

1. **Open Network tab (F12 → Network)**
2. **Send a message**
3. **Look for POST /api/mock-chat**
4. **Check if response is 200 OK**

If not:
- Server might not be running
- Check deployment status
- Verify `/api/mock-chat` exists

### Styling Issues?

1. **Button not visible**
   - Check z-index might be hidden
   - Try different page position

2. **Text misaligned**
   - Refresh page
   - Clear browser cache (Ctrl+Shift+Delete)

---

## 📊 What Happens When You Embed

```
1. User visits website.com
   ↓
2. <script src="widget.js"> loads
   ↓
3. widget.js creates iframe
   ↓
4. iframe loads /widget?clientId=your-clinic
   ↓
5. Chatbot appears bottom-right
   ↓
6. User clicks to open chat
   ↓
7. User sends message
   ↓
8. POST /api/mock-chat with message + clientId
   ↓
9. Server returns clinic-specific response
   ↓
10. Chat displays response
```

All happens instantly! ⚡

---

## 🔐 Security

✅ **No data leaks** - All in your domain  
✅ **No external calls** - Frontend-only logic  
✅ **No tracking** - User privacy preserved  
✅ **Isolated iframe** - Can't access host page  
✅ **HTTPS ready** - Secure by default  

---

## 📈 Next Steps

1. **Deploy your Next.js app**
   - Vercel (easiest)
   - Netlify
   - Your own server

2. **Get widget URL**
   - `https://your-domain.com/widget.js`

3. **Add to your website**
   - Copy script tag
   - Paste in HTML

4. **Customize**
   - Update clinic data
   - Change colors
   - Add more clinics

---

## 💬 Example Conversations

**User**: "What services do you offer?"  
**Bot**: Lists all services with descriptions

**User**: "How much does cleaning cost?"  
**Bot**: Shows pricing for teeth cleaning

**User**: "When are you open?"  
**Bot**: Displays clinic hours

**User**: "How do I book?"  
**Bot**: Shows WhatsApp, phone, email options

**User**: "Tell me about your doctors"  
**Bot**: Lists all doctors with experience

---

## 📞 Support

- Check [WIDGET_SYSTEM.md](./WIDGET_SYSTEM.md) for detailed docs
- Read [README.md](./README.md) for project overview
- Check GitHub issues for common problems

---

**Happy integrating! 🚀**
