# 🚀 Deploy su Railway

## Setup Backend API su Railway

### 1. Preparazione Repository
Assicurati che il progetto sia su GitHub:
```bash
git init
git add .
git commit -m "Initial commit - WellTech API"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Deploy su Railway

1. **Crea nuovo progetto su Railway:**
   - Vai su [railway.app](https://railway.app)
   - Clicca "New Project"
   - Seleziona "Deploy from GitHub repo"
   - Scegli il repository `welltech-api`

2. **Configura il servizio:**
   - Railway rileverà automaticamente Node.js
   - Il file `railway.json` contiene la configurazione

3. **Variabili d'ambiente:**
   Aggiungi queste variabili nella sezione "Variables" di Railway:
   ```
   DATABASE_URL=<your-postgresql-connection-string>
   PORT=5000
   NODE_ENV=production
   ```

4. **Database PostgreSQL:**
   - Se non hai già un database, aggiungi un servizio PostgreSQL su Railway
   - Railway genererà automaticamente `DATABASE_URL`
   - Copia il valore e aggiungilo alle variabili d'ambiente

5. **Esegui le migrazioni:**
   Railway eseguirà automaticamente il build, ma per le migrazioni Prisma:
   ```bash
   # Via Railway CLI o aggiungi uno script nel package.json:
   "postinstall": "npx prisma generate && npx prisma migrate deploy"
   ```

### 3. Script Package.json per Railway

Aggiungi questi script al `package.json`:
```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "postinstall": "npx prisma generate",
    "migrate": "npx prisma migrate deploy"
  }
}
```

### 4. Verifica Deploy

Dopo il deploy, Railway ti darà un URL tipo:
`https://welltech-api-production.up.railway.app`

Testa l'endpoint:
```bash
curl https://your-app-url.railway.app/
```

## Setup Frontend su Railway

1. **Crea nuovo servizio:**
   - Nel progetto Railway, aggiungi un nuovo servizio
   - Connetti il repository `welltech-frontend`

2. **Configura variabili:**
   ```
   VITE_API_URL=https://your-backend-url.railway.app
   NODE_ENV=production
   ```

3. **Build command:**
   Railway rileverà automaticamente Next.js/Vite

## Domini Personalizzati

Railway permette di aggiungere domini personalizzati:
- Vai su "Settings" → "Domains"
- Aggiungi il tuo dominio
- Configura DNS come indicato

## Monitoraggio

Railway fornisce:
- Logs in tempo reale
- Metrics (CPU, Memory, Network)
- Deploy history
- Rollback automatico in caso di errori

## Note Importanti

- **Database Migrations:** Esegui `npx prisma migrate deploy` dopo ogni deploy in produzione
- **Environment Variables:** Non committare mai il file `.env`
- **Build Time:** Il primo build può richiedere alcuni minuti
- **Cold Starts:** Railway può avere cold starts, considera un servizio sempre attivo per produzione




