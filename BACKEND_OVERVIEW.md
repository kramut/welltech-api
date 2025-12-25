# 🔍 Backend WellTech API - Overview Completo

## 📁 Struttura File

```
welltech-api/
├── src/
│   ├── index.ts                    # Entry point - Server Express
│   │
│   ├── lib/
│   │   └── prisma.ts               # Prisma Client singleton
│   │
│   ├── types/
│   │   └── index.ts                # TypeScript types & interfaces
│   │
│   ├── services/                   # Business Logic Layer
│   │   ├── productService.ts
│   │   ├── articleService.ts
│   │   ├── videoService.ts
│   │   ├── affiliateEarningService.ts
│   │   └── analyticsService.ts
│   │
│   ├── controllers/                # HTTP Request Handlers
│   │   ├── productController.ts
│   │   ├── articleController.ts
│   │   ├── videoController.ts
│   │   ├── affiliateEarningController.ts
│   │   └── analyticsController.ts
│   │
│   ├── routes/                     # Route Definitions
│   │   ├── products.ts
│   │   ├── articles.ts
│   │   ├── videos.ts
│   │   ├── affiliateEarnings.ts
│   │   └── analytics.ts
│   │
│   └── middleware/
│       └── errorHandler.ts         # Global error handler
│
├── prisma/
│   └── schema.prisma              # Database schema
│
├── test-api.html                   # Pagina di test interattiva
├── package.json
├── tsconfig.json
└── railway.json                    # Config Railway deploy
```

## 🚀 Come Avviare

### 1. Setup Iniziale
```bash
cd welltech-api

# Installa dipendenze (se non già fatto)
npm install

# Configura database (se non già fatto)
# Crea .env con DATABASE_URL
npx prisma generate
```

### 2. Avvia Server
```bash
npm run dev
```

Il server sarà disponibile su: **http://localhost:5000**

### 3. Test Endpoints

#### Test Rapido (Terminal)
```bash
# Endpoint principale
curl http://localhost:5000/

# Preview struttura API
curl http://localhost:5000/api/preview

# Lista prodotti
curl http://localhost:5000/api/products

# Analytics dashboard
curl http://localhost:5000/api/analytics/dashboard
```

#### Test Interattivo (Browser)
Apri `test-api.html` nel browser per interfaccia di test completa.

## 📡 Endpoints Disponibili

### Root
- `GET /` - Info server e lista endpoints

### Products
- `GET /api/products` - Lista prodotti (`?category=...`)
- `GET /api/products/:id` - Dettaglio prodotto
- `POST /api/products` - Crea prodotto
- `PUT /api/products/:id` - Aggiorna prodotto
- `DELETE /api/products/:id` - Elimina prodotto

### Articles
- `GET /api/articles` - Lista articoli (`?category=...&published=true`)
- `GET /api/articles/:id` - Dettaglio articolo
- `GET /api/articles/slug/:slug` - Articolo per slug (incrementa views)
- `POST /api/articles` - Crea articolo
- `PUT /api/articles/:id` - Aggiorna articolo
- `DELETE /api/articles/:id` - Elimina articolo

### Videos
- `GET /api/videos` - Lista video (`?articleId=...`)
- `GET /api/videos/:id` - Dettaglio video
- `POST /api/videos` - Crea video
- `PUT /api/videos/:id` - Aggiorna video
- `DELETE /api/videos/:id` - Elimina video

### Affiliate Earnings
- `GET /api/affiliate-earnings` - Lista guadagni (`?productId=...`)
- `GET /api/affiliate-earnings/stats` - Statistiche aggregate
- `GET /api/affiliate-earnings/:id` - Dettaglio guadagno
- `POST /api/affiliate-earnings` - Crea guadagno
- `PUT /api/affiliate-earnings/:id` - Aggiorna guadagno
- `DELETE /api/affiliate-earnings/:id` - Elimina guadagno

### Analytics
- `GET /api/analytics/dashboard` - Dashboard completa con:
  - Overview (prodotti, articoli, video, earnings)
  - Top prodotti per revenue
  - Articoli più visti
  - Video TikTok più visti
  - Timeline revenue (ultimi 30 giorni)

## 🔧 Configurazione

### Variabili Ambiente (.env)
```env
DATABASE_URL=postgresql://user:password@host:port/database
PORT=5000
NODE_ENV=development
```

### Script Disponibili
```bash
npm run dev      # Sviluppo (hot reload)
npm run build    # Compilazione TypeScript
npm start        # Produzione
npm run migrate  # Deploy migrazioni Prisma
```

## 🏗️ Architettura

### Flow Request
```
HTTP Request
    ↓
Express Router (routes/)
    ↓
Controller (controllers/)
    ↓
Service (services/)
    ↓
Prisma Client → PostgreSQL
    ↓
Response JSON
```

### Error Handling
- Middleware centralizzato in `errorHandler.ts`
- Gestione errori Prisma
- Messaggi di errore consistenti
- Stack trace in development

### Type Safety
- TypeScript su tutto il codice
- Types da Prisma Client
- Interfaces per input/output API

## 📊 Database Schema

4 modelli principali:
1. **Product** - Prodotti affiliati
2. **Article** - Articoli SEO
3. **Video** - Video TikTok/YouTube
4. **AffiliateEarning** - Tracking guadagni

Vedi `prisma/schema.prisma` per dettagli completi.

## 🚢 Deploy Railway

Vedi `DEPLOY.md` per guida completa.

Quick steps:
1. Push su GitHub
2. Connetti Railway al repo
3. Aggiungi variabili ambiente
4. Deploy automatico

## 🐛 Troubleshooting

### Server non si avvia
- Verifica che la porta 5000 sia libera
- Controlla errori in console
- Verifica che `node_modules` sia installato

### Errori Prisma
- Esegui `npx prisma generate`
- Verifica `DATABASE_URL` in `.env`
- Controlla connessione database

### Errori TypeScript
- Esegui `npm run build` per vedere errori
- Verifica `tsconfig.json`

## 📝 Note

- Il server funziona anche senza database (GET restituiscono array vuoti)
- POST/PUT/DELETE richiedono database configurato
- CORS è abilitato per sviluppo frontend
- Error handler cattura tutti gli errori non gestiti




