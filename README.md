# UHA Study Prioritizer

> Smart study prioritization for Universite de Haute-Alsace students

**Languages:** [English](README.md) | [Francais](README.fr.md) | [Arabic](README.ar.md)

---

## Quick Start

**3 commands to get started:**

```bash
npm install                                    # Install dependencies  
npx prisma generate && npx prisma db push     # Setup database
npm run dev                                   # Start at http://localhost:3000
```

**First time?** Download Node.js from [nodejs.org](https://nodejs.org) then run commands above

**Complete Guide:** [INSTALL.md](INSTALL.md)

## Features

- **UHA Authentication** - Sign up with @uha.fr or @etu.uha.fr  
- **Auto Calendar Sync** - Paste iCal URL once, syncs hourly
- **Smart Priorities** - AI algorithm for study recommendations  
- **Multi-language** - French, English, Arabic (RTL)
- **Mobile-First** - Works on all devices
- **Email Detection** - French cancellation keywords
- **Task Management** - Energy-based organization

## How It Works

1. **Sign up** with your UHA email
2. **Connect** your ADE/Moodle calendar URL
3. **Add** subjects with difficulty ratings (1-5)
4. **Track** exams, SAEs, TPs with weights
5. **Get** personalized priorities!

**Priority Formula:**
```
score = (weight ?? importance ?? difficulty) / daysLeft + (hoursLeft ?? 2)
```

## Documentation

- [INSTALL.md](INSTALL.md) - Complete installation guide
- [QUICKSTART.md](QUICKSTART.md) - 5-minute setup  
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deploy to Vercel/VPS

## Installation

**Quick Install:**
```bash
git clone https://github.com/hussainshaqsi/Perfect-UHA-calender.git
cd Perfect-UHA-calender
git checkout nqa-multi-user
npm install
npx prisma generate && npx prisma db push
npm run dev
```

Open http://localhost:3000

## Environment Setup

Create `.env` file:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-min-32-chars"
NEXTAUTH_URL="http://localhost:3000"
CRON_SECRET="another-secret"
```

Generate secrets: `openssl rand -base64 32`

## Tech Stack

- Next.js 14 + TypeScript
- NextAuth.js + Prisma
- SQLite / PostgreSQL
- Tailwind CSS + next-intl

## Deploy

**Vercel (Easiest):**
1. Connect GitHub repo
2. Add Vercel Postgres
3. Set environment variables
4. Deploy!

Full guide: [DEPLOYMENT.md](DEPLOYMENT.md)

## Troubleshooting

**Can't install?** Install Node.js from [nodejs.org](https://nodejs.org)  
**Database errors?** Run `npx prisma db push`  
**Can't login?** Check `.env` has `NEXTAUTH_SECRET`

More: [INSTALL.md](INSTALL.md)

## Support

- Documentation: [INSTALL.md](INSTALL.md)
- Issues: [GitHub Issues](https://github.com/hussainshaqsi/Perfect-UHA-calender/issues)
- Contact: UHA IT support

## License

MIT License - Free for UHA students

---

**Built for UHA students** - Study smarter, not harder!
