# Deploy to Vercel NOW - Get Your Live URL in 5 Minutes!

## What You'll Get

- **Live URL**: `https://your-app-name.vercel.app`
- **Automatic HTTPS**: Free SSL certificate
- **Custom Domain**: Optional (can add later)
- **Auto Updates**: Every GitHub push deploys automatically

---

## Quick Deploy (2 Options)

### Option 1: One-Click Deploy (EASIEST)

**Just click this button:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hussainshaqsi/Perfect-UHA-calender/tree/nqa-multi-user&env=NEXTAUTH_SECRET,NEXTAUTH_URL,CRON_SECRET&envDescription=Required%20secrets%20for%20authentication&project-name=uha-study-prioritizer&repository-name=uha-study-prioritizer)

**Then:**
1. Click "Deploy"
2. Login with GitHub
3. It will ask for environment variables - **see below** ⬇️

---

### Option 2: Deploy via Command Line

```bash
# 1. Login to Vercel
vercel login

# 2. Deploy
vercel

# 3. Follow prompts and deploy to production
vercel --prod
```

---

## Required Environment Variables

When Vercel asks, add these:

```
DATABASE_URL          = (Vercel Postgres will auto-fill this)
NEXTAUTH_SECRET       = (Run: openssl rand -base64 32)
NEXTAUTH_URL          = https://your-app-name.vercel.app
CRON_SECRET           = (Run: openssl rand -base64 32)
```

### How to Generate Secrets

**Windows (PowerShell):**
```powershell
-join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | ForEach-Object {[char]$_})
```

**Mac/Linux:**
```bash
openssl rand -base64 32
```

Or use online: https://generate-secret.vercel.app/32

---

## Step-by-Step: Complete Deployment

### Step 1: Add Vercel Postgres

1. Go to your Vercel dashboard
2. Select your project
3. Go to "Storage" tab
4. Click "Create Database" → "Postgres"
5. It will auto-add `DATABASE_URL` to your environment variables

### Step 2: Update Environment Variables

In Vercel dashboard → Settings → Environment Variables, add:

| Name | Value | Example |
|------|-------|---------|
| `DATABASE_URL` | Auto-filled by Vercel Postgres | `postgresql://...` |
| `NEXTAUTH_SECRET` | Random 32+ char string | `abc123xyz...` |
| `NEXTAUTH_URL` | Your Vercel URL | `https://uha-study.vercel.app` |
| `CRON_SECRET` | Random 32+ char string | `def456uvw...` |

### Step 3: Redeploy

After adding variables:
```bash
vercel --prod
```

Or in Vercel dashboard: Deployments → ... → Redeploy

### Step 4: Initialize Database

After deployment, run:
```bash
# Install Vercel CLI if not already
npm i -g vercel

# Link to your project
vercel link

# Run database migration
vercel env pull .env.production
npx prisma generate
npx prisma db push
```

Or use Vercel's built-in Prisma support (automatic).

---

## Custom Domain (Optional)

Want your own domain like `study.uha-app.com`?

### Step 1: Buy a Domain

- Namecheap: ~$10/year
- Google Domains: ~$12/year
- Cloudflare: ~$9/year

### Step 2: Add to Vercel

1. Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain: `study.yourdomain.com`
3. Follow DNS instructions Vercel provides
4. Wait 5-30 minutes for DNS propagation
5. Done! Your app is now at `study.yourdomain.com`

---

## After Deployment

### Test Your Live App

1. Go to your Vercel URL: `https://your-app.vercel.app`
2. Click "Sign up"
3. Register with UHA email
4. Start using!

### Share with UHA Students

Your app is now live! Share the URL:
```
https://your-app-name.vercel.app
```

Students can:
- Sign up with UHA email
- Add their calendar URL
- Start managing studies immediately!

### Auto-Sync Status

The cron job in `vercel.json` will:
- Run every hour (`0 * * * *`)
- Sync all users' calendars automatically
- Keep everyone's schedule updated

---

## Monitoring & Logs

**View Logs:**
```bash
vercel logs
```

**In Dashboard:**
- Vercel Dashboard → Your Project → Logs
- See all requests, errors, deployments

**Analytics:**
- Vercel Dashboard → Analytics
- See visitor stats, performance

---

## Troubleshooting

### "Database connection error"

**Fix:**
1. Make sure Vercel Postgres is created
2. Check `DATABASE_URL` is set in environment variables
3. Redeploy: `vercel --prod`

### "Authentication error"

**Fix:**
1. Check `NEXTAUTH_SECRET` is set
2. Make sure `NEXTAUTH_URL` matches your actual Vercel URL
3. Redeploy

### "Can't login after signup"

**Fix:**
1. Clear browser cookies
2. Make sure `NEXTAUTH_SECRET` is at least 32 characters
3. Check browser console for errors

### "Calendar not syncing"

**Fix:**
1. Check cron job is enabled in Vercel Dashboard
2. Verify `CRON_SECRET` matches in environment variables
3. Test manually: `curl https://your-app.vercel.app/api/sync/calendars`

---

## Updating Your App

After you push to GitHub, Vercel auto-deploys!

```bash
git add .
git commit -m "Update feature"
git push origin nqa-multi-user
```

Vercel will automatically:
1. Detect the push
2. Build your app
3. Deploy to production
4. Your URL is updated in ~2 minutes!

---

## Cost

**Free Tier Includes:**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Hobby projects unlimited

**Postgres Database:**
- Free tier: 256 MB storage
- Should handle 100+ active UHA students easily

**Paid Plans:** (Only if you outgrow free tier)
- Pro: $20/month (if needed)
- For 1000+ students

---

## Security Checklist

Before sharing widely:

- [ ] `NEXTAUTH_SECRET` is strong random string
- [ ] `CRON_SECRET` is different from `NEXTAUTH_SECRET`
- [ ] All environment variables are set
- [ ] Test login/signup works
- [ ] Test calendar sync works
- [ ] HTTPS is enabled (automatic)

---

## Support

**Deployment Issues:**
- Vercel Docs: https://vercel.com/docs
- Vercel Support: support@vercel.com

**App Issues:**
- GitHub Issues: https://github.com/hussainshaqsi/Perfect-UHA-calender/issues

---

## Quick Reference

**Your URLs:**
- Production: `https://your-app.vercel.app`
- Dashboard: https://vercel.com/dashboard
- Logs: `vercel logs`

**Useful Commands:**
```bash
vercel                 # Deploy to preview
vercel --prod          # Deploy to production
vercel logs            # View logs
vercel env pull        # Download env variables
vercel domains         # Manage domains
```

---

**Ready to Deploy?** Click the deploy button above or run `vercel` in your terminal!

Your professional UHA Study Prioritizer will be live in 5 minutes! 🚀
