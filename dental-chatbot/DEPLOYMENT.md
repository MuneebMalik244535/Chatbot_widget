# Deployment Guide

## 🚀 Deployment Options

This guide covers deploying your Bright Smile Dental Clinic chatbot to various platforms.

## Option 1: Vercel (Recommended - Free & Easy)

Vercel is the creator of Next.js and provides the best integration.

### Prerequisites
- GitHub account
- Vercel account (free)

### Step-by-Step

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dental-chatbot.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Select your repository

3. **Configure Project**
   - Framework: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Environment Variables: (leave empty, not needed)
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel automatically builds and deploys
   - Your app is live in ~2 minutes
   - You get a free domain

5. **Custom Domain (Optional)**
   - In Vercel dashboard, go to "Domains"
   - Add your custom domain
   - Update DNS records

### Result
- ✅ Free hosting
- ✅ Auto SSL certificate
- ✅ Global CDN
- ✅ Preview deployments
- ✅ Automatic rebuilds on push

---

## Option 2: Netlify (Free Alternative)

### Prerequisites
- GitHub account
- Netlify account (free)

### Step-by-Step

1. **Push to GitHub** (same as Vercel above)

2. **Connect to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Select your repository

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy"

4. **Wait for Deployment**
   - Build takes 2-3 minutes
   - You get a free domain
   - Automatic SSL

### Custom Domain
- Add in "Domain Settings"
- Update DNS (step-by-step guide provided)

---

## Option 3: Railway (Simple Deploy)

### Step-by-Step

