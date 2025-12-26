# 🔧 Troubleshooting - ClickBank Endpoint

## Problema: "Cannot GET /api/workflows/clickbank/test"

### Cause Possibili

1. **Errore di Compilazione TypeScript**
   - Il codice TypeScript non viene compilato correttamente
   - Railway fallisce il build e il server non si avvia

2. **Route Non Registrate**
   - Le route non sono state caricate correttamente
   - Il server si avvia ma le route non sono disponibili

3. **Errore di Runtime**
   - Il server si avvia ma c'è un errore che impedisce il caricamento delle route

### Soluzioni

#### 1. Verifica Log Railway

1. Vai su Railway Dashboard → Servizio API → **"Deployments"**
2. Clicca sull'ultimo deploy
3. Vai su **"Logs"**
4. Cerca errori di compilazione o runtime

**Errori comuni da cercare:**
- `error TS2307: Cannot find module 'axios'`
- `error TS2379: Argument of type`
- `SyntaxError` o `ReferenceError`

#### 2. Verifica Build Locale

```bash
cd welltech-api
npm install
npm run build
```

Se ci sono errori, correggili prima di fare push.

#### 3. Verifica che le Route Siano Registrate

Controlla che in `src/index.ts` ci sia:
```typescript
app.use('/api/workflows', workflowsRouter);
```

E che in `src/routes/workflows.ts` ci sia:
```typescript
router.get('/clickbank/test', clickbankController.testConnection);
```

#### 4. Verifica Variabili d'Ambiente

Assicurati che `CLICKBANK_API_KEY` sia presente su Railway:
- Railway Dashboard → Servizio → Variables
- Verifica che `CLICKBANK_API_KEY` sia presente

#### 5. Riavvia il Servizio

1. Railway Dashboard → Servizio API
2. Clicca su **"Settings"**
3. Scrolla fino a **"Restart Service"**
4. Clicca **"Restart"**

#### 6. Verifica URL Corretto

Assicurati di usare l'URL corretto:
```
https://welltechbackend-production.up.railway.app/api/workflows/clickbank/test
```

Non:
```
https://welltechbackend-production.up.railway.app/clickbank/test  ❌
```

### Debug Steps

1. **Testa endpoint root:**
   ```bash
   curl https://welltechbackend-production.up.railway.app/
   ```
   Dovresti vedere la risposta JSON con la lista degli endpoint.

2. **Testa endpoint workflows:**
   ```bash
   curl https://welltechbackend-production.up.railway.app/api/workflows/trends
   ```
   Se questo funziona, il problema è specifico per ClickBank.

3. **Controlla i log in tempo reale:**
   - Railway Dashboard → Deployments → Logs
   - Fai una richiesta all'endpoint
   - Vedi se ci sono errori nei log

### Fix Immediato

Se il problema persiste:

1. **Fai push del codice corretto:**
   ```bash
   git add .
   git commit -m "Fix ClickBank routes"
   git push
   ```

2. **Attendi il deploy automatico su Railway**

3. **Riavvia il servizio se necessario**

### Controlla che il Codice Sia Compilato

Su Railway, verifica che:
- Il build sia completato con successo
- Il file `dist/index.js` esista
- Le route siano presenti in `dist/routes/workflows.js`

### Se Nulla Funziona

1. Controlla i log completi su Railway
2. Verifica che tutte le dipendenze siano installate (`npm install` completato)
3. Verifica che TypeScript compili senza errori
4. Contatta supporto Railway se il problema persiste

