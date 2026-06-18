# 🎯 Embedding Instructions

## How to Embed Your Widget

### The One-Line Solution

Add this single line to **any website** to embed the dental clinic chatbot:

```html
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```

---

## 📍 Where to Add the Script

### Option 1: Before Closing Body Tag (Recommended)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Your Website</title>
</head>
<body>
  <!-- Your website content here -->
  
  <!-- Add this before </body> -->
  <script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
</body>
</html>
```

### Option 2: In the Head Section

```html
<!DOCTYPE html>
<html>
<head>
  <title>Your Website</title>
  
  <!-- Add here -->
  <script src="https://your-domain.com/widget.js" data-client="dental-clinic-1" async defer></script>
</head>
<body>
  <!-- Your website content -->
</body>
</html>
```

### Option 3: Anywhere on the Page

```html
<!-- Works anywhere -->
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```

---

## 🏥 Using Different Clinic IDs

### Clinic 1: Bright Smile Dental Clinic
```html
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```

### Clinic 2: Perfect Teeth Clinic
```html
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-2"></script>
```

### Your Own Clinic
```html
<script src="https://your-domain.com/widget.js" data-client="my-clinic"></script>
```

First, add your clinic to `data/clinicData.ts`!

---

## 🔗 Platform-Specific Instructions

### 1. Wix Website

**Steps:**
1. Go to **Settings** → **Advanced** → **Custom Code**
2. Paste this:
```html
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```
3. Click **Apply**
4. Widget appears on your site!

### 2. WordPress

**Steps:**
1. Go to **Appearance** → **Theme Code** or **Footer**
2. Find `footer.php`
3. Add before `</body>`:
```html
<!-- Dental Clinic Chatbot -->
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```
4. Save and publish

Or use a **WordPress Plugin:**
1. Install "Code Snippets" plugin
2. Add new snippet
3. Paste the script
4. Activate

### 3. Shopify Store

**Steps:**
1. Go to **Online Store** → **Themes**
2. Click **Edit code**
3. Find `theme.liquid`
4. Add before `</body>`:
```html
<!-- Dental Clinic Chatbot -->
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```
5. Save

### 4. Squarespace

**Steps:**
1. Go to **Settings** → **Advanced** → **Code Injection**
2. Paste in **Footer** section:
```html
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```
3. Save

### 5. Weebly

**Steps:**
1. Go to **Settings** → **SEO** → **Header/Footer**
2. Add to **Footer Code**:
```html
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```
3. Save

### 6. Blogger

**Steps:**
1. Go to **Theme** → **Edit HTML**
2. Find `</body>`
3. Add before it:
```html
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```
4. Save

### 7. Static HTML Site

**Steps:**
1. Open your HTML file
2. Add before `</body>`:
```html
<script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
```
3. Save and upload

---

## 💻 Framework Integration

### React

```typescript
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Load widget script
    const script = document.createElement('script');
    script.src = 'https://your-domain.com/widget.js';
    script.setAttribute('data-client', 'dental-clinic-1');
    document.body.appendChild(script);
  }, []);

  return <div>Your app content</div>;
}
```

### Vue.js

```vue
<template>
  <div id="app">
    Your app content
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://your-domain.com/widget.js';
    script.setAttribute('data-client', 'dental-clinic-1');
    document.body.appendChild(script);
  }
}
</script>
```

### Angular

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const script = document.createElement('script');
    script.src = 'https://your-domain.com/widget.js';
    script.setAttribute('data-client', 'dental-clinic-1');
    document.body.appendChild(script);
  }
}
```

### Next.js

```tsx
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://your-domain.com/widget.js';
    script.setAttribute('data-client', 'dental-clinic-1');
    document.body.appendChild(script);
  }, []);

  return <div>Your app</div>;
}
```

### Nuxt.js

```vue
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://your-domain.com/widget.js';
  script.setAttribute('data-client', 'dental-clinic-1');
  document.body.appendChild(script);
});
</script>
```

### Svelte