1. **Visit [railway.app](https://railway.app)**
2. **Sign up with GitHub**
3. **New Project → GitHub Repo**
4. **Select your repository**
5. **Railway auto-configures Next.js**
6. **Wait ~5 minutes for deployment**

### Custom Domain
- In project settings, add custom domain
- Update DNS records

---

## Option 4: Traditional Hosting (Heroku, etc.)

### Build and Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Upload to server**
   ```bash
   # Copy these folders to server:
   # - .next/ (build output)
   # - public/ (static files)
   # - package.json
   # - package-lock.json
   # - node_modules/ (or run npm install on server)
   ```

3. **Start on server**
   ```bash
   npm run start
   ```

4. **Use Process Manager**
   ```bash
   pm2 start "npm run start"
   ```

---

## Option 5: Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source
COPY . .

# Build Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
```

### Build and Run

```bash
# Build image
docker build -t dental-chatbot .

# Run container
docker run -p 3000:3000 dental-chatbot
```

### Deploy to Docker Hub

```bash
# Tag image
docker tag dental-chatbot YOUR_USERNAME/dental-chatbot

# Push to Docker Hub
docker push YOUR_USERNAME/dental-chatbot
```

---

## Pre-Deployment Checklist

Before deploying, ensure:

### Code Quality
- [ ] No console errors: `npm run lint`
- [ ] All components work locally: `npm run dev`
- [ ] Responsive design tested
- [ ] All links work
- [ ] Mobile-friendly verified

### Content
- [ ] Clinic name updated
- [ ] Services information correct
- [ ] Doctor profiles accurate
- [ ] Contact information verified
- [ ] WhatsApp number correct
- [ ] Location address correct
- [ ] Hours/timings accurate

### SEO & Metadata
- [ ] Page title is descriptive
- [ ] Meta description complete
- [ ] Keywords relevant
- [ ] Open Graph tags set

### Performance
- [ ] Images optimized
- [ ] Bundle size checked
- [ ] No unused dependencies
- [ ] Build completes without warnings

### Security
- [ ] No hardcoded secrets
- [ ] Environment variables set up
- [ ] SSL/HTTPS enabled
- [ ] Headers configured

---

## Post-Deployment

### 1. Verify Deployment

```bash
# Test the live URL in browser
# Check that:
- [ ] Page loads quickly
- [ ] Chatbot widget appears
- [ ] Chatbot responds
- [ ] All sections visible
- [ ] Mobile responsive
- [ ] Links work
- [ ] WhatsApp link works
```

### 2. Set Up Custom Domain

#### For Vercel
1. Go to "Settings" → "Domains"
2. Add your domain
3. Update DNS records (instructions provided)

#### For Netlify
1. Go to "Settings" → "Domain Management"
2. Add custom domain
3. Update DNS records

#### DNS Records Typically Include
- **Type**: CNAME
- **Name**: www (for www.yourdomain.com)
- **Value**: Provided by hosting platform

### 3. Enable Analytics

#### Vercel Analytics
- Automatic with Vercel
- Dashboard shows metrics

#### Google Analytics (All platforms)
Add to `app/layout.tsx`:
```typescript
{/* Add inside <head> */}
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`}
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### 4. Set Up Monitoring

#### Error Tracking
- Vercel: Built-in error logs
- Use Sentry for detailed tracking

#### Performance Monitoring
- Vercel: Performance dashboard
- Web Vitals automatically tracked

---

## Troubleshooting Deployments

### Build Failed
1. Check build logs
2. Ensure all dependencies in `package.json`
3. Verify TypeScript errors: `npm run build`
4. Check for missing environment variables

### Styles Not Loading
1. Ensure Tailwind CSS configured
2. Check `tailwind.config.ts`
3. Verify `postcss.config.js`
4. Clear cache and rebuild

### Chatbot Not Working
1. Check browser console for errors
2. Verify `data/clinicData.ts` deployed
3. Test chatbot locally again
4. Check `lib/chatbotAI.ts` for issues

### Slow Performance
1. Check bundle size
2. Optimize images
3. Enable caching headers
4. Use CDN (Vercel/Netlify has this)

### CORS/API Errors
- Not applicable (no API calls)
- If adding API later, configure CORS

---

## Updating After Deployment

### Small Changes
```bash
# 1. Make changes locally
# 2. Commit and push
git add .
git commit -m "Update clinic info"
git push

# Platform auto-deploys on push
```

### Database Changes (Future)
- Never make breaking changes without migration
- Test on staging first
- Deploy data changes before code

---

## Scaling Your Deployment

### Add Database
- Use Supabase, Firebase, or PostgreSQL
- Update `data/clinicData.ts` to fetch from API
- Add environment variables

### Add Backend API
- Add `/api` routes in Next.js
- Deploy with same platform
- Update chatbot to call backend

### Add Authentication
- Use NextAuth.js
- Integrate with OAuth providers
- Store user data securely

### Add Email/SMS
- Integrate SendGrid or Mailgun
- Add Twilio for SMS
- Update environment variables

---

## Cost Comparison

| Platform | Free Tier | Paid Starting |
|----------|-----------|-----------------|
| Vercel | Yes | $20/month |
| Netlify | Yes | $19/month |
| Railway | Limited | $5/month |
| Heroku | No* | $7/month |
| AWS | Limited | Pay as you go |
| DigitalOcean | No | $5/month |

*Heroku removed free tier in 2022

---

## SSL/HTTPS

All modern platforms provide:
- ✅ Free SSL certificates
- ✅ Automatic renewal
- ✅ HTTPS by default

No additional configuration needed.

---

## Environment Variables

This project needs no environment variables, but if you add features:

### Example .env.local
```
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgres://...
WEBHOOK_SECRET=your-secret-key
```

### How to Set on Platforms

**Vercel**:
1. Settings → Environment Variables
2. Enter key/value pairs
3. Redeploy

**Netlify**:
1. Settings → Build & Deploy → Environment
2. Add variables
3. Redeploy

---

## Continuous Deployment

All platforms support automatic deployment:

1. **Push to GitHub/GitLab/Bitbucket**
2. **Platform detects changes**
3. **Auto-builds and deploys**
4. **Usually within 2-5 minutes**

### Branch Deployments
- Main branch → Production
- Preview branches → Preview URLs
- Pull requests → Automatic previews

---

## Rollback/Undo Deployment

### Vercel
1. Go to "Deployments"
2. Find previous deployment
3. Click "... → Promote to Production"

### Netlify
1. Go to "Deploys"
2. Find previous deploy
3. Click "Publish deploy"

### Git Rollback
```bash
# Revert to previous commit
git revert HEAD
git push

# Platform redeploys old version
```

---

## Performance Optimization Tips

### Before Deployment
1. Minimize bundle: `npm run build`
2. Remove unused dependencies
3. Optimize images
4. Compress CSS/JS

### After Deployment
1. Enable caching headers
2. Use CDN (automatic)
3. Monitor Web Vitals
4. Set up auto-scaling

### Vercel Speed Features
- Automatic image optimization
- Code splitting
- Lazy loading
- Edge functions

---

## Support & Help

### Official Docs
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Railway Docs](https://docs.railway.app)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

### Community
- GitHub Discussions
- Stack Overflow
- Next.js Discord

---

## Recommended Setup

### For Beginners
→ Use **Vercel** (easiest, free, best for Next.js)

### For Advanced Users
→ Use **Railway** or **DigitalOcean** (more control)

### For Enterprise
→ Use **AWS** or **Azure** (scalability)

---

**Your app is ready to go live! 🎉**

**Next Step**: Choose your platform and deploy!
