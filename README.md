# WellTech Backend API

API backend per la gestione di prodotti affiliati, articoli, video e guadagni.

## Setup

1. Installa le dipendenze:
```bash
npm install
```

2. Configura il database:
   - Crea un file `.env` nella root del progetto
   - Aggiungi `DATABASE_URL="postgresql://user:password@localhost:5432/welltech"`

3. Esegui le migrazioni Prisma:
```bash
npx prisma migrate dev
```

4. Genera il Prisma Client:
```bash
npx prisma generate
```

5. Avvia il server in sviluppo:
```bash
npm run dev
```

Il server sarà disponibile su `http://localhost:5000`

## API Endpoints

### Products

- `GET /api/products` - Ottieni tutti i prodotti (query: `?category=...`)
- `GET /api/products/:id` - Ottieni un prodotto per ID
- `POST /api/products` - Crea un nuovo prodotto
- `PUT /api/products/:id` - Aggiorna un prodotto
- `DELETE /api/products/:id` - Elimina un prodotto

### Articles

- `GET /api/articles` - Ottieni tutti gli articoli (query: `?category=...&published=true`)
- `GET /api/articles/:id` - Ottieni un articolo per ID
- `GET /api/articles/slug/:slug` - Ottieni un articolo per slug (incrementa le views)
- `POST /api/articles` - Crea un nuovo articolo
- `PUT /api/articles/:id` - Aggiorna un articolo
- `DELETE /api/articles/:id` - Elimina un articolo

### Videos

- `GET /api/videos` - Ottieni tutti i video (query: `?articleId=...`)
- `GET /api/videos/:id` - Ottieni un video per ID
- `POST /api/videos` - Crea un nuovo video
- `PUT /api/videos/:id` - Aggiorna un video
- `DELETE /api/videos/:id` - Elimina un video

### Affiliate Earnings

- `GET /api/affiliate-earnings` - Ottieni tutti i guadagni (query: `?productId=...`)
- `GET /api/affiliate-earnings/stats` - Ottieni statistiche aggregate
- `GET /api/affiliate-earnings/:id` - Ottieni un guadagno per ID
- `POST /api/affiliate-earnings` - Crea un nuovo guadagno
- `PUT /api/affiliate-earnings/:id` - Aggiorna un guadagno
- `DELETE /api/affiliate-earnings/:id` - Elimina un guadagno

## Struttura del Progetto

```
src/
├── controllers/     # Controllers per gestire le richieste HTTP
├── services/        # Logica di business e interazione con il database
├── routes/          # Definizione delle routes
├── middleware/      # Middleware personalizzati
├── types/           # TypeScript types e interfaces
└── lib/             # Utilities (es. Prisma Client)
```

## Tecnologie

- Express.js
- Prisma ORM
- PostgreSQL
- TypeScript




