# Railway Deployment Guide - 100% Working

## Why Railway?
- ✅ Built-in PostgreSQL (no external database needed)
- ✅ Automatic HTTPS and domains
- ✅ Easier environment variable management
- ✅ Free $5/month credit (enough for this app)
- ✅ Better for Next.js + Prisma apps

---

## Step-by-Step Deployment

### Step 1: Create Railway Account

1. Go to **https://railway.app**
2. Click **"Login"** → **"Login with GitHub"**
3. Authorize Railway to access your GitHub account
4. You get **$5 free credit per month** (no credit card required!)

### Step 2: Create New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose **"hussainshaqsi/Perfect-UHA-calender"**
4. Railway will start analyzing your repo

### Step 3: Add PostgreSQL Database

1. In your project dashboard, click **"+ New"**
2. Select **"Database"** → **"Add PostgreSQL"**
3. Railway will automatically provision a database
4. The database will auto-connect to your app!

### Step 4: Configure Environment Variables

1. Click on your **Next.js service** (not the database)
2. Go to **"Variables"** tab
3. Click **"+ New Variable"** and add:

**NEXTAUTH_SECRET**
```
APMD7IlwjgxUnbz3N6jcYKTdIjU1P3+BhmpYnGDjRgk=
```

**DATABASE_URL** (if not auto-added)
```
Click "Add Reference" → Select PostgreSQL → Choose "DATABASE_URL"
```

**NEXTAUTH_URL** (we'll update this after deployment)
```
Leave blank for now
```

**NODE_ENV**
```
production
```

### Step 5: Configure Build Settings

1. Still in your Next.js service, go to **"Settings"** tab
2. Scroll to **"Build Command"** and set:
```bash
npm run railway:build
```

3. Set **"Start Command"**:
```bash
npm run railway:start
```

4. Click **"Deploy"** (top right corner)

### Step 6: Wait for Deployment

1. Watch the build logs (it takes 2-4 minutes)
2. Look for: ✅ "Build successful"
3. Then: ✅ "Deployment successful"

### Step 7: Get Your URL

1. Go to **"Settings"** tab
2. Scroll to **"Domains"**
3. Click **"Generate Domain"**
4. You'll get something like: `perfect-uha-calender-production.up.railway.app`

### Step 8: Update NEXTAUTH_URL

1. Copy your Railway URL (including `https://`)
2. Go back to **"Variables"** tab
3. Add or update **NEXTAUTH_URL**:
```
https://perfect-uha-calender-production.up.railway.app
```
4. Railway will automatically redeploy

### Step 9: Test Your App! 🎉

1. Visit your Railway URL
2. You should see the app loading
3. Go to `/register` to create an account
4. Use any email ending in `@uha.fr` (for testing, the validation is in the code)
5. Log in and you're done!

---

## Custom Domain (Optional)

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In Railway **"Settings"** → **"Domains"**
3. Click **"Custom Domain"**
4. Enter your domain (e.g., `study.uha-app.com`)
5. Update your DNS records:
   - Add CNAME record pointing to your Railway domain
6. Update `NEXTAUTH_URL` to your custom domain

---

## Troubleshooting

### Build Fails with Prisma Error
**Fix**: Make sure `DATABASE_URL` is set correctly
- Go to Variables → Add Reference → Select PostgreSQL → DATABASE_URL

### App Crashes on Start
**Fix**: Check the logs
```bash
# In Railway logs, look for:
"Error: P1001: Can't reach database server"
```
- This means DATABASE_URL is wrong or database isn't running
- Make sure PostgreSQL service is running in your project

### "Invalid credentials" on Login
**Fix**: The database is empty!
- First, **register** a new account
- Then login with those credentials

### Build Times Out
**Fix**: Railway free tier has limited resources
- Make sure you're using the Railway build command
- Check if you have too many dependencies

---

## Monitoring Your App

### View Logs
1. Click on your service
2. Go to **"Deployments"** tab
3. Click on the latest deployment
4. View real-time logs

### Check Database
1. Click on your PostgreSQL service
2. Go to **"Data"** tab
3. You can see your tables and data
4. Or use the **"Query"** tab to run SQL

### Usage & Billing
1. Go to project **"Settings"**
2. Click **"Usage"**
3. See your $5 monthly credit usage
4. This app should use ~$2-3/month

---

## Environment Variables Reference

| Variable | Value | Required |
|----------|-------|----------|
| `DATABASE_URL` | Auto-provided by Railway PostgreSQL | ✅ Yes |
| `NEXTAUTH_SECRET` | `APMD7IlwjgxUnbz3N6jcYKTdIjU1P3+BhmpYnGDjRgk=` | ✅ Yes |
| `NEXTAUTH_URL` | Your Railway domain (https://...) | ✅ Yes |
| `NODE_ENV` | `production` | ✅ Yes |

---

## Quick Commands

### Redeploy
- Just push to GitHub `main` branch, Railway auto-deploys

### Manual Redeploy
1. Go to **"Deployments"**
2. Click **"⋮"** on latest deployment
3. Click **"Redeploy"**

### Rollback
1. Go to **"Deployments"**
2. Find a previous working deployment
3. Click **"⋮"** → **"Redeploy"**

### View Database
1. Click PostgreSQL service
2. Go to **"Data"** tab
3. Or connect via CLI:
```bash
railway connect postgresql
```

---

## Success Checklist

- [ ] Railway account created
- [ ] GitHub repo connected
- [ ] PostgreSQL database added
- [ ] Environment variables set
- [ ] Build command configured
- [ ] Start command configured
- [ ] Deployment successful
- [ ] Domain generated
- [ ] NEXTAUTH_URL updated
- [ ] Registration working
- [ ] Login working
- [ ] Calendar sync working

---

## Next Steps After Deployment

1. **Test Registration**: Create a test account
2. **Test Calendar Sync**: Add your iCal URL in onboarding
3. **Share with UHA Students**: Give them the Railway URL
4. **Monitor Usage**: Check Railway dashboard for usage stats
5. **Set Up Custom Domain** (optional)

---

## Cost Estimate

Railway gives you **$5/month free**:
- Next.js app: ~$1-2/month
- PostgreSQL: ~$1/month
- Bandwidth: ~$0.50/month

**Total**: ~$2.50-3.50/month (well within free tier!)

---

**You're all set! Your app will be live in ~5 minutes after following these steps.** 🚀