```svelte
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://your-domain.com/widget.js';
    script.setAttribute('data-client', 'dental-clinic-1');
    document.body.appendChild(script);
  });
</script>
```

---

## 🎯 Multiple Clinics on Same Page

Want multiple chat widgets for different clinics?

```html
<!-- Clinic 1 in top section -->
<div class="clinic-1">
  <h2>Bright Smile Dental</h2>
  <script src="https://your-domain.com/widget.js" data-client="dental-clinic-1"></script>
</div>

<!-- Clinic 2 in bottom section -->
<div class="clinic-2">
  <h2>Perfect Teeth Clinic</h2>
  <script src="https://your-domain.com/widget.js" data-client="dental-clinic-2"></script>
</div>
```

**Note:** Only one widget will display (last one loaded).

---

## ✅ Verification Checklist

After adding the script:

- [ ] Page loads without errors
- [ ] No console errors (F12 → Console)
- [ ] Chat button appears bottom-right
- [ ] Button says "Open" or shows chat icon
- [ ] Clicking button opens chat window
- [ ] Can type and send messages
- [ ] Bot responds with clinic info
- [ ] Widget is visible on mobile
- [ ] Colors match your theme

---

## 🔍 Testing the Embed

### In Browser Console (F12 → Console):

```javascript
// Check if script loaded
console.log(window.location.href);

// Look for widget in DOM
document.getElementById('bright-smile-widget');

// Check for errors
// (any red messages = problems)
```

---

## 🆘 Troubleshooting

### Widget Not Showing?

1. **Check Console (F12)**
   - Look for JavaScript errors
   - Red error messages?
   
2. **Verify Script URL**
   - Make sure domain is correct
   - Check if it's deployed
   - Try visiting URL directly in browser

3. **Check data-client**
   - Make sure clinic ID exists
   - Try default: `dental-clinic-1`

4. **Wait for Page Load**
   - Widget loads after DOM ready
   - May take 1-2 seconds

### Chat Not Working?

1. **Check Network Tab (F12 → Network)**
   - Send a message
   - Look for POST request to `/api/mock-chat`
   - Check response (should be 200)

2. **Check Server**
   - Make sure production server is running
   - Check deployment status
   - Verify domain is accessible

### Styling Issues?

1. **Widget misaligned**
   - Try full page refresh
   - Clear browser cache

2. **Colors wrong**
   - Check theme in `clinicData.ts`
   - Make sure changes deployed

3. **Text overlapping**
   - Try different browser
   - Check zoom level (Ctrl+0)

---

## 📊 What Happens After Embedding

```
1. User visits website
   ↓
2. <script> tag loads
   ↓
3. widget.js executes
   ↓
4. Reads data-client attribute
   ↓
5. Creates iframe pointing to /widget?clientId=...
   ↓
6. WidgetChatbot loads
   ↓
7. Chat button appears bottom-right
   ↓
8. User can start chatting!
```

All in **< 500ms**! ⚡

---

## 🎨 Customization Per Clinic

Each clinic can have:
- **Different name** - "Bright Smile" vs "Perfect Teeth"
- **Different services** - Unique list for each
- **Different doctors** - Different staff profiles
- **Different colors** - Brand colors
- **Different hours** - Different schedules
- **Different location** - Multiple branches
- **Different contact info** - Phone, email, WhatsApp

All controlled from `data/clinicData.ts`!

---

## 🚀 That's It!

You now have a fully functional, embeddable, multi-tenant dental clinic chatbot widget.

**Just add the script tag and go!** 🎉

---

## 📝 Quick Embed Template

Copy this template and replace with your details:

```html
<!-- Dental Clinic Chatbot Widget -->
<script src="https://YOUR_DOMAIN.com/widget.js" data-client="YOUR_CLINIC_ID"></script>
```

Replace:
- `YOUR_DOMAIN.com` → Your actual domain
- `YOUR_CLINIC_ID` → Your clinic ID (or use dental-clinic-1, dental-clinic-2)

**Done!** 🚀

---

**For more help, see [WIDGET_INTEGRATION.md](./WIDGET_INTEGRATION.md)**
