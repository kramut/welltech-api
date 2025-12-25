# 🚀 Quick Start - Backend WellTech API

## ⚡ Avvio Rapido

### 1. Genera Prisma Client (PRIMA VOLTA)
```bash
cd welltech-api

# Assicurati di avere DATABASE_URL nel .env
npx prisma generate
```

### 2. Avvia il Server
```bash
npm run dev
```

Il server sarà su: **http://localhost:5000**

### 3. Testa gli Endpoint

#### Nel Browser:
- Apri: `http://localhost:5000/` - Info server
- Apri: `http://localhost:5000/api/preview` - Preview struttura API
- Apri: `test-api.html` - Interfaccia di test interattiva

#### Con curl:
```bash
# Root endpoint
curl http://localhost:5000/

# Lista prodotti
curl http://localhost:5000/api/products

# Analytics dashboard
curl http://localhost:5000/api/analytics/dashboard
```

## 📁 Struttura Backend

```
src/
├── index.ts                    ⭐ Entry point - Server Express
│
├── lib/
│   └── prisma.ts              🔌 Prisma Client connection
│
├── types/
│   └── index.ts               📝 TypeScript types
│
├── services/                   💼 Business Logic
│   ├── productService.ts
│   ├── articleService.ts
│   ├── videoService.ts
│   ├── affiliateEarningService.ts
│   └── analyticsService.ts
│
├── controllers/                🎮 HTTP Handlers
│   ├── productController.ts
│   ├── articleController.ts
│   ├── videoController.ts
│   ├── affiliateEarningController.ts
│   └── analyticsController.ts
│
├── routes/                     🛣️ Route Definitions
│   ├── products.ts
│   ├── articles.ts
│   ├── videos.ts
│   ├── affiliateEarnings.ts
│   └── analytics.ts
│
└── middleware/
    └── errorHandler.ts         ⚠️ Error handling
```

## 🔗 Endpoints Disponibili

### Root
- `GET /` → Info server

### Products
- `GET /api/products` → Lista prodotti
- `GET /api/products/:id` → Dettaglio
- `POST /api/products` → Crea
- `PUT /api/products/:id` → Aggiorna
- `DELETE /api/products/:id` → Elimina

### Articles
- `GET /api/articles` → Lista articoli
- `GET /api/articles/:id` → Dettaglio
- `GET /api/articles/slug/:slug` → Per slug
- `POST /api/articles` → Crea
- `PUT /api/articles/:id` → Aggiorna
- `DELETE /api/articles/:id` → Elimina

### Videos
- `GET /api/videos` → Lista video
- `GET /api/videos/:id` → Dettaglio
- `POST /api/videos` → Crea
- `PUT /api/videos/:id` → Aggiorna
- `DELETE /api/videos/:id` → Elimina

### Affiliate Earnings
- `GET /api/affiliate-earnings` → Lista guadagni
- `GET /api/affiliate-earnings/stats` → Statistiche
- `GET /api/affiliate-earnings/:id` → Dettaglio
- `POST /api/affiliate-earnings` → Crea
- `PUT /api/affiliate-earnings/:id` → Aggiorna
- `DELETE /api/affiliate-earnings/:id` → Elimina

### Analytics
- `GET /api/analytics/dashboard` → Dashboard completa

## 🐛 Problemi Comuni

### "Cannot find module '.prisma/client'"
**Soluzione:**
```bash
npx prisma generate
```

### "Database non configurato"
**Soluzione:**
1. Crea file `.env` con `DATABASE_URL`
2. Esegui `npx prisma generate`
3. Riavvia server

### Porta 5000 già in uso
**Soluzione:**
```bash
# Cambia porta in .env
PORT=5001
```

## 📊 Esempio Request

### Crea un Prodotto
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Prodotto Test",
    "category": "Fitness",
    "affiliateLink": "https://example.com/product",
    "price": 99.99
  }'
```

### Crea un Articolo
```bash
curl -X POST http://localhost:5000/api/articles \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Articolo Test",
    "slug": "articolo-test",
    "category": "Wellness",
    "content": "Contenuto articolo..."
  }'
```

## 🎯 Prossimi Step

1. ✅ Backend completo
2. ⏳ Test con database
3. ⏳ Deploy su Railway
4. ⏳ Integrazione frontend




