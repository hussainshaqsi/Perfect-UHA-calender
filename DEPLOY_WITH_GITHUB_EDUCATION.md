# 🎓 Deploy with GitHub Education - FREE Premium Benefits!

## What You Get with GitHub Education:

✅ **Railway**: $20/month credits for 1 year (normally $5/month free)
✅ **Vercel Pro**: FREE for students
✅ **DigitalOcean**: $200 credit for 1 year
✅ **Heroku**: FREE credits
✅ **MongoDB Atlas**: FREE credits
✅ **And 100+ other tools!**

**For this app**: Use Railway with your Student Pack = **ZERO COST** for the entire year!

---

## Step 1: Activate GitHub Student Developer Pack

### If You Haven't Activated It Yet:

1. Go to: **https://education.github.com/pack**
2. Click **"Get Your Pack"**
3. Verify with your student email (UHA email)
4. Wait for approval (usually instant if using .edu or university email)

### If Already Activated:

Great! You're ready to go.

---

## Step 2: Claim Railway Credits

1. Go to: **https://education.github.com/pack/offers**
2. Search for **"Railway"**
3. Click on Railway offer
4. Click **"Get access by connecting your GitHub account"**
5. It will redirect you to Railway
6. Sign up/login with your GitHub account
7. **Your $20/month credit will be automatically applied!**

---

## Step 3: Deploy to Railway (With Premium Benefits!)

### 3.1 Create New Project

1. Go to **https://railway.app** (you should be logged in)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose: `hussainshaqsi/Perfect-UHA-calender`

### 3.2 Add PostgreSQL Database

1. Click **"+ New"** in your project
2. Select **"Database"** → **"Add PostgreSQL"**
3. Railway provisions a database automatically

**With Student Pack**: You get more resources!
- More storage
- More connections
- Better performance

### 3.3 Configure Environment Variables

Click on your **app service** (not the database) → **"Variables"** tab:

**Add these variables:**

```env
NEXTAUTH_SECRET
APMD7IlwjgxUnbz3N6jcYKTdIjU1P3+BhmpYnGDjRgk=
```

```env
NODE_ENV
production
```

```env
DATABASE_URL
(Click "Add Reference" → Select "PostgreSQL" → Select "DATABASE_URL")
```

### 3.4 Configure Build & Start Commands

Go to **"Settings"** tab:

**Build Command:**
```bash
npm run railway:build
```

**Start Command:**
```bash
npm run railway:start
```

Click **"Save"**

### 3.5 Deploy!

1. Click **"Deploy"** (top right)
2. Wait 2-3 minutes
3. Watch the build logs

### 3.6 Generate Domain

1. Go to **"Settings"** → **"Domains"**
2. Click **"Generate Domain"**
3. You'll get: `https://perfect-uha-calender-production.up.railway.app`

**With Student Pack**: You can also add custom domains for FREE!

### 3.7 Add Final Environment Variable

Go back to **"Variables"** → Add:

```env
NEXTAUTH_URL
https://your-railway-domain.up.railway.app
```

(Replace with your actual Railway URL from step 3.6)

Railway will automatically redeploy.

---

## Step 4: Verify Student Benefits Are Active

1. Go to Railway **"Account Settings"**
2. Click on **"Usage"**
3. You should see: **"Student Plan"** or credits applied
4. Check your monthly credit limit (should be $20+/month)

---

## Alternative: Use Vercel Pro (Also FREE with Student Pack!)

Vercel is also great for Next.js apps and you get **Pro for FREE**!

### Quick Vercel Setup:

1. **Claim Vercel**: https://education.github.com/pack/offers
2. Search **"Vercel"** → Get access
3. **Import project**: https://vercel.com/new
4. Connect GitHub → Choose `Perfect-UHA-calender`
5. **Add Postgres**: Vercel → Storage → Create Database → Postgres
6. **Environment Variables**:
   - `NEXTAUTH_SECRET`: `APMD7IlwjgxUnbz3N6jcYKTdIjU1P3+BhmpYnGDjRgk=`
   - `NEXTAUTH_URL`: (will be set after first deploy)
   - `DATABASE_URL`: (auto-provided by Vercel Postgres)
7. **Deploy**
8. Update `NEXTAUTH_URL` with your Vercel domain

**Vercel Pro Benefits**:
- Unlimited bandwidth
- More build minutes
- Better performance
- Advanced analytics

---

## Recommended: Railway (Best for This App)

**Why Railway over Vercel?**

| Feature | Railway (Student) | Vercel Pro (Student) |
|---------|------------------|---------------------|
| PostgreSQL | ✅ Built-in | ✅ Built-in |
| Prisma Support | ✅ Excellent | ⚠️ Needs config |
| Setup Difficulty | ⭐⭐ Easy | ⭐⭐⭐ Medium |
| Auto-migrations | ✅ Built-in | ❌ Manual |
| Cost with Student Pack | 🆓 FREE | 🆓 FREE |
| Custom Domains | ✅ Unlimited | ✅ Unlimited |

