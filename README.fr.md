# Priorisateur d Etudes UHA

> Priorisation intelligente des etudes pour les etudiants de l Universite de Haute-Alsace

**Langues:** [English](README.md) | [Francais](README.fr.md) | [Arabic](README.ar.md)

---

## Demarrage Rapide

**3 commandes pour commencer:**

```bash
npm install                                    # Installer les dependances  
npx prisma generate && npx prisma db push     # Configurer la base de donnees
npm run dev                                   # Demarrer sur http://localhost:3000
```

**Premiere fois?** Telechargez Node.js depuis [nodejs.org](https://nodejs.org) puis executez les commandes ci-dessus

**Guide Complet:** [INSTALL.md](INSTALL.md)

## Fonctionnalites

- **Authentification UHA** - Inscrivez-vous avec @uha.fr ou @etu.uha.fr  
- **Synchronisation Automatique** - Collez l URL iCal une fois, synchronisation chaque heure
- **Priorites Intelligentes** - Algorithme IA pour les recommandations d etude  
- **Multilingue** - Francais, Anglais, Arabe (RTL)
- **Mobile-First** - Fonctionne sur tous les appareils
- **Detection d Emails** - Mots-cles d annulation en francais
- **Gestion des Taches** - Organisation par niveau d energie

## Comment Ca Marche

1. **Inscrivez-vous** avec votre email UHA
2. **Connectez** votre URL de calendrier ADE/Moodle
3. **Ajoutez** vos matieres avec notes de difficulte (1-5)
4. **Suivez** examens, SAE, TP avec coefficients
5. **Obtenez** vos priorites personnalisees!

**Formule de Priorite:**
```
score = (poids ?? importance ?? difficulte) / joursRestants + (heuresRestantes ?? 2)
```

## Documentation

- [INSTALL.md](INSTALL.md) - Guide d installation complet
- [QUICKSTART.md](QUICKSTART.md) - Configuration en 5 minutes  
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployer sur Vercel/VPS

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

## Configuration de l Environnement

Creez un fichier `.env`:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="votre-secret-min-32-caracteres"
NEXTAUTH_URL="http://localhost:3000"
CRON_SECRET="autre-secret"
```

Generer des secrets: `openssl rand -base64 32`

## Stack Technique

- Next.js 14 + TypeScript
- NextAuth.js + Prisma
- SQLite / PostgreSQL
- Tailwind CSS + next-intl

## Deploiement

**Vercel (Le Plus Facile):**
1. Connectez le depot GitHub
2. Ajoutez Vercel Postgres
3. Definissez les variables d environnement
4. Deployez!

Guide complet: [DEPLOYMENT.md](DEPLOYMENT.md)

## Depannage

**Impossible d installer?** Installez Node.js depuis [nodejs.org](https://nodejs.org)  
**Erreurs de base de donnees?** Executez `npx prisma db push`  
**Impossible de se connecter?** Verifiez que `.env` contient `NEXTAUTH_SECRET`

Plus d infos: [INSTALL.md](INSTALL.md)

## Support

- Documentation: [INSTALL.md](INSTALL.md)
- Problemes: [GitHub Issues](https://github.com/hussainshaqsi/Perfect-UHA-calender/issues)
- Contact: Support informatique UHA

## Licence

Licence MIT - Gratuit pour les etudiants UHA

---

**Concu pour les etudiants UHA** - Etudiez plus intelligemment, pas plus dur!
