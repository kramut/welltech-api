# 🧪 Come Testare l'API

## Preview Rapida (Senza Database)

1. **Apri il file di test HTML:**
   ```bash
   open test-api.html
   ```
   Oppure apri manualmente `test-api.html` nel browser.

2. **Avvia il server** (in un altro terminale):
   ```bash
   npm run dev
   ```

3. **Testa gli endpoint** cliccando sui pulsanti nella pagina HTML.

> ⚠️ **Nota:** Le chiamate GET funzioneranno anche senza database (restituiranno array vuoti), ma POST/PUT/DELETE richiedono un database configurato.

## Setup Completo (Con Database)

1. **Crea un file `.env`** nella root del progetto:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/welltech"
   PORT=5000
   NODE_ENV=development
   ```

2. **Esegui le migrazioni Prisma:**
   ```bash
   npx prisma migrate dev
   ```

3. **Genera il Prisma Client:**
   ```bash
   npx prisma generate
   ```

4. **Avvia il server:**
   ```bash
   npm run dev
   ```

5. **Testa con il file HTML** o usa curl/Postman:

```bash
# Test endpoint principale
curl http://localhost:5000/

# Test prodotti
curl http://localhost:5000/api/products

# Crea un prodotto
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Prodotto Test",
    "category": "Tech",
    "affiliateLink": "https://example.com"
  }'
```

## Struttura API

- **Products:** `/api/products`
- **Articles:** `/api/articles`
- **Videos:** `/api/videos`
- **Affiliate Earnings:** `/api/affiliate-earnings`

Vedi `README.md` per la documentazione completa degli endpoint.