**Verdict**: Railway is easier for Prisma + PostgreSQL apps.

---

## What You're Getting (Worth $240/year!)

With GitHub Student Developer Pack + Railway:

- ✅ **$20/month Railway credits** × 12 months = **$240/year**
- ✅ **PostgreSQL database** (normally $5-10/month)
- ✅ **Automatic HTTPS**
- ✅ **Auto-deploy from GitHub**
- ✅ **Unlimited deployments**
- ✅ **Custom domains**
- ✅ **Advanced monitoring**
- ✅ **Priority support**

**Total Value**: ~$240/year **COMPLETELY FREE!**

---

## Other Benefits You Can Use:

### For This Project:
1. **Railway** - Host the app ✅ (recommended)
2. **Vercel Pro** - Alternative hosting
3. **Namecheap** - 1 free domain (.me) for your app
4. **MongoDB Atlas** - If you want NoSQL in future

### For Future Projects:
- **DigitalOcean** - $200 credit for VPS
- **Azure** - $100 credit
- **Heroku** - Credits for dynos
- **Stripe** - Waived transaction fees
- **SendGrid** - Email API credits
- **Datadog** - Monitoring credits

See all: https://education.github.com/pack/offers

---

## Custom Domain (FREE with Student Pack)

### Option 1: Namecheap (FREE .me domain)

1. Go to: https://education.github.com/pack/offers
2. Find **"Namecheap"**
3. Get 1 FREE year of **.me** domain
4. Register: `uha-study.me` or similar
5. Point to Railway:
   - Add CNAME: `www` → `your-app.up.railway.app`
   - Add A record: `@` → Railway IP
6. In Railway → Settings → Domains → Add custom domain

### Option 2: Free Subdomains

Use free services:
- **is-a.dev** - Free subdomain (e.g., `uha-study.is-a.dev`)
- **js.org** - For JavaScript projects
- **eu.org** - Free domain

---

## Monitoring & Analytics (Also FREE!)

### With Railway Student Plan:

- **Real-time logs**
- **Metrics dashboard**
- **Build history**
- **Database backups**
- **Performance monitoring**

### Add FREE Analytics:

1. **Vercel Analytics** - Add to your site even on Railway
2. **Google Analytics** - Track users
3. **Plausible** (Student discount) - Privacy-friendly analytics

---

## Cost Breakdown (With Student Benefits)

| Service | Normal Cost | Student Cost | Savings |
|---------|-------------|--------------|---------|
| Railway Hosting | $20/month | $0 (FREE) | $240/year |
| PostgreSQL | $10/month | $0 (included) | $120/year |
| SSL Certificate | $50/year | $0 (FREE) | $50/year |
| Domain (.me) | $20/year | $0 (FREE) | $20/year |
| Vercel Pro (optional) | $20/month | $0 (FREE) | $240/year |
| **TOTAL** | **$430/year** | **$0** | **$670/year** |

---

## Quick Deploy Checklist

- [ ] Activate GitHub Student Developer Pack
- [ ] Claim Railway credits (https://railway.app via Student Pack)
- [ ] Create new project from GitHub repo
- [ ] Add PostgreSQL database
- [ ] Set environment variables (3 total)
- [ ] Configure build/start commands
- [ ] Deploy and wait 2-3 minutes
- [ ] Generate domain
- [ ] Update NEXTAUTH_URL
- [ ] Test registration and login
- [ ] (Optional) Add custom domain from Namecheap

---

## Troubleshooting

### "Student credits not showing"

1. Make sure you claimed Railway through the Student Pack page
2. Check Railway Account → Billing → Should show credits
3. If not, disconnect and reconnect GitHub in Railway settings

### "Build fails"

- Check environment variables are set
- Verify DATABASE_URL is referenced correctly
- Check build logs for specific errors

### "Can't access app"

- Make sure domain is generated
- Check deployment status (should be "Active")
- Verify NEXTAUTH_URL is set correctly

---

## Next Steps After Deployment

1. ✅ **Test your app** - Register, login, add data
2. 📧 **Share with UHA students** - Give them the URL
3. 📊 **Add analytics** - Track usage
4. 🌐 **Get custom domain** - Use Namecheap free .me domain
5. 🔔 **Set up monitoring** - Use Railway dashboard
6. 📱 **Test on mobile** - Ensure responsive design works
7. 🎨 **Customize** - Add UHA branding/colors

---

## Support & Resources

**Railway Documentation**: https://docs.railway.app
**Student Pack Benefits**: https://education.github.com/pack
**Community Support**: Railway Discord

**Questions?** Check the Railway dashboard logs first!

---

## 🎉 You're Set!

With GitHub Education, you're getting **$670+/year** in hosting and tools **COMPLETELY FREE**.

This is professional-grade infrastructure at zero cost!

**Start deploying now**: https://railway.app

**Your repo**: https://github.com/hussainshaqsi/Perfect-UHA-calender

---

**Enjoy your free premium hosting!** 🚀🎓
