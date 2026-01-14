# Installation Guide - UHA Study Prioritizer

Complete installation guide for everyone - no coding experience needed!

## What You Need

- A computer (Windows, Mac, or Linux)
- Internet connection  
- UHA email (@uha.fr or @etu.uha.fr)
- 15 minutes

## Quick Install (If you have Node.js)

```bash
npm install
npx prisma generate && npx prisma db push
npm run dev
```

Open http://localhost:3000 - Done!

## Step-by-Step Installation

### Step 1: Install Node.js

Download from: **https://nodejs.org**

Click the green "Download Node.js (LTS)" button

**Windows:**
1. Run downloaded file
2. Click Next â†’ Next â†’ Install
3. Click Finish

**Mac:**
1. Open downloaded .pkg file
2. Click Continue â†’ Install
3. Enter password â†’ Click Close

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Verify:**
```bash
node --version
# Should show v18.x.x or higher
```

### Step 2: Download the App

**Option A: Download ZIP**
1. Go to: https://github.com/hussainshaqsi/Perfect-UHA-calender
2. Click "Code" button â†’ "Download ZIP"
3. Extract to Desktop
4. Open folder in terminal/command prompt

**Option B: Git Clone**
```bash
git clone https://github.com/hussainshaqsi/Perfect-UHA-calender.git
cd Perfect-UHA-calender  
git checkout nqa-multi-user
```

### Step 3: Install Dependencies

```bash
npm install
```

Wait 2-3 minutes for installation.

### Step 4: Setup Environment

Create `.env` file in the app folder:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="change-this-to-random-32-chars-minimum"
NEXTAUTH_URL="http://localhost:3000"
CRON_SECRET="another-random-secret-string"
```

**Windows:** Right-click â†’ New â†’ Text Document â†’ Name it `.env`  
**Mac/Linux:** `nano .env` (paste content, Ctrl+X, Y, Enter)

**Important:** Change the secrets to random strings!

### Step 5: Setup Database

```bash
npx prisma generate
npx prisma db push
```

Should see: "Your database is now in sync"

### Step 6: Start the App

```bash
npm run dev
```

Open: **http://localhost:3000**

Success! The app is running!

## First Time Setup

### Create Account

1. Click "Sign up"
2. Enter:
   - Your name
   - UHA email (@uha.fr or @etu.uha.fr)
   - Password (min 6 characters)
3. Click "Create Account"

### Connect Calendar

**Get your calendar URL from:**

**UHA ADE:**
- Open ADE calendar
- Find "Export" or "iCal"  
- Copy the URL (ends with .ics)

**Moodle:**
- Go to Calendar â†’ Export
- Copy calendar URL

**Outlook:**
- Calendar settings â†’ Shared calendars
- Copy ICS link

**Paste URL in onboarding** - Done! Syncs every hour automatically.

## Use on Phone

1. Same WiFi as computer
2. Find computer IP:

**Windows:** `ipconfig` (look for IPv4)  
**Mac/Linux:** `ifconfig | grep inet`

3. On phone browser: `http://YOUR_IP:3000`
4. Login â†’ Mobile interface!

## Troubleshooting

**"npm: command not found"**
- Install Node.js from nodejs.org
- Restart computer

**"Cannot find module"**
```bash
npm install
```

**"Port 3000 in use"**
- Close other terminals
- Or: `npm run dev -- -p 3001`

**"Database error"**
```bash
rm prisma/dev.db      # Mac/Linux
del prisma\dev.db    # Windows
npx prisma db push
```

**"Can't login"**
- Check `.env` file exists
- Has `NEXTAUTH_SECRET`
- Clear browser cookies

**"Calendar not syncing"**
- URL must end with .ics
- Test URL in browser
- Check Settings for last sync time

## Commands Reference

```bash
npm run dev        # Start development server
npm run build      # Build for production  
npm start          # Run production server
npx prisma studio  # View database GUI
```

## Backup Data

Important files:
- `prisma/dev.db` - Your data!
- `.env` - Configuration

Backup weekly: Copy `prisma/dev.db` to USB/cloud

## Next Steps

1. Add subjects with difficulty ratings
2. Add exams and projects
3. Connect calendar for auto-sync
4. Check dashboard daily
5. Manage tasks by energy level

## Deploy Online

Want to access from anywhere?

See [DEPLOYMENT.md](DEPLOYMENT.md) for:
- Vercel (free, easy)
- Railway (free tier)
- VPS (full control)

## Support

- Full docs: [README.md](README.md)
- Issues: https://github.com/hussainshaqsi/Perfect-UHA-calender/issues  
- Contact: UHA IT support

---

**You're all set!** Start studying smarter!

Built with love for UHA students.
