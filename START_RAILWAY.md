# 🚂 Deploy to Railway in 5 Minutes

## Quick Start (Copy-Paste Ready!)

### 1. Create Railway Account
👉 **Go to**: https://railway.app
- Click "Login with GitHub"
- Authorize Railway

### 2. Create New Project
- Click **"New Project"**
- Select **"Deploy from GitHub repo"**
- Choose: `hussainshaqsi/Perfect-UHA-calender`

### 3. Add Database
- Click **"+ New"** in your project
- Select **"Database"** → **"Add PostgreSQL"**
- Done! It auto-connects.

### 4. Add Environment Variables

Click on your app (not database) → **"Variables"** → Add these:

```bash
NEXTAUTH_SECRET
APMD7IlwjgxUnbz3N6jcYKTdIjU1P3+BhmpYnGDjRgk=
```

```bash
NODE_ENV
production
```

```bash
DATABASE_URL
(Click "Add Reference" → PostgreSQL → DATABASE_URL)
```

### 5. Configure Build

Go to **"Settings"** tab:

**Build Command:**
```bash
npm run railway:build
```

**Start Command:**
```bash
npm run railway:start
```

### 6. Deploy!

- Click **"Deploy"** (top right)
- Wait 2-3 minutes
- Watch the logs for success

### 7. Get Your URL

- Go to **"Settings"** → **"Domains"**
- Click **"Generate Domain"**
- Copy your URL (e.g., `https://xxx.railway.app`)

### 8. Update Auth URL

- Go back to **"Variables"**
- Add:

```bash
NEXTAUTH_URL
https://your-railway-url.railway.app
```

Railway will auto-redeploy!

### 9. Test It! 🎉

- Visit your Railway URL
- Click "Register"
- Create account (use `@uha.fr` email)
- Login
- Done!

---

## Need Help?

Check **RAILWAY_DEPLOY.md** for detailed troubleshooting.

**Issues?** Check the Railway logs in the "Deployments" tab.

---

## That's It!

Your app is now live and running on Railway with:
- ✅ Automatic HTTPS
- ✅ PostgreSQL database
- ✅ Auto-deploy on git push
- ✅ Free $5/month credit

**Share the URL with UHA students!** 🚀
