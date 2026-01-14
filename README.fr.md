# Priorisateur d'Ã‰tudes UHA

> Priorisation intelligente des Ã©tudes pour les Ã©tudiants de l'UniversitÃ© de Haute-Alsace

**Langues:** [English](README.md) | [FranÃ§ais](README.fr.md) | [Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©](README.ar.md)

---

## DÃ©marrage Rapide

**3 commandes pour commencer:**

```bash
npm install                                    # Installer les dÃ©pendances  
npx prisma generate && npx prisma db push     # Configurer la base de donnÃ©es
npm run dev                                   # DÃ©marrer sur http://localhost:3000
```

**PremiÃ¨re fois?** TÃ©lÃ©chargez Node.js depuis [nodejs.org](https://nodejs.org) puis exÃ©cutez les commandes ci-dessus

**Guide Complet:** [INSTALL.md](INSTALL.md)

## FonctionnalitÃ©s

- **Authentification UHA** - Inscrivez-vous avec @uha.fr ou @etu.uha.fr  
- **Synchronisation Automatique** - Collez l'URL iCal une fois, synchronisation chaque heure
- **PrioritÃ©s Intelligentes** - Algorithme IA pour les recommandations d'Ã©tude  
- **Multilingue** - FranÃ§ais, Anglais, Arabe (RTL)
- **Mobile-First** - Fonctionne sur tous les appareils
- **DÃ©tection d'Emails** - Mots-clÃ©s d'annulation en franÃ§ais
- **Gestion des TÃ¢ches** - Organisation par niveau d'Ã©nergie

## Comment Ã‡a Marche

1. **Inscrivez-vous** avec votre email UHA
2. **Connectez** votre URL de calendrier ADE/Moodle
3. **Ajoutez** vos matiÃ¨res avec notes de difficultÃ© (1-5)
4. **Suivez** examens, SAÃ‰, TP avec coefficients
5. **Obtenez** vos prioritÃ©s personnalisÃ©es!

**Formule de PrioritÃ©:**
```
score = (poids Ã— importance Ã— difficultÃ©) / joursRestants + (heuresRestantes Ã— 2)
```

## Documentation

- [INSTALL.md](INSTALL.md) - Guide d'installation complet
- [QUICKSTART.md](QUICKSTART.md) - Configuration en 5 minutes  
- [DEPLOYMENT.md](DEPLOYMENT.md) - DÃ©ployer sur Vercel/VPS

## Installation

**Installation Rapide:**
```bash
git clone https://github.com/hussainshaqsi/Perfect-UHA-calender.git
cd Perfect-UHA-calender
git checkout nqa-multi-user
npm install
npx prisma generate && npx prisma db push
npm run dev
```

Ouvrez http://localhost:3000

## Configuration de l'Environnement

CrÃ©ez un fichier `.env`:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="votre-secret-min-32-caracteres"
NEXTAUTH_URL="http://localhost:3000"
CRON_SECRET="autre-secret"
```

GÃ©nÃ©rer des secrets: `openssl rand -base64 32`

## Stack Technique

- Next.js 14 + TypeScript
- NextAuth.js + Prisma
- SQLite / PostgreSQL
- Tailwind CSS + next-intl

## DÃ©ploiement

**Vercel (Le Plus Facile):**
1. Connectez le dÃ©pÃ´t GitHub
2. Ajoutez Vercel Postgres
3. DÃ©finissez les variables d'environnement
4. DÃ©ployez!

Guide complet: [DEPLOYMENT.md](DEPLOYMENT.md)

## DÃ©pannage

**Impossible d'installer?** Installez Node.js depuis [nodejs.org](https://nodejs.org)  
**Erreurs de base de donnÃ©es?** ExÃ©cutez `npx prisma db push`  
**Impossible de se connecter?** VÃ©rifiez que `.env` contient `NEXTAUTH_SECRET`

Plus d'infos: [INSTALL.md](INSTALL.md#troubleshooting)

## Support

- Documentation: [INSTALL.md](INSTALL.md)
- ProblÃ¨mes: [GitHub Issues](https://github.com/hussainshaqsi/Perfect-UHA-calender/issues)
- Contact: Support informatique UHA

## Licence

Licence MIT - Gratuit pour les Ã©tudiants UHA

---

**ConÃ§u pour les Ã©tudiants UHA** - Ã‰tudiez plus intelligemment, pas plus dur!
